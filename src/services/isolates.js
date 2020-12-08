import {axiosInstance} from './constants';

export default class IsolatesService{
    getIsolates(){
        return axiosInstance.get('isolates/');
    }
    addIsolate(data){
        return axiosInstance.post('isolates/',data);
    }
    editIsolate(data){
        return axiosInstance.put('isolates/',data);
    }
    deleteIsolate(id){
        return axiosInstance.delete(`isolates/${id}`);
    }

    uploadFile(isolates){
        const formData = new FormData();

        formData.append('isolates', isolates);

        return axiosInstance.post('upload_isolates/',formData);  
    }
}