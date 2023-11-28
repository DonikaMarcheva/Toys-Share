import * as request from "../lib/request.js";

const baseUrl = 'http://localhost:3030/data';

export const getBookedCount = async (toyId) => {
    const result = await request.get(`${baseUrl}/booked?where=toyId%3D%22${toyId}%22&`);
    return result;
};

export const addBook = async (toyId, userId) => {
    const result = await request.post(`${baseUrl}/booked`, { toyId, userId });

    return result;
};

export async function unbook(toyId, userId) {
    const res = await request.remove(`${baseUrl}/booked/${toyId}?where=userId%3D%22${userId}%22&`);
    return res;
};