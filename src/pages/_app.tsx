import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from 'store';
// import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/Global';
import { DefaultTheme } from '../../styles/themes/Default';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();
	return (
		<ThemeProvider theme={DefaultTheme}>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					{/* <Hydrate state={pageProps.dehydratedState}> */}
					<GlobalStyles />
					<Component {...pageProps} />
					{/* </Hydrate> */}
				</QueryClientProvider>
			</Provider>
		</ThemeProvider>
	);
}

export default MyApp;
