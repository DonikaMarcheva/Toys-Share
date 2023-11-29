import * as request from "../lib/request.js";

const baseUrl = 'http://localhost:3030/data/toys'

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return Object.values(result);
}

export const create = async (toyData) => {
    const result = await request.post(baseUrl, toyData);
    return result;
}

export const getOne = async (toyId) => {
    const result = await request.get(`${baseUrl}/${toyId}`);
    return result;
}

export const edit = async (toyId, data) => {
    const result = await request.put(`${baseUrl}/${toyId}`, data);
    return result;
}

export const deleteToy = async (toyId) => {
    const result = await request.remove(`${baseUrl}/${toyId}`);
    return result;
}

export const getUserToys = async (userId) => {
    const toys = await request.get(`${baseUrl}?where=_ownerId%3D%22${userId}%22`);
    return toys;
};