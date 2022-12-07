import SideBar from '../../components/SideBar';
import styles from './myPage.module.scss';

function MyPage(){
    return(
        <div className={styles.page}>
            <SideBar/>
            <div className={styles.wrapper}>
                <div className={styles.contents}>
                    <p className={styles.title}>내 정보</p>
                    <div className={styles.inputWrap}>
                        <p className={styles.inputTitle}>ID</p>
                        <div className={styles.displayInfo}>userID</div>
                    </div>
                    <div className={styles.inputWrap}>
                        <p className={styles.inputTitle}>username</p>
                        <input className={styles.fix} placeholder='username'/>
                    </div>

                    <button className={styles.saveButton}>SAVE</button>
                </div>

                

            </div>
        </div>
    )
}

export default MyPage;