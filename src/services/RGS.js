import {axiosInstance} from './constants';

export default class RGSService{
    getResults(){
        return axiosInstance.get('rgs/');
    }
}