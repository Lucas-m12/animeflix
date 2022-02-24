import styled from 'styled-components';

interface AnimeImageProps {
  urlImage: string;
}

export const Container = styled.section`
  /* margin: 0 auto; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 40px;
  
  @media(max-width: 1890px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  };

  @media(max-width: 1580px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  };

  @media(max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  };

  @media(max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  };

  @media(max-width: 680px) {
    display: flex;
    align-items: center;
    /* justify-content: space-evenly; */
    
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CardContainer = styled.div`
  width: 273px;
  height: 392px;

  background: ${({ theme }) => theme.colors.backgroundDark};
  box-shadow: inset -4px -3px 4px rgba(62, 0, 0, 0.25), inset 4px 4px 10px #1B090A;
  border-radius: 18px 18px 0px 0px;

  .content {
    width: 100%;
    padding-bottom: 24px;
    height: calc(100% - 150px);
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    justify-content: space-around;
    /* align-items: flex-start; */
  }
`;

export const AnimeImage = styled.div<AnimeImageProps>`
  width: 273px;
  height: 150px;
  background-image: url(${({ urlImage }) => urlImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  box-shadow: inset -4px -3px 4px rgba(62, 0, 0, 0.25);
  border-radius: 18px 18px 0px 0px;
`;

export const Infos = styled.div`
  padding: 0 12px;
  margin-top: 24px;
  margin-bottom: 28px;
`;

export const AnimeDescription = styled.p`
  font-size: 16px;
  opacity: 0.6;
  margin-top: 4px;

  & span {
    opacity: 0.5;
  }
`;
