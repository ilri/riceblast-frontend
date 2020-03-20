import {axiosInstance} from './constants';

export default class IsolatesService{
    getIsolates(){
        return axiosInstance.get('isolates/');
    }
}