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

    uploadFile(rice_genes){
        const formData = new FormData();

        formData.append('rice_genes', rice_genes);

        return axiosInstance.post('upload_rice_genes/',formData);  
    }
}
