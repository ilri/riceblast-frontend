import {axiosInstance} from './constants';

export default class RGSService{
    getData(){
        return axiosInstance.get('rgs/');
    }
    addData(data){
        return axiosInstance.post('rgs/',data);
    }

    editData(data){
        return axiosInstance.put('rgs/',data);
    }
    deleteData(id){
        return axiosInstance.delete(`rgs/${id}`);
    }
    uploadFile(rgs_results, onUploadProgress){
        const formData = new FormData();
    
        formData.append('rgs_results', rgs_results);
    
        return axiosInstance.post('upload_rgs/',formData,{
            headers: {
                'Authorization': "Bearer " + localStorage.getItem('access'),
                'Content-Type': 'multipart/form-data', 
            },
            onUploadProgress,
        });  
    }
}