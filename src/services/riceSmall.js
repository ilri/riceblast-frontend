import {axiosInstance} from './constants';

export default class RiceSmallService {
    getData(){
        return axiosInstance.get('rice_small/');
    }
}