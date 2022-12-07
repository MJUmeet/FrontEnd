import React, { useState } from 'react'
import styles from './addRoom.module.scss';
import SideBar from '../SideBar';

const btnTypes = ["빠른 시간", "많은 시간"];
const [fast, setFast] = useState(true);
const [long, setLong] = useState(false);

function AddRoom(){
    
    // 빠른 시간 선택시 isFast == true, 많은 시간 선택 시 false
    let [isFast, changePriority] = useState(true);

    return (
        // form 형태여야 함
        <div className={styles.page}>
        <div className={styles.wrapper}>
            <SideBar/>
            <div className={styles.contents}>
                <p className={styles.title}>새로운 방 만들기</p>
                <input className={styles.roomName} type="text" placeholder="방 이름"/>
                <p className={styles.title}>우선 순위</p>
                <div className={styles.btnWrapper}>
                    <button className={styles.fastBtn}>{btnTypes[0]}</button>
                    <button className={styles.longBtn}>{btnTypes[1]}</button>
                </div>
            </div>     
        </div>
    </div>    
    )
}

// changeBtnState = (e) => {
//     if(e.target.className == "f) {
        
//     }
// }

// const buttons = [];
// buttons.push(<button>
//     btnTypes.map(btnType =>(<button
//     key={btnType}
//     active={active === btnType}
//     onClick={() => setActive(btnType)}
//     ></button>)
//     )
// </button>)

export default AddRoom;