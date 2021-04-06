import {axiosInstance} from './constants';

export default class RiceSmallService {
    getData(){
        return axiosInstance.get('rice_small/');
    }
    addData(data){
        const formData = new FormData();
        const {sequence_data, ...info} = data;

        formData.append('sequence_data', sequence_data);
        formData.append('info', JSON.stringify(info));

        return axiosInstance.post('rice_small/',formData);    
    }

    editData(data){
        const formData = new FormData();
        const {sequence_data, ...info} = data;

        formData.append('sequence_data', sequence_data  );
        formData.append('info', JSON.stringify(info));

        return axiosInstance.put('rice_small/',formData);
    }
    
    deleteData(id){
        return axiosInstance.delete(`rice_small/${id}`);
    }
    deleteMultiple(data){
        return axiosInstance.put(`delete_rice_small/`,data);
    }   
}