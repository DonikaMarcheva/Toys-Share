import styles from './Register.module.css'

import {Link} from 'react-router-dom'

export default function Register() {
    return (
        <div className={styles.register}>
            <div className={styles.container}>
                <div className={styles["login-form"]}>
                    <h2 className={styles.active}> register </h2>
                    <form>
                        <input type="text" className={styles.text} name="username" />
                        <span>username</span><br /><br />
                        <input type="password" className={styles.text} name="password" />
                        <span>password</span><br />
                        <input type="password" className={styles.text} name="repeat-password" />
                        <span>repeat password</span><br />
                        <button className={styles.signin}>Register</button>
                        <Link to={'/register'}>You already have an account?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}