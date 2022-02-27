/* LIRAIRIES */
import React, { useContext } from 'react';
import SideInfosContext from '../../context/SideInfosContext';

/* CSS */
import style from './SideInfos.module.css'; 

export default function SideInfos() {

    const {isSideOpen, rateApplicant, setIsSideOpen, setRateApplicant} = useContext(SideInfosContext);

    return (
        <div>
            Side Infos
        </div>
    )
}