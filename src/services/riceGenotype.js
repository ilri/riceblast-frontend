import {axiosInstance} from './constants';

export default class RiceGenotypeServices {
    getRiceGenotypes(){
        return axiosInstance.get('rice_genotypes/');
    }

    addRiceGenotypes(data){
        return axiosInstance.post('rice_genotypes/',data);
    }

    putRiceGenotypes(data){
        return axiosInstance.get('rice_genotypes/',data);
    }

    deleteRiceGenotypes(id){
        return axiosInstance.get(`rice_genotypes/${id}`);
    }
}