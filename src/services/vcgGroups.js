import {axiosInstance} from './constants';

export default class VCGGroupsService{
    getResults(){
        return axiosInstance.get('vcg_groups/');
    }
}