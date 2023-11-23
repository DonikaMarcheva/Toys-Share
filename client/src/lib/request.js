const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'content-type': 'application/json'
        };
    }

    const token = localStorage.getItem('accessToken');

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        };
    }

    return options;
};
try {
    const request = async (method, url, data) => {
        const response = await fetch(url, {
            ...buildOptions(data),
            method,
        })
    }
    if (request.ok != true) {
        if (request.status == 403) {
            localStorage.removeItem('accessToken');
        }
        const error = await request.json();
        throw new Error(error.message);
    }

    if (request.status === 204) {
        return {};
    } else {
        return await request.json();
    }
} catch {
    alert(error.message);
    throw error;
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');