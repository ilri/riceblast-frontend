import axios from 'axios';

var downloadFile = require('js-file-download');

const APIURLDEV = 'http://localhost:8000/api/';
const APIURLPROD = 'https://riceblast.ilri.org/api/';



const axiosInstance = axios.create({
    // baseURL: APIURLDEV,
    // timeout: 5000,
    headers: {
        'Authorization': "Bearer " + localStorage.getItem('access'),
        'Content-Type': 'application/blob', 
        // 'Response-Type': 'blob', // important
    }
});

export const fileDownload = (path,name) => {
    axios.get(`${APIURLPROD}download/`, { 
        responseType: 'blob',
        params:{
            path:path
        }
    }).then(res => {
        downloadFile(res.data, name);
    }).catch(err => {
        console.log(err);
    })

};


