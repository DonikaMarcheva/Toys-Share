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

    const { values, errors, onChange, onSubmit } = useForm(uploadToyHandler, {
        [addFormKeys.Toy]: '',
        [addFormKeys.Category]: '',
        [addFormKeys.Image]: '',
        [addFormKeys.Town]: '',
        [addFormKeys.Address]: '',
        [addFormKeys.Description]: '',
    });

    let isValid = false;
    const errorSearcher = Object.values(errors).filter(x => x !== 'ok')
    if (errorSearcher.length === 0) {
        isValid = true;
    }

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
                            onBlur={onChange}
                            value={values[addFormKeys.Toy]}
                        />
                        <span className={styles.label}>toy</span>
                        {errors[addFormKeys.Toy] !== 'ok' &&
                            <span className={styles.errors}>{errors[addFormKeys.Toy]}</span>}

                        <select
                            className={styles.text}
                            name={addFormKeys.Category}
                            onChange={onChange}
                            onBlur={onChange}
                            value={values[addFormKeys.Category]}>
                            <option value=""></option>
                            <option value="Boy's toys">Boy's toys</option>
                            <option value="Girl's toys">Girl's toys</option>
                            <option value="Books">Books</option>
                        </select>
                        <span className={styles.label}>category</span>
                        {errors[addFormKeys.Category] !== 'ok' &&
                            <span className={styles.errors}>{errors[addFormKeys.Category]}</span>}

                        <input type="text"
                            className={styles.text}
                            name={addFormKeys.Image}
                            onChange={onChange}
                            onBlur={onChange}
                            value={values[addFormKeys.Image]}
                        />
                        <span className={styles.label}>image</span>
                        {errors[addFormKeys.Image] !== 'ok' &&
                            <span className={styles.errors}>{errors[addFormKeys.Image]}</span>}

                        <input type="text"
                            className={styles.text}
                            name={addFormKeys.Town}
                            onChange={onChange}
                            onBlur={onChange}
                            value={values[addFormKeys.Town]}
                        />
                        <span className={styles.label}>town</span>
                        {errors[addFormKeys.Town] !== 'ok' &&
                            <span className={styles.errors}>{errors[addFormKeys.Town]}</span>}

                        <input type="text"
                            className={styles.text}
                            name={addFormKeys.Address}
                            onChange={onChange}
                            onBlur={onChange}
                            value={values[addFormKeys.Address]}
                        />
                        <span className={styles.label}>street</span>
                        {errors[addFormKeys.Address] !== 'ok' &&
                            <span className={styles.errors}>{errors[addFormKeys.Address]}</span>}

                        <textarea type="text"
                            className={styles.description}
                            name={addFormKeys.Description}
                            onChange={onChange}
                            onBlur={onChange}
                            value={values[addFormKeys.Description]}
                        />
                        <span className={styles.label}>add description</span>
                        {errors[addFormKeys.Description] !== 'ok' &&
                            <span className={styles.errors}>{errors[addFormKeys.Description]}</span>}

                        {isValid ? <button className={styles["add-toy"]}>Add</button> :
                            <button className={styles["add-toy"]} disabled={true}>Add</button>}

                    </form>
                </div>
            </div>
        </div>
    );
}