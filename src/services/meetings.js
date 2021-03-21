import {axiosInstance} from './constants';

export default class MeetingsService{
    getData(){
        return axiosInstance.get('meetings/');
    }
    addData(data){

        const formData = new FormData();
        const {minutes, ...info} = data;

        formData.append('minutes', minutes);
        formData.append('info', JSON.stringify(info));

        return axiosInstance.post('meetings/',formData);
    }

    editData(data){
        return axiosInstance.put('meetings/',data);
    }

    deleteData(id){
        return axiosInstance.delete(`meetings/${id}`);
    }
}