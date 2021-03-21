import {axiosInstance} from './constants';

export default class OutreachService{
    getData(){
        return axiosInstance.get('outreach/');
    }
    addData(data){

        const formData = new FormData();
        const {image, ...info} = data;

        formData.append('image', image);
        formData.append('info', JSON.stringify(info));

        return axiosInstance.post('outreach/',formData);
    }

    editData(data){
        return axiosInstance.put('outreach/',data);
    }
    
    deleteData(id){
        return axiosInstance.delete(`outreach/${id}`);
    }
} 


