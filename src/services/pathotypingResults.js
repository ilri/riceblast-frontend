import {axiosInstance} from './constants';

export default class PathotypingService {
    getResults(){
        return axiosInstance.get('pathotyping_results/');
    }
}