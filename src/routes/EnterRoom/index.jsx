import styles from './enterRoom.module.scss';
import { NavLink } from 'react-router-dom';
import SideBar from '../../components/SideBar';

function EnterRoom(){
    return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <SideBar/>
                <div className={styles.contents}>
                    <p className={styles.title}>방 입장하기</p>
                    <form className={styles.roomWrapper}>
                        <label className={styles.roomID}>ID: 
                            <input type="text" name="아이디" className={styles.inputID}></input>
                        </label>
                        <button type="submit" className={styles.submit}>G O</button>
                    </form>
                </div>
                
                
                
            </div>

        </div>
    )
}

export default EnterRoom;

