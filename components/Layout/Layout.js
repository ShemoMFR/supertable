/* LIBRAIRIES */
import React from 'react'; 

/* COMPONENTS */ 
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideInfos from '../SideInfos/SideInfos';

/* CSS */ 
import Style from './Layout.module.css';

export default function Layout(props) {
    
    return (
        <div className='globalContainer'>
                <Header />
                <div className="flexGrow" style={{display: 'flex'}}>
                    <div className='container'>
                        {props.children}
                    </div>

                    <SideInfos />
                </div>
                <Footer />
        </div>
    )
}





