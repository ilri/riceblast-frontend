import axios from 'axios';


const APIURLDEV = 'http://localhost:8000/api/';
const APIURLPROD = 'https://riceblast.ilri.org/api/';


const axiosInstance = axios.create({
    baseURL: APIURLPROD,
    // timeout: 5000,
    headers: {
        'Authorization': "Bearer " + localStorage.getItem('access'),
        'Content-Type': 'application/json', 
        'accept': 'application/json',
    }
});
   

const axiosInstanceMedia = axios.create({
    baseURL: APIURLPROD,

});

export {axiosInstance,axiosInstanceMedia}