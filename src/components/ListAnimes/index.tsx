import Image from 'next/image';
import { AnimeDescription, AnimeImage, CardContainer, Container, Infos } from './styles';

import Naruto from 'assets/images/naruto.png';
import { Anime } from 'slices/anime';
import { Button } from 'components/Button';
import { ButtonContainer } from 'pages/styles';
import { useRouter } from 'next/router';

interface Props {
  animes: Anime[];
}

const ListAnimes = ({ animes }: Props) => {
	const route = useRouter();
  
	function handleMoreInfos(animeId: number) {
		route.push(`/MoreInformations/${animeId}`);
	}

	return (
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
									<strong>Nota geral do público: </strong>
									<span>{anime.score / 10}</span>
									{/* {anime.descriptions.en} */}
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
		</Container>
	);
};

export default ListAnimes;