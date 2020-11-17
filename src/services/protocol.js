import {axiosInstance} from './constants';

export default class ProtocolService{
    getData(){
        return axiosInstance.get('protocol/');
    }

    addData(data){
        return axiosInstance.post('protocol/',data);
    }

    editData(data){
        return axiosInstance.put('protocol/',data);
    }
    deleteData(id){
        return axiosInstance.delete(`protocol/${id}`);
    }   
}