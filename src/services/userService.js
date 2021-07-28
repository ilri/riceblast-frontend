import {axiosInstance} from './constants';

export default class UserService{
    loginUser(credentials){
        return axiosInstance.post('token/', credentials);
    }
    registerUser(data){
        return axiosInstance.post('register/', data);
    }
    getLoggedInUser(){
        return axiosInstance.get('current_user/');
    }
}