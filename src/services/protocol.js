import {axiosInstance} from './constants';

export default class ProtocolService{
    getData(){
        return axiosInstance.get('protocol/');
    }

    addData(data){
        const formData = new FormData();
        const {protocol, ...info} = data;

        formData.append('protocol', protocol);
        formData.append('info', JSON.stringify(info));

        return axiosInstance.post('protocol/',formData);  
    }

    editData(data){
        const formData = new FormData();
        const {protocol, ...info} = data;

        formData.append('protocol', protocol);
        formData.append('info', JSON.stringify(info));

        return axiosInstance.put('protocol/',formData);    
    }
    deleteData(id){
        return axiosInstance.delete(`protocol/${id}`);
    }   
    deleteMultiple(data){
        return axiosInstance.put(`delete_protocols/`,data);
    } 
}