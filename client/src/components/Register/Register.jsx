import { Link } from 'react-router-dom'
import { useContext } from "react";
import useForm from "../../hooks/useForm.js";
import AuthContext from "../../contexts/authContext.jsx";

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
    const { values, errors, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [registerFormKeys.Email]: '',
        [registerFormKeys.Username]: '',
        [registerFormKeys.Password]: '',
        [registerFormKeys.RepeatPassword]: ''
    })
    let isValid= false;
    const a=Object.values(errors).filter(x=>x!=='ok')
        if(a.length===0){
            isValid=true;
        }

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
                            onBlur={onChange}
                            value={values[registerFormKeys.Email]}
                        />
                        <span className={styles.label}>email</span>
                        {errors[registerFormKeys.Email]!=='ok' && 
                        <span className={styles.errors}>{errors[registerFormKeys.Email]}</span>}

                        <input type="text"
                            className={styles.text}
                            name={registerFormKeys.Username}
                            onChange={onChange}
                            onBlur={onChange}
                            value={values[registerFormKeys.Username]}
                        />
                        <span className={styles.label}>username</span>
                        {errors[registerFormKeys.Username]!=='ok' && 
                        <span className={styles.errors}>{errors[registerFormKeys.Username]}</span>}

                        <input type="password"
                            className={styles.text}
                            name={registerFormKeys.Password}
                            onChange={onChange}
                            onBlur={onChange}
                            value={values[registerFormKeys.Password]}
                        />
                        <span className={styles.label}>password</span>
                        {errors[registerFormKeys.Password]!=='ok' && 
                        <span className={styles.errors}>{errors[registerFormKeys.Password]}</span>}

                        <input type="password"
                            className={styles.text}
                            name={registerFormKeys.RepeatPassword}
                            onChange={onChange}
                            onBlur={onChange}
                            value={values[registerFormKeys.RepeatPassword]}
                        />
                        <span className={styles.label}>repeat password</span>
                        {errors[registerFormKeys.RepeatPassword]!=='ok' && 
                        <span className={styles.errors}>{errors[registerFormKeys.RepeatPassword]}</span>}
                        
                        {isValid? <button className={styles.signin}>Register</button>:
                        <button className={styles.signin} disabled={true}>Register</button>}
                        
                        <Link to={Path.Login}>You already have an account?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}