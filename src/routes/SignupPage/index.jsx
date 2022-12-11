import styles from './signupPage.module.scss';
import SideBar from '../../components/SideBar';

function SignupPage(){
    return(
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <SideBar/>
                <div className={styles.contents}>
                <p className={styles.title}>Sign Up</p>
                <input className={styles.id} type="text" placeholder='id'/>
                <input className={styles.password} type="password" placeholder='password'/>
                <input className={styles.username} type="text" placeholder='username'/>
                <button className={styles.nextButton} type="button">G O</button>
                </div>
            </div>
        </div>
    )

}
export default SignupPage;