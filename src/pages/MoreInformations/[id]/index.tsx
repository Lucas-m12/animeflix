import Header from 'components/Header';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Parser from 'html-react-parser';
import { getAnimeById, selectAnimeById } from 'slices/anime';
import { RootState } from 'store';
import { BackgroundContainer, Container, Description, Infos, ListSaga, Main } from 'styles/pages/moreInformations';
import Sagas from 'components/Sagas';

interface Props {

};

const MoreInformation = (props: Props) => {
	const dispatch = useDispatch();
	const { query: { id }} = useRouter();
	const anime = useSelector((state: RootState) => getAnimeById(
 		state, parseInt(id as string))
	);

	return (
		<Container>
			<Header />
			<BackgroundContainer
				urlImage={String(anime?.banner_image)}
			/>

			<Main>
				<h1>{anime?.titles.en}</h1>
				<Infos>
					<span className='active'>{anime?.score}% Relevante</span>
					<span>{anime?.season_year}</span>
					<span>{anime?.episodes_count} Episódios</span>
				</Infos>
				<Description>
					<p>
						{Parser(String(anime?.descriptions.en))}
					</p>
				</Description>
				<ListSaga>
					{
						anime?.sagas?.length && (
							<h3>Sagas</h3>
						)
					}

					<ul>
						{
							anime?.sagas?.map(saga => (
								<Sagas saga={saga} key={saga.titles.jp} />
							))
						}
					</ul>
				</ListSaga>
			</Main>
		</Container>
		
	);
};

export default MoreInformation;