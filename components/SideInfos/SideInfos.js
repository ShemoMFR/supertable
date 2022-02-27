/* LIRAIRIES */
import React, { useContext } from 'react';
import SideInfosContext from '../../context/SideInfosContext';

/* CSS */
import style from './SideInfos.module.css'; 

export default function SideInfos() {

    const {isSideOpen, rateApplicant, setIsSideOpen, setRateApplicant} = useContext(SideInfosContext);

    return (
        <div className={style.containerSide}>
            <div className={style.headerSide}>NOM + PRENOM</div>
            <div>EMAIL</div>
            <div>JOB TITLE</div>
            <div>SALARY</div>
            <div>GUARANTOR</div>
            <div>DATE</div>
            <div>RATE</div>
        </div>
    )
}