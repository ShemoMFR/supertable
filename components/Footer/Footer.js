/* CSS */
import style from './Footer.module.css';

const Footer = () => {
    return (
        <div className={style.containerFooter}>
             <div className={`container ${style.footer}`}>
             © Shémo
            </div>
        </div>
    )
}

export default Footer;