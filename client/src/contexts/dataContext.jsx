import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as toyService from '../services/toyService.js'
import Path from '../path.js';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const navigate = useNavigate();
    const [toys, setToys] = useState([]);

    useEffect(() => {
        toyService.getAll()
            .then(result => {
                setToys(result)
            })
    }, []);

    const uploadToyHandler = async (data) => {
        const newToy = await toyService.create(data);
        setToys(state => [...state, newToy]);
        navigate(Path.Catalog);
    };

    const photoEditHandler = async (values) => {
        const result = await toyService.edit(values._id, values);
        setToys(state => state.map(x => x._id === values._id ? result : x));
        navigate(`/catalog/${values._id}`);
    };

    const deleteToy = (toyId) => {
        setToys(state => state.filter(toy => toy._id !== photoId));
    };

    const getToy = (toyId) => {
        return toys.find(toy => toy._id === toyId);
    };

    const getOwnerToys = (userId) => {
        return toys.filter(toy => toy._ownerId === userId);
    };

    const contextValues = {
        toys,
        uploadToyHandler,
        photoEditHandler,
        deleteToy,
        getToy,
        getOwnerToys
    };

    return (
        <DataContext.Provider value={contextValues}>
            {children}
        </DataContext.Provider>
    );
};

DataContext.displayName = 'DataContext';

export default DataContext;