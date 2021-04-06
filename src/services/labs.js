import {axiosInstance} from './constants';


export default class LabService{
    getLabs(){
        return axiosInstance.get('labs/');
    }

    addLab(data){
        return axiosInstance.post('labs/', data);
    }
    editLab(data){
        return axiosInstance.put('labs/', data);
    }
    deleteLab(id){
        return axiosInstance.delete(`labs/${id}`);
    }
    deleteLabs(data){
        return axiosInstance.put(`delete_labs/`,data);
    }
}

