import {axiosInstance} from './constants';

export default class PublicationsService{
    getData(){
        return axiosInstance.get('publications/');
    }
    addData(data){

        const formData = new FormData();
        const {publication, ...info} = data;

        formData.append('publication', publication);
        formData.append('info', JSON.stringify(info));

        return axiosInstance.post('publications/',formData);
    }

    editData(data){
        return axiosInstance.put('publications/',data);
    }
    deleteData(id){
        return axiosInstance.delete(`publications/${id}`);
    }
}