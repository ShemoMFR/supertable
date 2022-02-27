/* LIBRAIRIES */
import { dehydrate, useQuery, QueryClient } from 'react-query';

/* UI */
import DataTable from '../components/DataTable/DataTable'; 

const getDatas = async () => await (await fetch("/api/datas").then(res => res.json()));

export default function Index(props) {

    const {data, isLoading, error} = useQuery('fetchingDatas', getDatas); 

    return (
        <main>
            {data && <DataTable datas={data.datas}/>}
            {error && <p>{error}</p>}
        </main>
    )
}


export async function getStaticProps() {

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery('fetchingDatas', getDatas);
 
    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        },
    }
}
