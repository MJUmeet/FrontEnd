import styles from './mainPage.module.scss';
import SideBar from '../../components/SideBar';
import Room from '../../components/Room';
import EnterRoom from '../EnterRoom';
import { NavLink } from 'react-router-dom';

function MainPage(){
     return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <SideBar/>
                <div className={styles.contents}>
                    <p className={styles.title}>나의 방 목록</p>
                    <button className={styles.enter}><NavLink to="/enterRoom" style={{color:"white"}}>방 참가</NavLink></button>
                    <div className={styles.roomWrapper}>
                    <Room/>
                    <Room/>
                    <Room/>
                    <Room/>
                    <Room/>
                    <Room/>
                </div>
                
                </div>
                
            </div>

        </div>
    )

}
export default MainPage;