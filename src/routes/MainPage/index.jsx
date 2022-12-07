import styles from './mainPage.module.scss';
import SideBar from '../../components/SideBar';
import Room from '../../components/Room';

function MainPage(){
     return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <SideBar/>
                <div className={styles.contents}>
                    <p className={styles.title}>나의 방 목록</p>
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