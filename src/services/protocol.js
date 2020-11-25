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
        return axiosInstance.put('protocol/',data);
    }
    deleteData(id){
        return axiosInstance.delete(`protocol/${id}`);
    }   
}