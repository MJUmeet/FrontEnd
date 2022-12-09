import React, { useState } from 'react'
import styles from './addRoom.module.scss';
import SideBar from '../SideBar';

// const btnTypes = ["빠른 시간", "많은 시간"];
// const [fast, setFast] = useState(true);
// const [long, setLong] = useState(false);

function AddRoom(){
    
    // 빠른 시간 선택시 isFast == true, 많은 시간 선택 시 false
    let [isFast, changePriority] = useState(true);
    const btnTypes = ["빠른 시간", "많은 시간"];
    
    // 버튼 상호작용 만들다가 보류...
    // const [fast, setFast] = useState(true);
    // const [long, setLong] = useState(false);

    // const changeBtnState = (e) => {
    //     if(e.target.id === "1") {
    //         e.target.textContext = "sdf"
    //         e.target.style.backgroundColor="#7F9593";
    //     }
    // }

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
                    <button className={styles.fastBtn} id="1" onClick={changeBtnState}>{btnTypes[0]}</button>
                    <button className={styles.longBtn} id="2" onClick={changeBtnState}>{btnTypes[1]}</button>
                </div>
                <div className={styles.timeWrapper}>
                    <p className={styles.title}>회의 시간</p>
                    <input className={styles.time} type="text" maxLength={2}/>
                    <label className={styles.timeText}>시</label>
                    <input className={styles.time} type="text" maxLength={2}/>
                    <label className={styles.timeText}>분</label>
                </div>
            </div>     
        </div>
    </div>    
    )

    
}

export default AddRoom;