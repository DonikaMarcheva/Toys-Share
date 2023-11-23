import { Link } from 'react-router-dom';

import logo from './logo.png'
import styles from './Header.module.css'
import Path from '../../path.js';

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
                            <li><Link to={Path.About}>About</Link></li>
                            <li><Link to={Path.Services}>Services</Link></li>
                            <li><Link to={Path.Catalog}>Catalog</Link></li>
                            <li className={styles.user}><Link to="/add">Add Toys</Link></li>
                        </ul>
                    </div>
                    <div className={styles.user}>
                        <Link to={Path.Logout}>Logout</Link>
                    </div>

                    <div className={styles.guest}>
                        <Link to={Path.Login}>Login</Link>
                        <Link to={Path.Register}>Register</Link>
                    </div>

                </div>
            </div>
        </header>
    );
}