import * as request from "../lib/request.js";


const baseUrl = 'http://localhost:3030/data/toys'

export const getAll = async () => {
    const result= await request.get(baseUrl);
    return Object.values(result);
}

export const create = async (toyData) => {
    const result = await request.post(baseUrl,toyData);
    return result;
}

export const getOne = async (toyId) => {
    const result = await request.get(`${baseUrl}/${toyId}`);
    return result;
}