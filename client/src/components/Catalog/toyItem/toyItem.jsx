import { useContext } from 'react';
import styles from '../Catalog.module.css'
import { Link } from 'react-router-dom'
import AuthContext from '../../../contexts/authContext.js';


export default function ToyItem({
    _id,
    toy,
    imageUrl,
    description
}) {

    const {
        isAuthenticated,
    } = useContext(AuthContext);

    return (
        <div className={styles.cards}>
            <div className={styles["card-item"]}>
                <div className={styles["card-image"]}>
                    <img src={imageUrl} alt="" />
                </div>
                <div className={styles["card-info"]}>
                    <h2 className={styles["card-title"]}>{toy}</h2>
                    <p className={styles["card-intro"]}>{description}</p>
                </div>
                {isAuthenticated && (
                    <div className={styles.buttons}>
                        <a href="#">Book</a>
                        <Link to="/details">Details</Link>
                    </div>
                )}
            </div>
        </div>
    );
}
