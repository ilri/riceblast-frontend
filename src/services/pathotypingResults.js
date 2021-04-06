import {axiosInstance} from './constants';
import axios from 'axios';



export default class PathotypingService {
    getData(){
        return axiosInstance.get('pathotyping_results/');
    }
    addData(data){
        return axiosInstance.post('pathotyping_results/',data);
    }

    editData(data){
        return axiosInstance.put('pathotyping_results/',data);
    }
    deleteData(id){
        return axiosInstance.delete(`pathotyping_results/${id}`);
    }

    uploadFile(pathotyping_results){
        const formData = new FormData();

        formData.append('pathotyping_results', pathotyping_results);

        return axiosInstance.post('upload_pathotyping_results/',formData);  
    }

    uploadFile1(pathotyping_results, onUploadProgress){
        const formData = new FormData();
    
        formData.append('pathotyping_results', pathotyping_results);
    
        return axiosInstance.post('upload_pathotyping_results/',formData,{
            headers: {
                'Authorization': "Bearer " + localStorage.getItem('access'),
                'Content-Type': 'multipart/form-data', 
            },
            onUploadProgress,
        });  
    }
    deleteMultiple(data){
        return axiosInstance.put(`delete_pathotyping_results/`,data);
    }
}
// GET UPLOAD PROGRESS
// uploadFile1 = (pathotyping_results, onUploadProgress) => {
    // const formData = new FormData();
// 
    // formData.append('pathotyping_results', pathotyping_results);
// 
    // return axios.post('upload_pathotyping_results/',formData,{
        // headers: {
            // 'Authorization': "Bearer " + localStorage.getItem('access'),
            // 'Content-Type': 'multipart/form-data', 
        // },
        // onUploadProgress,
    // });  
// }