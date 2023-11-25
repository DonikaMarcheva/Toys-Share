import { Link } from 'react-router-dom'
import { useContext } from "react";
import useForm from "../../hooks/useForm.js";
import AuthContext from "../../contexts/authContext.js";

import styles from './Add.module.css'
import Path from '../../path.js';

const registerFormKeys = {
    Email: 'email',
    Username: 'username',
    Password: 'password',
    RepeatPassword: 'repeat-password'
}



export default function Add() {

    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [registerFormKeys.Email]: '',
        [registerFormKeys.Username]: '',
        [registerFormKeys.Password]: '',
        [registerFormKeys.RepeatPassword]: ''
    })

    return (
        <div className={styles.add}>
            <div className={styles.container}>
                <div className={styles["add-form"]}>
                    <h2 className={styles.active}> add toy </h2>
                    <form onSubmit={onSubmit}>
                        <input type="text"
                            className={styles.text}
                            name={registerFormKeys.Email}
                            onChange={onChange}
                            value={values[registerFormKeys.Email]}
                        />
                        <span>toy</span>

                        <input type="text"
                            className={styles.text}
                            name={registerFormKeys.Username}
                            onChange={onChange}
                            value={values[registerFormKeys.Username]}
                        />
                        <span>image</span>

                        <input type="text"
                            className={styles.text}
                            name={registerFormKeys.Password}
                            onChange={onChange}
                            value={values[registerFormKeys.Password]}
                        />
                        <span>owner address</span>

                        <textarea type="text"
                            className={styles.description}
                            name={registerFormKeys.RepeatPassword}
                            onChange={onChange}
                            value={values[registerFormKeys.RepeatPassword]}
                        />
                        <span>add description</span>

                        <button className={styles["add-toy"]}>Add</button>

                    </form>
                </div>
            </div>
        </div>
    );
}