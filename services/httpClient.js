import axios from 'axios';

export const http = axios.create({
    // baseURL: `http://localhost:3000`,
    baseURL: `https://my-json-server.typicode.com/tomasysh/real-world-nuxt`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    } 
});