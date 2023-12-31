import {axiosInstance} from './constants';

export default class RiceGenotypeServices {
    getRiceGenotypes(){
        return axiosInstance.get('rice_genotypes/');
    }

    addRiceGenotypes(data){
        return axiosInstance.post('rice_genotypes/',data);
    }

    editRiceGenotypes(data){
        return axiosInstance.put('rice_genotypes/',data);
    }

    deleteRiceGenotypes(id){
        return axiosInstance.delete(`rice_genotypes/${id}`);
    }
    deleteMultiple(data){
        return axiosInstance.put(`delete_genotypes/`,data);
    }
}