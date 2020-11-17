import {axiosInstance} from './constants';

export default class RiceSmallService {
    getData(){
        return axiosInstance.get('rice_small/');
    }
    addData(data){
        return axiosInstance.post('rice_small/',data);
    }

    editData(data){
        return axiosInstance.put('rice_small/',data);
    }
    deleteData(id){
        return axiosInstance.delete(`rice_small/${id}`);
    }   
}