/* LIBRAIRIES */ 
import React, { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider, theme } from '@chakra-ui/react'

/* COMPONENT */
import Layout from '../components/Layout/Layout';

/* CSS */
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

    const [queryClient] = useState(() => new QueryClient())

    return (
        <Layout>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                <ChakraProvider theme={theme}>
                    <Component {...pageProps} />
                </ChakraProvider>
                </Hydrate>
            </QueryClientProvider>   
        </Layout>    
    )
}

export default MyApp;
