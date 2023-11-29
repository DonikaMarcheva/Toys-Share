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
        // <section id="create-page" className="auth">
        //     <form id="create" onSubmit={editGameSubmitHandler}>
        //         <div className="container">
        //             <h1>Create Game</h1>
        //             <label htmlFor="leg-title">Legendary title:</label>
        //             <input type="text" id="title" name="title" value={game.title} onChange={onChange} placeholder="Enter game title..." />

        //             <label htmlFor="category">Category:</label>
        //             <input type="text" id="category" name="category" value={game.category} onChange={onChange} placeholder="Enter game category..." />

        //             <label htmlFor="levels">MaxLevel:</label>
        //             <input type="number" id="maxLevel" name="maxLevel" value={game.maxLevel} onChange={onChange} min="1" placeholder="1" />

        //             <label htmlFor="game-img">Image:</label>
        //             <input type="text" id="imageUrl" name="imageUrl" value={game.imageUrl} onChange={onChange} placeholder="Upload a photo..." />

        //             <label htmlFor="summary">Summary:</label>
        //             <textarea name="summary" value={game.summary} onChange={onChange} id="summary"></textarea>
        //             <input className="btn submit" type="submit" value="Edit Game" />
        //         </div>
        //     </form>
        // </section>
    );
}