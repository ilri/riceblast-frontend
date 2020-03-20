import {axiosInstance} from './constants';

export default class RiceGenotypeServices {
    getRiceGenotypes(){
        return axiosInstance.get('rice_genotypes/');
    }
}