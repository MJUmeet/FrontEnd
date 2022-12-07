import styles from './room.module.scss';

function Room(){
    return(
        <div className={styles.box}>
            <p className={styles.title}>방 이름</p>
            <p className={styles.inperson}>3</p>
            <p className={styles.total}>/</p>
            <p className={styles.total}>5</p>
        </div>
    )
}

export default Room;

