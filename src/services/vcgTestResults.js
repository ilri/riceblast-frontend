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
    uploadFile(vcg_test_results){
        const formData = new FormData();

        formData.append('vcg_test_results', vcg_test_results);

        return axiosInstance.post('upload_vcg_test_results/',formData);  
    }
    deleteMultiple(data){
        return axiosInstance.put(`delete_vcg_results/`,data);
    } 
}