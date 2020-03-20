import {axiosInstance} from './constants';

export default class VCGTestResultsService{
    getResults(){
        return axiosInstance.get('vcg_test_results/');
    }
}