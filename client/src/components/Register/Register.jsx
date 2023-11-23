import { Link } from 'react-router-dom'
import { useContext } from "react";
import useForm from "../../hooks/useForm.js";
import AuthContext from "../../contexts/authContext.js";

import styles from './Register.module.css'
import Path from '../../path.js';

const registerFormKeys = {
    Email: 'email',
    Username: 'username',
    Password: 'password',
    RepeatPassword: 'repeat-password'
}

export default function Register() {

    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [registerFormKeys.Email]: '',
        [registerFormKeys.Username]: '',
        [registerFormKeys.Password]: '',
        [registerFormKeys.RepeatPassword]: ''
    })

    return (
        <div className={styles.register}>
            <div className={styles.container}>
                <div className={styles["login-form"]}>
                    <h2 className={styles.active}> register </h2>
                    <form onSubmit={onSubmit}>
                        <input type="text"
                            className={styles.text}
                            name={registerFormKeys.Email}
                            onChange={onChange}
                            value={values[registerFormKeys.Email]}
                        />
                        <span>email</span><br /><br />

                        <input type="text"
                            className={styles.text}
                            name={registerFormKeys.Username}
                            onChange={onChange}
                            value={values[registerFormKeys.Username]}
                        />
                        <span>username</span><br /><br />

                        <input type="password"
                            className={styles.text}
                            name={registerFormKeys.Password}
                            onChange={onChange}
                            value={values[registerFormKeys.Password]}
                        />
                        <span>password</span><br />

                        <input type="password"
                            className={styles.text}
                            name={registerFormKeys.RepeatPassword}
                            onChange={onChange}
                            value={values[registerFormKeys.RepeatPassword]}
                        />
                        <span>repeat password</span><br />

                        <button className={styles.signin}>Register</button>
                        <Link to={Path.Login}>You already have an account?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}