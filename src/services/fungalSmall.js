import {axiosInstance} from './constants';
   
export default class FungalSmallServices {
    getData(){
        return axiosInstance.get('fungal_small/');
    }
    addData(data){

        const formData = new FormData();
        const {fungal_gene_sequence, ...info} = data;

        formData.append('fungal_gene_sequence', fungal_gene_sequence);
        formData.append('info', JSON.stringify(info));

        return axiosInstance.post('fungal_small/',formData);
    }

    editData(data){
        const formData = new FormData();
        const {fungal_gene_sequence, ...info} = data;

        formData.append('fungal_gene_sequence', fungal_gene_sequence);
        formData.append('info', JSON.stringify(info));

        return axiosInstance.put('fungal_small/',formData);
    }
    deleteData(id){
        return axiosInstance.delete(`fungal_small/${id}`);
    }    
    deleteMultiple(data){
        return axiosInstance.put(`delete_fungal_small/`,data);
    } 
}