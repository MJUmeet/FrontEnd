import styles from './signupPage.module.scss';

function SignupPage(){
    return(
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <p className={styles.title}>Sign Up</p>
                <input className={styles.id} type="text"/>
                <input className={styles.password} type="text"/>
                <input className={styles.username} type="text"/>
                <button className={styles.nextButton} type="button"/>
            </div>
        </div>

    )

}
export default SignupPage;