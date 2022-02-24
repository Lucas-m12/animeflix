import Img from 'next/image';
import type { GetServerSideProps, NextPage } from 'next';

import StarsIcon from 'assets/icons/stars.svg';
import TicketIcon from 'assets/icons/ticket.svg';

import {
	AnimesList,
	AnimesSection,
	CarouselContainer,
	Container,
	ListTopCategories,
	TextContainer,
	TopCategoriesContainer,
} from './styles';
import { Api } from 'services/api';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { addAnimes, addSelectedCategory, Anime, getAnimes } from 'slices/anime';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Header from 'components/Header';
import ListAnimes from 'components/ListAnimes';
import { getGenres } from 'utils/getGenres';
import SkeletonComponent from 'components/SkeletonComponent';
import { twelveHoursInMiliseconds } from 'utils/twelveHoursInMiliseconds';
import Carousel from 'components/Carousel';
import { AnimeResponse } from 'hooks/useFetchAnimes';
import { useEffect } from 'react';
interface Props {
	genres: string[];
	animes: Anime[];
}

const Home = (props: Props) => {
	const dispatch = useDispatch();
	const router = useRouter();
	// const animes = useSelector(getAnimes);
	const { isSuccess, isLoading, data: genres } = useQuery<string[]>(
		'genres', 
		getGenres,
		{
			staleTime: twelveHoursInMiliseconds,
			initialData: props.genres
		}
	);

	async function handleSelectGenre(genre: string) {
		router.push(`/ListByCategory/${genre}`);
	};

	useEffect(() => {
		dispatch(addAnimes(props.animes));
	}, [dispatch, props.animes]);

	return (
		<Container>
			<Header isHome={true} />
			<CarouselContainer>
				<Carousel />
			</CarouselContainer>
			<TopCategoriesContainer>
				<TextContainer>
					<Img src={TicketIcon} alt="ticket" />
					<span>Top categorias</span>
				</TextContainer>
				<ListTopCategories>
					{
						isLoading && (
							<SkeletonComponent />
						)
					}
					{
						!isLoading && isSuccess && (
							genres?.map(genre => (
								<button 
									type='button' 
									key={genre} 
									onClick={() => handleSelectGenre(genre)}
								>
									<span>{genre}</span>
								</button>
							))
						)
					}
				</ListTopCategories>
			</TopCategoriesContainer>
			<AnimesSection>
				<TextContainer>
					<Img src={StarsIcon} alt="stars" />
					<span>Animes</span>
				</TextContainer>
				<AnimesList>
					<ListAnimes type="all" />
				</AnimesList>
			</AnimesSection>
		</Container>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const [genres, animes] = await Promise.all([
		getGenres(),
		Api.get<AnimeResponse>(
			'/anime?nsfw=true&with_episodes=false&page=1'
		)
	]);
	// const genres = await getGenres();
	return {
		props: {
			genres,
			animes: animes.data.data.documents
		}
	};
};

export default Home;
