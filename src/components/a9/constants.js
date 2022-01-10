const prod = {
    url: {
        API_URL: 'https://node-a9.herokuapp.com'
    }
};
const dev = {
    url: {
        API_URL: 'https://node-a9.herokuapp.com'
    }
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
