import styles from './Login.module.css'

import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <div className={styles.login}>
            <div className={styles.container}>
                <div className={styles["login-form"]}>
                    <h2 className={styles.active}> sign in </h2>
                    <form>
                        <input type="text" className={styles.text} name="username" />
                        <span>username</span><br /><br />
                        <input type="password" className={styles.text} name="password" />
                        <span>password</span><br />
                        <button className={styles.signin}>Sign In</button>
                        <Link to={'/register'}>You dont have an account?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}