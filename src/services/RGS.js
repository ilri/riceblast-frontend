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
}