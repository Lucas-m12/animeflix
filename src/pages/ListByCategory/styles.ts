import styled from 'styled-components';

export const Container = styled.div`
  margin: 24px;
  height: 100vh;
  @media(max-width: 620px ) {
    margin: 50px 24px;
  };
`;

export const Main = styled.main`
  height: 80%;
  display: flex;
  flex-direction: column;
  @media(max-height: 900px ) {
    justify-content: center;
  };
`;

export const PageTitle = styled.div`
  margin-top: 32px;

  & span {
    margin-left: 8px;
    font-size: 1.6rem;
  }
`;

export const Content = styled.section`
  margin-top: 24px;
`;