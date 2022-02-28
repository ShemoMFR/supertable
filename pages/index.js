/**
 * @file index.js is the main file of the table application
 * @author Moshé Frydmann
 * @see <a href="https://github.com/ShemoMFR/supertable" target='_blank'>Repo GitHub</a>
 */

/* LIBRAIRIES */
import { dehydrate, useQuery, QueryClient } from 'react-query';

/* UI */
import DataTable from '../components/DataTable/DataTable'; 

/* SERVICE */
const getDatas = async () => await fetch("/api/datas").then(res => res.json());

export default function Index(props) {

    const {data, isLoading, error} = useQuery('fetchingDatas', getDatas); 

    return (
        <main style={{height: "70vh", display: "flex", justifyContent: "center", alignItems: "center"}} >
            {data ? <DataTable datas={data.datas}/> : <p>{error}</p>}
        </main>
    )
}

/**
 * getStaticProps is a server side function. It will generate static render of the data for ths component
 * @type {function()}
 * @return {Props}
 */

export async function getStaticProps() {

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery('fetchingDatas', getDatas);
 
    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        },
    }
}
