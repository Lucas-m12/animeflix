import { useEffect } from 'react';
import Img from 'next/image';
import type { GetServerSideProps, GetStaticPaths, NextPage } from 'next';

import StarIcon from 'assets/icons/star.svg';
import StarsIcon from 'assets/icons/stars.svg';
import TicketIcon from 'assets/icons/ticket.svg';
import ActionIcon from 'assets/icons/action.svg';

import Naruto from 'assets/images/naruto.png';

import {
	AnimeContainer,
	AnimeDescription,
	AnimesList,
	AnimesSection,
	AnimeTitle,
	ButtonContainer,
	CarouselContainer,
	Container,
	Infos,
	ListTopCategories,
	TextContainer,
	TopCategoriesContainer,
	TopViewsContainer
} from './styles';
import { Api } from 'services/api';
import { dehydrate, QueryClient } from 'react-query';
import { addAnimes, addSelectedCategory, Anime, getAnimes } from 'slices/anime';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Header from 'components/Header';
import { Button } from 'components/Button';
import ListAnimes from 'components/ListAnimes';

interface Props {
  genres: string[];
}

interface AnimeResponse {
  data: {
    count: number;
    current_page: number;
    documents: Anime[];
    last_page: number;
  }
}

const Home = ({ genres }: Props) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const animes = useSelector(getAnimes);

	async function handleSelectGenre(genre: string) {
		const { 
			data: { data } 
		} = await Api.get<AnimeResponse>(`anime?status=1&nsfw=true&genres=${genre}&with_episodes=true`);

		dispatch(addSelectedCategory({
			category: genre
		}));
		dispatch(addAnimes(data.documents));
		router.push('/ListByCategory');
	};

	return (
		<Container>
			<Header isHome={true} />
			<TopViewsContainer>
				<TextContainer>
					<Img src={StarIcon} alt="star" />
					<span>Top visualizações</span>
				</TextContainer>
				<CarouselContainer>
					image
				</CarouselContainer>
			</TopViewsContainer>
			<TopCategoriesContainer>
				<TextContainer>
					<Img src={TicketIcon} alt="ticket" />
					<span>Top categorias</span>
				</TextContainer>
				<ListTopCategories>
					{
						genres?.map(genre => (
							<button 
								type='button' 
								key={genre} 
								onClick={() => handleSelectGenre(genre)}
							>
								{/* <Img src={ActionIcon} alt="action" /> */}
								<span>{genre}</span>
							</button>
						))
					}
				</ListTopCategories>
			</TopCategoriesContainer>
			<AnimesSection>
				<TextContainer>
					<Img src={StarsIcon} alt="stars" />
					<span>Animes</span>
				</TextContainer>
				<AnimesList>
					<ListAnimes animes={animes} />
				</AnimesList>
			</AnimesSection>
		</Container>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	// const queryClient = new QueryClient();
	// await queryClient.prefetchQuery(['getGenres'], () => 
	// 	Api.get('resources/1.0/0').then(({ data }) => data)
	// );
	const opa = await Api.get('resources/1.0/0');
	// console.log({opa: });
	return {
		props: {
			genres: opa.data.data.genres
		}
	};
};

export default Home;
