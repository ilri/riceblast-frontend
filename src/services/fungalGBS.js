import {axiosInstance} from './constants';

export default class FungalGBSService{
    getData(){
        return axiosInstance.get('fungal_gbs/');
    }
    addData(data){
        const formData = new FormData();
        const {gbs_dataset, ...info} = data;

        formData.append('gbs_dataset', gbs_dataset);
        formData.append('info', JSON.stringify(info));

        return axiosInstance.post('fungal_gbs/',formData);    
    }

    editData(data){
        const formData = new FormData();
        const {gbs_dataset, ...info} = data;

        formData.append('gbs_dataset', gbs_dataset);
        formData.append('info', JSON.stringify(info));

        return axiosInstance.put('fungal_gbs/',formData)    
    }
    
    deleteData(id){
        return axiosInstance.delete(`fungal_gbs/${id}`);
    }  
    deleteMultiple(data){
        return axiosInstance.put(`delete_fungal_gbs/`,data);
    }
}