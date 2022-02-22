import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

		box-sizing: border-box;
		font-family: 'Manrope', sans-serif;
  }

  body {
		background: ${({ theme }) => theme.colors.background};
		font-size: 16px;
		color: ${({ theme }) => theme.colors.font};
	}

	button {
		cursor: pointer;
		box-sizing: border-box;
		border: none;
	}
`;