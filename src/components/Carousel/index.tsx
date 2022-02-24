import Slick from 'react-slick';

import Naruto from 'assets/images/naruto.jpg';
import OnePiece from 'assets/images/one-piece.jpg';
import Kimetsu from 'assets/images/kimetsu.png';
import Anime1 from 'assets/images/anime-1.jpg';
import Image from 'next/image';
import { Container } from './styles';

const Carousel = () => {

	return (
		<Slick
			autoplay
			infinite
			arrows={false}
		>
			<Container>
				<Image
					src={Naruto}
					alt='naruto'
				/>
			</Container>
			
			<Container>
				<Image
					src={OnePiece}
					alt='OnePiece'
				/>
			</Container>
			
			<Container>
				<Image
					src={Kimetsu}
					alt='Kimetsu'
				/>
			</Container>
			
			<Container>
				<Image
					src={Anime1}
					alt='Anime1'
				/>
			</Container>
			
		</Slick>
	);
};

export default Carousel;