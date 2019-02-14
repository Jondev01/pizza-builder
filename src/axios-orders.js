import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-pizza.firebaseio.com/'
});

export default instance;