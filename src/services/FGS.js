import {axiosInstance} from './constants';

export default class FGSService{
    getResults(){
        return axiosInstance.get('fgs/');
    }
}