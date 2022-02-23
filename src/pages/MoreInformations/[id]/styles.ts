import styled from 'styled-components';

interface BackgroundContainerProps {
  urlImage: string;
}

export const Container = styled.div`
  margin: 24px;
  height: 100vh;
  /* overflow-y: scroll; */
`;

export const BackgroundContainer = styled.div<BackgroundContainerProps>`
  width: 100%;
  margin-top: 12px;
  height: 28vh;
  padding: 24px;
  background-image: url(${({ urlImage }) => urlImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  left: 0;
  right: 0;
  top: 20;
  box-shadow: inset -4px -3px 4px ${({ theme }) => theme.colors.background}, inset 10px 10px 10px ${({ theme }) => theme.colors.background};
  border-radius: 18px 18px 0px 0px;
`;

export const Main = styled.main`
  margin-top: calc(80% - 28vh);
  & h1 {
    margin-bottom: 8px;
  }
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & span {
    font-size: 1.1rem;
    &:not(:first-child) {
      margin-left: 1em;
    }
  }

  .active {
    color: #00FF00
  }
`;

export const Description = styled.article`
  margin-top: 4em;
  font-size: 1.14rem;
  /* max-height: 200px; */
`;

export const ListSaga = styled.section`
  margin-top: 4em;
  
  & ul {
    margin-top: 24px;
    list-style: none;
    
    & li {
      cursor: pointer;
      &:not(:first-child) {
        margin-top: 12px;
      }
    }
  }
`;