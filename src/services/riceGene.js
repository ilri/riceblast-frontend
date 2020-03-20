import {axiosInstance} from './constants';

export default class RiceGeneServices {
    getRiceGenes(){
        return axiosInstance.get('rice_genes/');
    }
}