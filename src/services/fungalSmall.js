import {axiosInstance} from './constants';

export default class FungalSmallServices {
    getData(){
        return axiosInstance.get('fungal_small/');
    }
    addData(data){
        return axiosInstance.post('fungal_small/',data);
    }

    editData(data){
        return axiosInstance.put('fungal_small/',data);
    }
    deleteData(id){
        return axiosInstance.delete(`fungal_small/${id}`);
    }    
}