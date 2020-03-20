import {axiosInstance} from './constants';

export default class ProtocolService{
    getData(){
        return axiosInstance.get('protocol/');
    }
}