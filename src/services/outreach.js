import {axiosInstanceMedia,axiosInstance} from './constants';
import axios from 'axios';


export default class OutreachService{
    getData(){
        return axiosInstanceMedia.get('outreach/');
    }
    addData(data){

        const formData = new FormData();
        const {image,outreach_file, ...info} = data;

        formData.append('image', image);
        formData.append('outreach_file', outreach_file);
        formData.append('info', JSON.stringify(info));

        return axiosInstance.post('outreach/',formData);
    }

    editData(data){
        const formData = new FormData();
        const {image,outreach_file, ...info} = data;

        formData.append('image', image);
        formData.append('outreach_file', outreach_file);
        formData.append('info', JSON.stringify(info));

        return axiosInstance.put('outreach/',formData);
    }
    
    deleteData(id){
        return axiosInstance.delete(`outreach/${id}`);
    }
} 


