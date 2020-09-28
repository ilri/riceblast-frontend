import {axiosInstance} from './constants';

export default class FGSService{
    getData(){
        return axiosInstance.get('fgs/');
    }
    addData(data){
        return axiosInstance.post('fgs/',data);
    }

    editData(data){
        return axiosInstance.put('fgs/',data);
    }
    deleteData(id){
        return axiosInstance.delete(`fgs/${id}`);
    }
}