import { useEffect } from 'react';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Content, Main, PageTitle } from 'styles/pages/genre';
import { addAnimes, addSelectedCategory, getAnimesByCategory, getSelectedCategory } from 'slices/anime';
import Header from 'components/Header';
import StarsIcon from 'assets/icons/stars.svg';
import Image from 'next/image';
import ListAnimes from 'components/ListAnimes';
import useFetchAnimesByGenre from 'hooks/useFetchAnimesByGenre';
import { useRouter } from 'next/router';

const ListByCategory: NextPage = () => {
	const dispatch = useDispatch();
	const { query: { genre } } = useRouter();
	const { data, isLoading } = useFetchAnimesByGenre(String(genre));
	const selectedCategory = useSelector(getSelectedCategory);
	const animes = useSelector(getAnimesByCategory);

	useEffect(() => {
		if (!data) return;
		if (selectedCategory === genre) return;
		dispatch(addSelectedCategory({
			category: String(genre)
		}));
		dispatch(addAnimes(data));
	}, [data, dispatch, genre, selectedCategory]);

	return (
		<Container>
			<Header />
			{
				!isLoading && (
					<Main>
						<PageTitle>
							<Image 
								src={StarsIcon}
								alt="stars"
							/>

							<span>{selectedCategory}</span>
						</PageTitle>

						<Content>
							{
								animes.length ? (
									<ListAnimes type='byGenre' />
								) : (
									<>
									
									</>
								)
							}
						</Content>
					</Main>
				)
			}
		</Container>
	);
};

export default ListByCategory;