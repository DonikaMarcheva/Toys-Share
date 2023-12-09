import { useContext } from 'react'

import DataContext from '../../contexts/dataContext.jsx';
import useForm from "../../hooks/useForm.js";
import styles from './Add.module.css';

const addFormKeys = {
    Toy: 'toy',
    Category: 'category',
    Image: 'imageUrl',
    Town: 'town',
    Address: 'address',
    Description: 'description'
}

export default function Add() {

    const { uploadToyHandler } = useContext(DataContext);

    const { values, onChange, onSubmit } = useForm(uploadToyHandler, {
        [addFormKeys.Toy]: '',
        [addFormKeys.Category]: '',
        [addFormKeys.Image]: '',
        [addFormKeys.Town]:'',
        [addFormKeys.Address]: '',
        [addFormKeys.Description]: '',
    });


    return (
        <div className={styles.add}>
            <div className={styles.container}>
                <div className={styles["add-form"]}>
                    <h2 className={styles.active}> add toy </h2>
                    <form onSubmit={onSubmit}>
                        <input type="text"
                            className={styles.text}
                            name={addFormKeys.Toy}
                            onChange={onChange}
                            value={values[addFormKeys.Toy]}
                        />
                        <span>toy</span>
 
                        <select
                            className={styles.text}
                            name={addFormKeys.Category}
                            onChange={onChange}
                            value={values[addFormKeys.Category]}>
                                <option value=""></option>
                                <option value="Boy's toys">Boy's toys</option>
                                <option value="Girl's toys">Girl's toys</option>
                                <option value="Books">Books</option>
                        </select>
                        <span>category</span>

                        <input type="text"
                            className={styles.text}
                            name={addFormKeys.Image}
                            onChange={onChange}
                            value={values[addFormKeys.Image]}
                        />
                        <span>image</span>

                        <input type="text"
                            className={styles.text}
                            name={addFormKeys.Town}
                            onChange={onChange}
                            value={values[addFormKeys.Town]}
                        />
                        <span>town</span>

                        <input type="text"
                            className={styles.text}
                            name={addFormKeys.Address}
                            onChange={onChange}
                            value={values[addFormKeys.Address]}
                        />
                        <span>owner address</span>

                        <textarea type="text"
                            className={styles.description}
                            name={addFormKeys.Description}
                            onChange={onChange}
                            value={values[addFormKeys.Description]}
                        />
                        <span>add description</span>

                        <button className={styles["add-toy"]}>Add</button>

                    </form>
                </div>
            </div>
        </div>
    );
}