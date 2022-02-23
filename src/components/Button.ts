import styled from 'styled-components';

export const Button = styled.button`
  width: 154px;
  height: 28px;
  background: ${({ theme }) => theme.colors.backgroundButton};
  opacity: 0.7;
  box-shadow: inset -2px -2px 2px rgba(67, 0, 0, 0.25), inset 2px 2px 2px #C9000B;
  border-radius: 18px;
  transition: background 0.2s ease-in;

  color: ${({ theme }) => theme.colors.font};

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundButtonDark};
  }

  &:active {
    background: ${({ theme }) => theme.colors.backgroundButtonLight};
  }
`;