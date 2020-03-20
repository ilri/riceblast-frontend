import {axiosInstance} from './constants';

export default class UserService{
    loginUser(credentials){
        return axiosInstance.post('token/', credentials);
    }
}