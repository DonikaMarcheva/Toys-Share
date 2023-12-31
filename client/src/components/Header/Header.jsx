import { Link } from 'react-router-dom';

import logo from './logo.png'
import styles from './Header.module.css'
import Path from '../../path.js';
import AuthContext from '../../contexts/authContext.jsx';
import { useContext } from 'react';

export default function Header() {

    const {
        isAuthenticated,
        username
    } = useContext(AuthContext);

    return (
        <header>
            <div className={styles["site-header"]}>
                <div className={styles.container}>

                    <div className={styles["logo-container"]}>
                        <Link to={Path.Home} className={styles.logo}  >
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>

                    <div className={styles.navigation}>
                        <ul>
                            <li><Link to={Path.About}>About</Link></li>
                            <li><Link to={Path.Catalog}>Toys</Link></li>
                            {isAuthenticated &&
                                <li><Link to={Path.Add}>Add Toy</Link></li>}

                        </ul>
                    </div>
                    {isAuthenticated &&
                        <div className={styles.user}>
                            <Link to={Path.Logout}>Logout</Link>
                        </div>
                    }

                    {!isAuthenticated &&
                        <div className={styles.guest}>
                            <Link to={Path.Login}>Login</Link>
                            <Link to={Path.Register}>Register</Link>
                        </div>
                    }
                    {
                        isAuthenticated && <span>Welcome {username}</span>
                    }

                </div>
            </div>
        </header>
    );
}