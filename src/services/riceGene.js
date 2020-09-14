import {axiosInstance} from './constants';

export default class RiceGeneServices {
    getRiceGenes(){
        return axiosInstance.get('rice_genes/');
    }
    addiceGenes(data){
        return axiosInstance.post('rice_genes/',data);
    }

    editRiceGenes(data){
        return axiosInstance.put('rice_genes/',data);
    }
    deleteRiceGenes(id){
        return axiosInstance.delete(`rice_genes/${id}`);
    }
}
