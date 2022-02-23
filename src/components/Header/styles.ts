import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const FirstButtonContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.35);

  & button {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-radius: 12px;
    transition: background 0.1s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.backgroundDark};
    }

    &:active {
      background: rgba(0, 0, 0, 0.35);
    }
  }
`;

export const LogoContainer = styled.div`
  margin: 0 auto;
`;

