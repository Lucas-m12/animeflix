import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundDark: string;
      backgroundButton: string;
      backgroundButtonLight: string;
      backgroundButtonDark: string;

      font: string;
      // primary: {
			// 	main: string;
			// 	light: string;
			// };
			// danger: {
			// 	main: string;
			// 	light: string;
			// 	dark: string;
			// },
			// gray: {
			// 	900: string;
			// 	200: string;
			// 	100: string;
			// }
      // secundary?: string;
      // background: string;
      // text?: string;
    };
  }
}
