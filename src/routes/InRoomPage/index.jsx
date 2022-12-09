import styles from './inRoomPage.module.scss';
//import SideBar from '../../components/SideBar';
import star from '../../assets/pngs/star.png';
import check from '../../assets/pngs/check.png';

import TimeTable from '../../components/TimeTable';
import SideBar from '../../components/SideBar';

const InRoomPage=()=>{

    return(<div className={styles.wrapper}>
        <SideBar/>
        <div className={styles.inRoomPage}>
            <div className={styles.contents}>
                <div className={styles.headBox}>

                <h1 className={styles.title}>
                    팀프1 회의
                </h1>
                <h1 className={styles.roomID}>
                    ID:00001
                </h1>
                </div>
                <div className={styles.tableWrapper}>
                    <div className={styles.myTable}>
                        <p className={styles.tableTitle}>내 시간표</p>
                        <TimeTable/>
                    </div>
                    <div className={styles.myTable}>
                        <p className={styles.tableTitle}>팀 시간표</p>
                        <TimeTable/>
                    </div>
            
                </div>
                <div className={styles.displayTime}>
                    <div className={styles.priorTime}>
                        <div className={styles.titleBox}>
                        <img src={star} alt='star' className={styles.image}/>
                        <h1 className={styles.title2}>
                            우선 회의 시간
                        </h1></div>
                        <p className={styles.timeFont}>
                            수요일 13시 30분
                        </p>
                    </div>
                    <div className={styles.possibleTime}>
                        <div className={styles.titleBox}>
                            <img src={check} alt='check' className={styles.image}/>

                        <h1 className={styles.title2}>
                            가능한 회의 시간
                        </h1>
                        </div>
                        
                        <p className={styles.timeFont}>
                            수요일 13시 30분
                        </p>
                    </div>

                </div>

                <button className={styles.saveButton}>SAVE</button>
            </div>
        </div></div>
    )
}

export default InRoomPage;