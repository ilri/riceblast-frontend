import {axiosInstance} from './constants';

export default class RiceGBSService{
    getData(){
        return axiosInstance.get('rice_gbs/');
    }
    addData(data){
        const formData = new FormData();
        const {gbs_dataset, ...info} = data;

        formData.append('gbs_dataset', gbs_dataset);
        formData.append('info', JSON.stringify(info));

        return axiosInstance.post('rice_gbs/',formData);  
    }

    editData(data){
        const formData = new FormData();
        const {gbs_dataset, ...info} = data;

        formData.append('gbs_dataset', gbs_dataset);
        formData.append('info', JSON.stringify(info));

        return axiosInstance.put('rice_gbs/',formData);    
    }
    deleteData(id){
        return axiosInstance.delete(`rice_gbs/${id}`);
    }
    deleteMultiple(data){
        return axiosInstance.put(`delete_rice_gbs/`,data);
    }
}