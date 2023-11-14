import { Link } from 'react-router-dom';

import logo from './logo.png'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header>
            <div className={styles["site-header"]}>
                <div className={styles.container}>

                    <div className={styles["logo-container"]}>
                        <Link className={styles.logo} to="/" >
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>

                    <div className={styles.navigation}>
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/catalog">Catalog</Link></li>
                            <li className={styles.user}><Link to="/add">Add Toys</Link></li>
                        </ul>
                    </div>
                    <div className={styles.user}>
                        <Link to="/logout">Logout</Link>
                    </div>

                    <div className={styles.guest}>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>

                </div>
            </div>
        </header>
    );
}