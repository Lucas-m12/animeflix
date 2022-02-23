import Header from 'components/Header';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Parser from 'html-react-parser';
import { getAnimeById, selectAnimeById } from 'slices/anime';
import { RootState } from 'store';
import { BackgroundContainer, Container, Description, Infos, ListSaga, Main } from './styles';
import Sagas from '../components/Sagas';

interface Props {

};

const MoreInformation = (props: Props) => {
	const dispatch = useDispatch();
	const { query: { id }, ...route} = useRouter();
	const anime = useSelector((state: RootState) => getAnimeById(
 		state, parseInt(id as string))
	);
	
	useEffect(() => {
		console.log(anime);
	});

	return (
		<Container>
			<Header />
			<BackgroundContainer
				urlImage={String(anime?.banner_image)}
			/>

			<Main>
				<h1>One Piece</h1>
				<Infos>
					<span className='active'>99% Relevante</span>
					<span>1999</span>
					<span>10 temporadas</span>
				</Infos>
				<Description>
					<p>
						{Parser(String(anime?.descriptions.en))}
					</p>
				</Description>
				<ListSaga>
					<h3>Sagas</h3>

					<ul>
						{
							anime?.sagas.map(saga => (
								<Sagas saga={saga} key={saga.episode_from} />
							))
						}
					</ul>
				</ListSaga>
			</Main>
		</Container>
		
	);
};

export default MoreInformation;