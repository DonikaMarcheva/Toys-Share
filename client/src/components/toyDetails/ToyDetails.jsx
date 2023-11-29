import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../../contexts/authContext.jsx'

import styles from './ToyDetails.module.css'
import * as toyService from '../../services/toyService.js'
import { Book } from '../Book/Book.jsx';
import Path from '../../path.js';

export default function ToyDetails() {
    const { email, userId } = useContext(AuthContext);
    const [toy, setToy] = useState({});
    const { toyId } = useParams();
    const navigate = useNavigate();
    const isOwner = toy._ownerId === userId;

    useEffect(() => {
        toyService.getOne(toyId)
            .then(setToy);
    }, [toyId])

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${toy.toy}`);

        if (hasConfirmed) {
            await toyService.deleteToy(toyId);

            navigate(Path.Catalog);
        }
    }

    return (
        <div className={styles["toy-details"]}>
            <div className={styles.container}>
                <div className={styles.cards}>
                    <div className={styles["card-item"]}>
                        <div className={styles["card-image"]}>
                            <img src={toy.imageUrl} alt="" />
                        </div>
                        <div className={styles["card-info"]}>
                            <h2 className={styles["card-title"]}>{toy.toy}</h2>
                            <p className={styles["card-intro"]}><span>Category: </span>{toy.category}</p>
                            <p className={styles["card-intro"]}><span>Address: </span>{toy.address}</p>
                            <p className={styles["card-intro"]}><span>Description: </span>{toy.description}</p>
                        </div>
                        {isOwner ? (
                            <div className={styles.buttons}>
                                <Link to={`/catalog/edit/${toy._id}`}>Edit</Link>
                                <button className={styles.button} onClick={deleteButtonClickHandler}>Delete</button>
                            </div>
                        ) : (
                        <Book />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

