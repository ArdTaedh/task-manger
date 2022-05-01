import { ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../utils/mui/theme';
import createEmotionCache from '../utils/mui/createEmotionCache';
import { NextPage } from 'next/types';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
    emotionCache?: EmotionCache
}

export default function MyApp(props: AppPropsWithLayout) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const getLayout = Component.getLayout ?? ((page) => page)

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            }
        }
    })

    return (
        <QueryClientProvider
            client={queryClient}
        >
            {
                getLayout(
                    <>
                        <CacheProvider value={emotionCache}>
                            <Head>
                                <meta name="viewport" content="initial-scale=1, width=device-width" />
                                <link rel="shortcut icon" href="/favicon.ico" />
                            </Head>
                            <ThemeProvider theme={theme}>
                                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                                <CssBaseline />
                                <Component {...pageProps} />
                                <ReactQueryDevtools initialIsOpen={false}  />
                            </ThemeProvider>
                        </CacheProvider>
                       
                    </>
                )
            }
        </QueryClientProvider>
    )

}