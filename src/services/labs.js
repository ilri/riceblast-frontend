import {axiosInstance} from './constants';

export default class LabService{
    getLabs(){
        return axiosInstance.get('labs/');
    }
}