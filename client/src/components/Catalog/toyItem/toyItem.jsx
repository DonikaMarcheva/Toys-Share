import { useContext } from 'react';
import styles from '../Catalog.module.css'
import { Link } from 'react-router-dom'
import AuthContext from '../../../contexts/authContext.jsx';


export default function ToyItem({
    _id,
    toy,
    imageUrl,
    category
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
                    <p className={styles["card-intro"]}>Category: {category}</p>
                </div>
                {isAuthenticated && (
                    <div className={styles.buttons}>
                        {/* <a href="#">Book</a> */}
                        <Link to={`/catalog/${_id}`}>Details</Link>
                    </div>
                )}
            </div>
        </div>
    );
}
