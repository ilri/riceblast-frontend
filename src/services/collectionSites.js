import {axiosInstance,axiosInstanceMedia} from './constants';

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
    deleteMultiple(data){
        return axiosInstance.put(`delete_sites/`,data);
    }
    getCollectionSitesHome(){
        return axiosInstanceMedia.get('collection_sites/');
    }
}