import {axiosInstance} from './constants';

export default class PathotypingService {
    getData(){
        return axiosInstance.get('pathotyping_results/');
    }
    addData(data){
        return axiosInstance.post('pathotyping_results/',data);
    }

    editData(data){
        return axiosInstance.put('pathotyping_results/',data);
    }
    deleteData(id){
        return axiosInstance.delete(`pathotyping_results/${id}`);
    }
}
