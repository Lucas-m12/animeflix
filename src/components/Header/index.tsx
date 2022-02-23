import { NextComponentType } from 'next';

import { Container, FirstButtonContainer, LogoContainer } from './styles';

import ArrowIcon from 'assets/icons/arrow.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface Props {
  isHome?: boolean;
}

const Header = ({
	isHome
}: Props) => {
	const route = useRouter();

	function handleBack() {
		route.back();
	};

	return (
		<Container>
			{
				!isHome && (
					<FirstButtonContainer>
						<button
							type='button'
							onClick={handleBack}
						>
							<Image 
								src={ArrowIcon}
								alt="Arrow"
							/>
						</button>
					</FirstButtonContainer>
				)
			}

			<LogoContainer>
        ANIMEFLIX
			</LogoContainer>
		</Container>
	);
};

export default Header;