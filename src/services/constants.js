import axios from 'axios';


const APIURL = 'http://localhost:8000/api/';



export const axiosInstance = axios.create({
    baseURL: APIURL,
    // timeout: 5000,
    headers: {
        'Authorization': "Bearer " + localStorage.getItem('access'),
        'Content-Type': 'application/json',
        'accept': 'application/json',
    }
});