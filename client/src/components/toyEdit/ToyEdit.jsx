import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as toyService from '../../services/toyService.js';
import Path from '../../path.js';
import styles from '../Add/Add.module.css'


const editFormKeys = {
    Toy: 'toy',
    Category: 'category',
    Image: 'imageUrl',
    Address: 'address',
    Description: 'description'
}

export default function ToyEdit() {
    const navigate = useNavigate();
    const { toyId } = useParams();
    const [toy, setToy] = useState({
        [editFormKeys.Toy]: '',
        [editFormKeys.Category]: '',
        [editFormKeys.Image]: '',
        [editFormKeys.Address]: '',
        [editFormKeys.Description]: '',
    });

    useEffect(() => {
        toyService.getOne(toyId)
            .then(result => {
                setToy(result);
            });
    }, [toyId]);

    const editToySubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));


        await toyService.edit(toyId, values);

        navigate(Path.Catalog);

    }

    const onChange = (e) => {
        setToy(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className={styles.add}>
            <div className={styles.container}>
                <div className={styles["add-form"]}>
                    <h2 className={styles.active}> add toy </h2>
                    <form onSubmit={editToySubmitHandler}>
                        <input type="text"
                            className={styles.text}
                            name={editFormKeys.Toy}
                            onChange={onChange}
                            value={toy.toy}
                        />
                        <span>toy</span>

                        <select
                            className={styles.text}
                            name={editFormKeys.Category}
                            onChange={onChange}
                            value={toy.category}>
                            <option value=""></option>
                            <option value="Boy's toys">Boy's toys</option>
                            <option value="Girls's toys">Girls's toys</option>
                            <option value="Books">Books</option>
                        </select>
                        <span>category</span>

                        <input type="text"
                            className={styles.text}
                            name={editFormKeys.Image}
                            onChange={onChange}
                            value={toy.imageUrl}
                        />
                        <span>image</span>

                        <input type="text"
                            className={styles.text}
                            name={editFormKeys.Address}
                            onChange={onChange}
                            value={toy.address}
                        />
                        <span>owner address</span>

                        <textarea type="text"
                            className={styles.description}
                            name={editFormKeys.Description}
                            onChange={onChange}
                            value={toy.description}
                        />
                        <span>add description</span>

                        <button className={styles["add-toy"]}>Add</button>

                    </form>
                </div>
            </div>
        </div>

    );
}