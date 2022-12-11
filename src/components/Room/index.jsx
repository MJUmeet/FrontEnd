import {Link} from 'react-router-dom';
import styles from './room.module.scss';

function Room({title, participantsCount, totalCount, roomId}) {
  return (
    <Link className={styles.box}>
      <p className={styles.title}>{title}</p>
      <p className={styles.inperson}>{participantsCount}</p>
      <p className={styles.total}>/</p>
      <p className={styles.total}>{totalCount}</p>
    </Link>
  );
}

export default Room;
