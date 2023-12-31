const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'content-type': 'application/json'
        };
    }

    const serializedAuth = localStorage.getItem('auth');
    if (serializedAuth) {
        const auth = JSON.parse(serializedAuth);

        if (auth.accessToken) {
            options.headers = {
                ...options.headers,
                'X-Authorization': auth.accessToken,
            };
        };
    };

    return options;
};

const request = async (method, url, data) => {
    try {
        const response = await fetch(url, {
            ...buildOptions(data),
            method,
        });

        if (response.ok != true) {
            if (response.status == 403) {
                localStorage.removeItem('auth');
            }
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status === 204) {
            return {};
        }

        return await response.json();
    } catch (error) {
        alert(error.message);
        throw error;
    }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');