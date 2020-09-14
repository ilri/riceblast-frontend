import {axiosInstance} from './constants';

export default class RiceGBSService{
    getData(){
        return axiosInstance.get('rice_gbs/');
    }
    addData(data){
        return axiosInstance.post('rice_gbs/',data);
    }

    editData(data){
        return axiosInstance.put('rice_gbs/',data);
    }
    deleteData(id){
        return axiosInstance.delete(`rice_gbs/${id}`);
    }
}