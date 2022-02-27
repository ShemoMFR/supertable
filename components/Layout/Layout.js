/* LIBRAIRIES */
import React, { useMemo, useContext } from 'react';
import SideInfosContext from '../../context/SideInfosContext';

/* COMPONENTS */ 
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideInfos from '../SideInfos/SideInfos';

/* CSS */ 
import Style from './Layout.module.css';

export default function Layout(props) {

    const {isSideOpen, rateApplicant, setIndexRow} = useContext(SideInfosContext);
    
    return (
        <div className='globalContainer'>
                <Header />
                <div /* className="flexGrow" */ style={{display: 'flex'}}>
                    <div className='container'>
                        {props.children}
                    </div>

                    {isSideOpen && <SideInfos />}

                </div>
                <Footer />
        </div>
    )
}





