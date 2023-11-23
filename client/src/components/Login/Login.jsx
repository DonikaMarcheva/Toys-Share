import {Link} from 'react-router-dom'
import { useContext } from "react";
import useForm from "../../hooks/useForm.js";
import AuthContext from "../../contexts/authContext.js";

import styles from './Login.module.css'
import Path from '../../path.js';

const loginFormKeys = {
    Email: 'email',
    Password: 'password'
}

export default function Login() {

    const {loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [loginFormKeys.Email]: '',
        [loginFormKeys.Password]: ''
    })

    return (
        <div className={styles.login}>
            <div className={styles.container}>
                <div className={styles["login-form"]}>
                    <h2 className={styles.active}> log in </h2>
                    
                    <form onSubmit={onSubmit}>
                        <input type="text" 
                        className={styles.text} 
                        name={loginFormKeys.Email}
                        onChange={onChange}
                        value={values[loginFormKeys.Email]} 
                        />
                        <span>email</span><br /><br />

                        <input type="password" 
                        className={styles.text} 
                        name={loginFormKeys.Password}
                        onChange={onChange}
                        value={values[loginFormKeys.Password]} 
                        />
                        <span>password</span><br />

                        <button type="submit" className={styles.signin}>Log In</button>
                        <Link to={Path.Register}>You don't have an account?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}