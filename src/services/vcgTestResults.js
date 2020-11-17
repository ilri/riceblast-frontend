import {axiosInstance} from './constants';

export default class VCGTestResultsService{
    getData(){
        return axiosInstance.get('vcg_test_results/');
    }
    addData(data){
        return axiosInstance.post('vcg_test_results/',data);
    }
    editData(data){
        return axiosInstance.put('vcg_test_results/',data);
    }
    deleteData(id){
        return axiosInstance.delete(`vcg_test_results/${id}`);
    }
}