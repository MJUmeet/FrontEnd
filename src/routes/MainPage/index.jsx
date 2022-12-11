import styles from './mainPage.module.scss';
import SideBar from '../../components/SideBar';
import Room from '../../components/Room';
import {useEffect} from 'react';
import service from '../../service';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

const {localStorage} = window;

function MainPage() {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();
  const id = localStorage.getItem('id');
  if (!id) navigate('/login');

  async function getRoomList(id) {
    const {data} = await service.lookupRoom(id);
    setRooms(data);
  }

  useEffect(() => {
    getRoomList(id);
  }, []);

  return (
    <div className={styles.mainPage}>
      <div className={styles.wrapper}>
        <SideBar />
        <div className={styles.contents}>
          <p className={styles.title}>나의 방 목록</p>
          <button
            type="button"
            className={styles.plusRoomButton}
            onClick={() => navigate('/enterRoom')}>
            방 참가
          </button>
          <div className={styles.roomWrapper}>
            {rooms.length ? (
              rooms.map(room => (
                <Room
                  key={room.roomId}
                  title={room.roomName}
                  participantsCount={room.participantsCount}
                  totalCount={room.totalCount}
                  roomId={room.roomId}
                />
              ))
            ) : (
              <p style={{marginTop: '250px'}}>참여중인 방이 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainPage;
