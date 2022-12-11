import styles from './loginPage.module.scss';
import SideBar from '../../components/SideBar';

function LoginPage(){
    return(
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <SideBar/>
                <div className={styles.contents}>
                <p className={styles.title}>Login</p>
                <input className={styles.id} type="text" placeholder='id'/>
                <input className={styles.password} type="password" placeholder='password'/>
                <button className={styles.nextButton} type="button">G O</button>
                <button className={styles.signUpButton}>Sign up</button>
                </div>
            </div>
        </div>
    )


}
export default LoginPage;