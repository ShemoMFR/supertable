/* LIRAIRIES */
import React, { useContext, useEffect } from 'react';
import SideInfosContext from '../../context/SideInfosContext';

/* CSS */
import style from './SideInfos.module.css'; 

/* ICONS */
import {AiFillStar} from 'react-icons/ai';

export default function SideInfos() {

    const {isSideOpen, rateApplicant, setIsSideOpen, setRateApplicant, applicant, stars, setStars} = useContext(SideInfosContext);

    useEffect(() => {
        setStars([<AiFillStar className={style.star} />, <AiFillStar className={style.star} />,<AiFillStar className={style.star} />, <AiFillStar className={style.star} />, <AiFillStar className={style.star} />]);
    } , []);

    function setRate(index) {

        let newStars = [];

        for (let i = 0; i < 5; i++) {
            if (i <= index) {
                newStars.push(<AiFillStar className={style.starJ} />);
            } else {
                newStars.push(<AiFillStar className={style.starG} />)
            }
        }

        setStars(newStars);

    }

    function handleClickStar(index) {
        setRateApplicant(index);
        setRate(index);
    }

    return (
        <div className={style.containerSide}>
            <div className={style.headerSide}>{`${applicant.firstname}  ${applicant.lastname} `}</div>
            <div className={style.email}><a href={`mailto=${applicant.email}`}>{applicant.email}</a></div>
            <p className={style.titles}>Job Title</p>
            <div>{applicant.job_title}</div>
            <p className={style.titles}>Salary</p>
            <div>{applicant.monthly_salary}</div>
            <p className={style.titles}>Has a guarantor</p>
            {
                applicant.has_guarantor ? <div>Yes</div> : <div>No</div>
            }
            <p className={style.titles}>Preferred move-in date</p>
            <div>{applicant.preferred_move_in_date}</div>
            <div className={style.titles} style={{fontSize: '1.2rem'}}>Rate This Applicant</div>
            <div className={style.containerStars}>
               
                {
                    stars.map((star, index) => {
                       return <div key={index} onClick={() => handleClickStar(index)}>{star}</div>
                    })
                }
            </div>
        </div>
    )
}