import { useEffect } from 'react';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';

import { Container, Content, Main, PageTitle } from './styles';
import { getAnimesByCategory, getSelectedCategory } from 'slices/anime';
import Header from 'components/Header';
import StarsIcon from 'assets/icons/stars.svg';
import Image from 'next/image';
import ListAnimes from 'components/ListAnimes';

const ListByCategory: NextPage = () => {

	const selectedCategory = useSelector(getSelectedCategory);
	const animes = useSelector(getAnimesByCategory);

	useEffect(() => {
	}, [animes, selectedCategory]);

	return (
		<Container>
			<Header />

			<Main>
				<PageTitle>
					<Image 
						src={StarsIcon}
						alt="stars"
					/>

					<span>{selectedCategory}</span>
				</PageTitle>

				<Content>
					<ListAnimes animes={animes} />
				</Content>
			</Main>
		</Container>
	);
};

export default ListByCategory;