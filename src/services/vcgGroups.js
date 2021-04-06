import {axiosInstance} from './constants';

export default class VCGGroupsService{

    getData(){
        return axiosInstance.get('vcg_groups/');
    }
    addData(data){
        return axiosInstance.post('vcg_groups/',data);
    }

    editData(data){
        return axiosInstance.put('vcg_groups/',data);
    }
    deleteData(id){
        return axiosInstance.delete(`vcg_groups/${id}`);
    }
    deleteMultiple(data){
        return axiosInstance.put(`delete_vcg_groups/`,data);
    }
}