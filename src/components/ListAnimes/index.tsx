import { AnimeDescription, AnimeImage, CardContainer, Container, Infos } from './styles';

import { addAnimes, Anime, getAnimes, getAnimesByCategory } from 'slices/anime';
import { Button } from 'components/Button';
import { ButtonContainer } from 'styles/pages';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import useFetchAnimes, { AnimeResponse } from 'hooks/useFetchAnimes';
import { useEffect, useRef, useState } from 'react';
import { Api } from 'services/api';
import { GetServerSideProps } from 'next';

interface Props {
  // data?: Anime[];
	type: string;
}

const ListAnimes = ({ type }: Props) => {
	const dispatch = useDispatch();
	const route = useRouter();
	const animes = useSelector(type === 'all' ? getAnimes : getAnimesByCategory);
	// const animes = [] as Anime[];
	const loadRef = useRef(null);
	const [currentPage, setCurrentPage] = useState(1);
	// const {
	// 	data,
	// 	isFetchingNextPage,
	// 	fetchNextPage,
	// 	hasNextPage,
	// } = useInfiniteQuery(
	// 	'allAnimes',
	// 	async ({ pageParam = 1 }) => {
	// 		const { data } = await Api.get<AnimeResponse>(
	// 			`/anime?nsfw=true&with_episodes=false&page=${pageParam}`
	// 		);
	// 		return data.data;
	// 	}, 
	// 	{
	// 		// pre
	// 		// getPreviousPageParam: (firstPage) => {
	// 		// 	console.log({firstPage});
	// 		// 	return firstPage?.current_page < firstPage?.last_page ? firstPage?.current_page - 1 : 1;
	// 		// },
			
	// 		getNextPageParam: (lastPage) => {
	// 			// console.log({lastPage, aaa: lastPage?.current_page < lastPage?.last_page});
	// 			console.log('Hugo');
	// 			return lastPage?.current_page < lastPage?.last_page ? lastPage?.current_page + 1 : false;
	// 		}
	// 	}
	// );

	function handleMoreInfos(animeId: number) {
		route.push(`/MoreInformations/${animeId}`);
	};

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '20px',
			threshold: 1.0
		};

		const observer = new IntersectionObserver(entries => {
			const target = entries[0];
			if (target.isIntersecting) {
				setCurrentPage(prevPage => prevPage + 1);
			}
		}, options);
		const element = loadRef.current;
		if (!element) return;
		observer.observe(element);
		return () => {
			observer.unobserve(element);
		};
	}, []);

	useEffect(() => {
		if (currentPage === 1) return;
		(async () => {
			const { data } = await Api.get<AnimeResponse>(
				`/anime?nsfw=true&with_episodes=false&page=${currentPage}`
			);
			
			dispatch(addAnimes(data?.data?.documents));
		})();
	}, [currentPage, dispatch]);

	useEffect(() => {
		setCurrentPage(1);
	}, [type]);

	return (
		<>
			<Container>
				{
					animes.map(anime => (
						<CardContainer key={anime.id}>
							<AnimeImage 
								className='anime-image'
								urlImage={anime.cover_image}
								style={{
									backgroundColor: anime.cover_color
								}}
							/>

							<div className='content'>
								<Infos>
									<h3>{anime.titles.rj}</h3>
									<AnimeDescription>
										<strong>Relevancia: </strong>
										<span>{anime.score}%</span>
									</AnimeDescription>
								</Infos>

								<ButtonContainer>
									<Button 
										type='button'
										onClick={() => handleMoreInfos(anime.id)}
									>
                  Mais Informações
									</Button>
								</ButtonContainer>
							</div>
						</CardContainer>
					))
				}
				<p ref={loadRef}>Carregando mais...</p>
			</Container>
		</>
	);
};

export default ListAnimes;