/* CSS */
import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.containerHeader}>
            <div className={`container ${style.header}`}>
                La super table
            </div>
        </div>
    )
}

export default Header;