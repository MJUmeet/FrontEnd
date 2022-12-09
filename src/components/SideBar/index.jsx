import styles from './sideBar.module.scss'
import menu from '../../assets/pngs/menu.png'
import plus from '../../assets/pngs/plus.png'
import user from '../../assets/pngs/user.png'
import { NavLink, Route, Router, Routes } from 'react-router-dom'
import MyPage from '../../routes/MyPage'
import MainPage from '../../routes/MainPage'
import AddRoom from '../AddRoom'

function SideBar(){
    return(
    <div className={styles.sideBar}>
        <div className={styles.iconWrapper}>
            <ul>
                <li><NavLink to="/mainPage"><img src={menu} className={styles.icon} alt='menu'/></NavLink></li>
                <li><NavLink to="/addRoom"><img src={plus} className={styles.icon}alt='plus'/></NavLink></li>
                <li><NavLink to="/setting"><img src={user} className={styles.icon}alt='user'/></NavLink></li>
            </ul>      
        </div>
    </div>   
    )
}
export default SideBar;