import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 20px;
`;


export const TopViewsContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextContainer = styled.section`
  & span {
    margin-left: 8px;
  }
`;

export const CarouselContainer = styled.section`
  margin-top: 2em;
`;

export const TopCategoriesContainer = styled.section`
  margin-top: 24px;
  width: 100%;
`;

export const ListTopCategories = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    /* background: transparent;//${({ theme }) => theme.colors.backgroundDark}; */
    /* background: #CCC; */
    /* color: #D2D */
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;//
    /* background: #c2d; */
    /* color: #D2D */
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.backgroundButtonDark};
  }

  @media(max-width: 620px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }

  & button {
    margin-left: 24px;
    margin-bottom: 8px;
    min-width: 90px;
    height: 60px;
    background: ${({ theme }) => theme.colors.backgroundDark};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid ${({ theme }) => theme.colors.backgroundDark};
    border-radius: 12px;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: background 0.2s ease-in;

    & span {
      color: ${({ theme }) => theme.colors.font};
      font-size: 0.6rem;
      margin: 0 auto;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.background};
    }

    &:active {
      background: ${({ theme }) => theme.colors.backgroundDark};
    }
  }
`;

export const AnimesSection = styled.main`
  margin-top: 24px;
`;

export const AnimesList = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AnimeContainer = styled.div`
  width: 173px;
  height: 221px;

  background: ${({ theme }) => theme.colors.backgroundDark};
  box-shadow: inset -4px -3px 4px rgba(62, 0, 0, 0.25), inset 4px 4px 10px #1B090A;
  border-radius: 18px 18px 0px 0px;
  
  .image-anime-container {
    box-shadow: inset -4px -3px 4px rgba(62, 0, 0, 0.25), inset 4px 4px 10px #1B090A;
    border-radius: 18px 18px 0px 0px;
    overflow: hidden;
  }

  & + & {
    margin-left: 16px;
  }
`;

export const Infos = styled.div`
  padding: 0 12px;
  margin-bottom: 24px;
`;

export const AnimeTitle = styled.h3`
`;

export const AnimeDescription = styled.p`
  font-size: 16px;
  opacity: 0.25;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
`;


