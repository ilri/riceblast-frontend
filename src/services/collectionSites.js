import {axiosInstance} from './constants';

export default class CollectionSiteService{
    getCollectionSites(){
        return axiosInstance.get('collection_sites/');
    }
    editData(data){
        return axiosInstance.put('collection_sites/',data);
    }
    addData(data){
        return axiosInstance.post('collection_sites/',data);
    }
    deleteData(data){
        return axiosInstance.delete(`collection_sites/${data}`)
    }
}