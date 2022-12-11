import styles from './enterRoom.module.scss';
import {NavLink, useNavigate} from 'react-router-dom';
import service from '../../service';
import SideBar from '../../components/SideBar';
import {useState} from 'react';
import {useEffect} from 'react';

const {localStorage} = window;

function EnterRoom() {
  const navigate = useNavigate();
  const [roomNumber, setRoomNumber] = useState('');
  const [rooms, setRooms] = useState();
  const id = localStorage.getItem('id');
  if (!id) navigate('/login');

  async function getRoomList(id) {
    const {data} = await service.lookupRoom(id);
    setRooms(data);
  }

  const handleRoomNumber = e => {
    setRoomNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const roomFound = rooms.find(room => room.roomId === Number(roomNumber));
    if (!roomFound) return;
    navigate(`/room/${roomNumber}`);
  };

  useEffect(() => {
    getRoomList(id);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <SideBar />
        <div className={styles.contents}>
          <p className={styles.title}>방 입장하기</p>
          <form className={styles.roomWrapper} onSubmit={handleSubmit}>
            <label className={styles.roomID}>
              ID:
              <input
                onChange={handleRoomNumber}
                type="text"
                name="아이디"
                value={roomNumber}
                className={styles.inputID}></input>
            </label>
            <button type="submit" className={styles.submit}>
              G O
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EnterRoom;
