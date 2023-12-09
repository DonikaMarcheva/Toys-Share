import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as toyService from '../../services/toyService.js';

import ToyItem from './toyItem/toyItem.jsx';
import styles from './Catalog.module.css'

export default function Catalog() {
    const [toys, setToys] = useState([]);
    const [filterClicked, setFilterClick] =useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get('category') || '';
    const town = searchParams.get('town') || '';

    const updateSearchParams = (newCategory, newTown) => {
        setSearchParams({
            category: newCategory,
            town: newTown,
        });
    };


    useEffect(() => {
        toyService.getAll()
            .then(result => setToys(result));
    }, []);

    return (
        <div className={styles.catalog}>
            <div className={styles.container}>
                <div className={styles["toys-filter"]}>
                    <h2>Filter Toys:</h2>

                    <label>
                        Category:
                        <select
                            value={category}
                            onChange={(e) => updateSearchParams(e.target.value, town)}>
                            <option value=""></option>
                                <option value="Boy's toys">Boy's toys</option>
                                <option value="Girl's toys">Girl's toys</option>
                                <option value="Books">Books</option>
                                </select>
                    </label>

                    <label>
                        Town:
                        <input
                            type="text"
                            value={town}
                            onChange={(e) => updateSearchParams(category, e.target.value)}
                        />
                    </label>

                    <button onClick={()=>{setFilterClick(true)}}>Filter</button>
                </div>

                <div className={styles["card-wrapper"]}>

                    {!filterClicked && 

                (toys.map(toy => (
                    <ToyItem key={toy._id} {...toy} />
                )))}

                {filterClicked &&
                toys.filter((item) => {
                    const matchesCategory = category ? item.category === category : true;
                    const matchesTown = town ? item.town === town : true;
                    return matchesCategory && matchesTown;
                  }).map(toy => (
                    <ToyItem key={toy._id} {...toy} />
                ))
                }

                </div>
                {toys.length === 0 && (
                    <h3 className="no-articles">No articles yet</h3>
                )}
            </div>
        </div>

    );
}



