import axios from 'axios';


const APIURLDEV = 'http://localhost:8000/api/';
const APIURLPROD = 'https://riceblast.herokuapp.com/';


export const axiosInstance = axios.create({
    baseURL: APIURLPROD,
    // timeout: 5000,
    headers: {
        'Authorization': "Bearer " + localStorage.getItem('access'),
        'Content-Type': 'application/json',
        'accept': 'application/json',
    }
});