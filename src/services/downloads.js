import axios from 'axios';


const APIURLDEV = 'http://localhost:8000/api/';
const APIURLPROD = 'https://riceblast.herokuapp.com/api/';



const axiosInstance = axios.create({
    baseURL: APIURLDEV,
    // timeout: 5000,
    headers: {
        'Authorization': "Bearer " + localStorage.getItem('access'),
        'Content-Type': 'application/blob', 
        // 'Response-Type': 'blob', // important
    }
});

export const fileDownload = (file) => {
   return axiosInstance.get(`download/`,{
       params:{
            name:file,
       }
    }).then(
       response => {
           console.log(response)
           const fd = window.URL.createObjectURL(new Blob([response.data]))
           console.log(fd)

    }).catch((error) => {
        console.log(error);
    });
};


