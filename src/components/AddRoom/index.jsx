import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import service from '../../service';
// import styled from "style-components";
import styles from './addRoom.module.scss';
import SideBar from '../SideBar';

const {localStorage} = window;

function AddRoom() {
  const navigate = useNavigate();
  const natigate = useNavigate();
  const id = localStorage.getItem('id');
  if (!id) navigate('/login');

  const btnTypes = ['빠른 시간', '많은 시간'];
  const [isActive, setActive] = useState(true);
  const [title, setTitle] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');

  async function createRoom(roomName, meetingTime) {
    const {data} = await service.createRoom(id, roomName, meetingTime);
    console.log(data);
    navigate(`/room/${data.roomId}`);
  }

  const handleClick = () => {
    setActive(!isActive);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formattedTime = (hour * 60 + minute) / 30;
    createRoom(title, formattedTime.toString());
  };

  return (
    // form 형태여야 함
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <SideBar />
        <form className={styles.contents} onSubmit={handleSubmit}>
          <p className={styles.title}>새로운 방 만들기</p>
          <input
            className={styles.roomName}
            type="text"
            placeholder="방 이름"
            value={title}
            onChange={e => setTitle(e.currentTarget.value)}
          />
          <p className={styles.title}>우선 순위</p>
          <div className={styles.btnWrapper}>
            <button
              className={styles.fastBtn}
              id="1"
              style={{backgroundColor: isActive ? '#7F9593' : '#eeeeee'}}
              onClick={handleClick}>
              {btnTypes[0]}
            </button>
            <button
              className={styles.longBtn}
              id="2"
              style={{backgroundColor: isActive ? '#eeeeee' : '#7F9593'}}
              onClick={handleClick}>
              {btnTypes[1]}
            </button>
          </div>
          <div className={styles.timeWrapper}>
            <p className={styles.title}>회의 시간</p>
            <input
              className={styles.time}
              type="text"
              maxLength={2}
              value={hour}
              onChange={e => setHour(e.currentTarget.value)}
            />
            <label className={styles.timeText}>시</label>
            <input
              className={styles.time}
              type="text"
              maxLength={2}
              value={minute}
              onChange={e => setMinute(e.currentTarget.value)}
            />
            <label className={styles.timeText}>분</label>
          </div>
          <button type="submit" className={styles.submit}>
            방 생성하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRoom;
