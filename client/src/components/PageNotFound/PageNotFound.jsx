import { Link } from 'react-router-dom';
import Path from '../../path.js';
import styles from './PageNotFound.module.css'


export default function PageNotFound() {
    return (
        <div className={styles["page-not-found"]}>
            <div className={styles.container}>
                <p className={styles["not-found"]}> page not found </p>

                <div className={styles.tipsiz}>
                    <div className={styles["tipsiz-body"]}>
                        <div className={styles["left-arm arm"]}></div>
                        <div className={styles.face}>
                            <div className={styles["upper-face"]}>
                                <div className={styles.element}>4</div>
                                <div className={styles.element}>0</div>
                                <div className={styles.element}>4</div>
                            </div>
                            <div className={styles.mouth}></div>
                        </div>
                        <div className={styles["right-arm arm"]}></div>
                    </div>
                </div>

                <p> maybe you want to go <Link to={Path.Home}>back?</Link></p>
            </div>
        </div>
    );
}