const prod = {
    url: {
        API_URL: 'https://node-a8.herokuapp.com'
    }
};
const dev = {
    url: {
        // API_URL: 'http://localhost:5000'
        API_URL: 'https://node-a8.herokuapp.com'
    }
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;