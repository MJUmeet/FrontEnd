import React, { useState } from 'react'
// import styled from "style-components";
import styles from './addRoom.module.scss';
import SideBar from '../SideBar';

function AddRoom(){
    const btnTypes = ["빠른 시간", "많은 시간"];
    const [isActive, setActive] = useState(true);

    const handleClick = () => {
        setActive(!isActive);
    }

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
                    <button className={styles.fastBtn} id="1" style={{backgroundColor: isActive ? '#7F9593': '#eeeeee'}} onClick={handleClick}>{btnTypes[0]}</button>
                    <button className={styles.longBtn} id="2" style={{backgroundColor: isActive ? '#eeeeee': '#7F9593'}} onClick={handleClick}>{btnTypes[1]}</button>
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
