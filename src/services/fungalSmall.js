import {axiosInstance} from './constants';

export default class FungalSmallServices {
    getData(){
        return axiosInstance.get('fungal_small/');
    }
}