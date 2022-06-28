import { ReactElement, ReactNode, useState } from 'react';
import { SessionProvider } from "next-auth/react";
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../../utils/mui/theme';
import createEmotionCache from '../../utils/mui/createEmotionCache';
import { NextPage } from 'next/types';
import { wrapper } from '../store/store';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
    emotionCache?: EmotionCache
}

function MyApp(props: AppPropsWithLayout) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const getLayout = Component.getLayout ?? ((page) => page)

    return (
                <SessionProvider
                    session={pageProps?.session}
                    refetchInterval={5 * 60}
                    refetchOnWindowFocus={true}
                >
                    {
                        getLayout(
                            <>
                                <CacheProvider value={emotionCache}>
                                    <Head>
                                        <meta name="viewport" content="initial-scale=1, width=device-width" />
                                        <link rel="shortcut icon" href="/public/favicon.ico" />
                                    </Head>
                                    <ThemeProvider theme={theme}>
                                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                                        <CssBaseline />
                                        <Component {...pageProps} />
                                    </ThemeProvider>
                                </CacheProvider>

                            </>
                        )
                    }
                </SessionProvider>
    )
}

export default wrapper.withRedux(MyApp)