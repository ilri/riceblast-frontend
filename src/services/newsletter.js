import {axiosInstance} from './constants';

export default class NewslettersService{
    getData(){
        return axiosInstance.get('newsletter/');
    }
    addData(data){

        const formData = new FormData();
        const {newsletter, ...info} = data;

        formData.append('newsletter', newsletter);
        formData.append('info', JSON.stringify(info));

        return axiosInstance.post('newsletter/',formData);
    }

    editData(data){
        return axiosInstance.put('newsletter/',data);
    }
    deleteData(id){
        return axiosInstance.delete(`newsletter/${id}`);
    }
}