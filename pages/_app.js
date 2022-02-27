/* LIBRAIRIES */ 
import React, { useState } from 'react';
import SideInfosContext from '../context/SideInfosContext';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider, theme } from '@chakra-ui/react';

/* COMPONENT */
import Layout from '../components/Layout/Layout';

/* CSS */
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

    const [queryClient] = useState(() => new QueryClient());
    const [isSideOpen, setIsSideOpen] = useState(false);
    const [rateApplicant, setRateApplicant] = useState(0);
    const [indexRow, setIndexRow] = useState('');
    const [applicant, setApplicant] = useState({});

    return (
        <SideInfosContext.Provider value={{
            isSideOpen: isSideOpen, 
            setIsSideOpen: setIsSideOpen,
            rateApplicant: rateApplicant, 
            setRateApplicant: setRateApplicant,
            index: indexRow,
            setIndexRow: setIndexRow, 
            applicant: applicant,
            setApplicant: setApplicant
        }}
        >
            <Layout>
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                    <ChakraProvider theme={theme}>
                        <Component {...pageProps} />
                    </ChakraProvider>
                    </Hydrate>
                </QueryClientProvider>   
            </Layout>    
        </SideInfosContext.Provider>
    )
}

export default MyApp;
