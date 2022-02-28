/* LIBRAIRIES */
import React, { useMemo, useContext } from 'react';
import SideInfosContext from '../../context/SideInfosContext';

/* COMPONENTS */ 
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideInfos from '../SideInfos/SideInfos';

/* CSS */ 
import style from './Layout.module.css';

export default function Layout(props) {

    const {isSideOpen, rateApplicant, setIndexRow} = useContext(SideInfosContext);
    
    return (
        <div className='globalContainer'>
                <Header />
                <div className="flexGrow" >
                    <div className={`container ${style.contaierTable}`} >
                        {props.children}
                    {isSideOpen && <SideInfos />}
                    </div>


                </div>
                <Footer />
        </div>
    )
}





