import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dudik-3f28e.firebaseio.com/'
});

export default instance;