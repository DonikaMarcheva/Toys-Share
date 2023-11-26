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

// export async function liked(photoId, userId) {
//     const result = await request.get(`${baseUrl}/likes?where=photoId%3D%22${photoId}%22%20and%20_ownerId%3D%22${userId}%22&count`, { photoId, userId });
//     return result;
// };

export async function unbook(likeId, userId) {
    const res = await request.delete(`${baseUrl}/likes/${likeId}?where=userId%3D%22${userId}%22&`);
    return res;
};