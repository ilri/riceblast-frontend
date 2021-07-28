import {axiosInstance} from './constants';

export default class PeopleService {
    getData(){
        return axiosInstance.get('people/');
    }
    activateUser(action){
        return axiosInstance.put('user_activation/', action);
    }
    editUser(data){
        return axiosInstance.put('people/',data);
    }
    deleteUser(username){
        return axiosInstance.delete(`user_delete/${username}`);
    }
}