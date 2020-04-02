import {axiosInstance} from './constants';

export default class PeopleService {
    getData(){
        return axiosInstance.get('people/');
    }
}