import {axiosInstance} from './constants';

export default class FungalGBSService{
    getData(){
        return axiosInstance.get('fungal_gbs/');
    }
}