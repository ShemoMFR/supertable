/* COMPONENTS */ 
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

/* CSS */ 
import Style from './Layout.module.css';
import { useEffect } from 'react';

export default function Layout(props) {
    
    return (
        <div className='globalContainer'>
            <Header />
            <div className='container flexGrow'>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}





