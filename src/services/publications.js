import {axiosInstanceMedia,axiosInstance} from './constants';
import axios from 'axios';

export default class PublicationsService{
    getData(){
        return axiosInstanceMedia.get('publications/');
    }

    addData(data){

        const formData = new FormData();
        const {publication, ...info} = data;

        formData.append('publication', publication);
        formData.append('info', JSON.stringify(info));

        return axiosInstance.post('publications/',formData);
    }

    editData(data){
        const formData = new FormData();
        const {publication, ...info} = data;

        formData.append('publication', publication);
        formData.append('info', JSON.stringify(info));

        return axiosInstance.put('publications/',formData);
    }
    deleteData(id){
        return axiosInstance.delete(`publications/${id}`);
    }
}