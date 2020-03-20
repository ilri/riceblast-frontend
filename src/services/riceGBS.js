import {axiosInstance} from './constants';

export default class RiceGBSService{
    getData(){
        return axiosInstance.get('rice_gbs/');
    }
}