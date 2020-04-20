import {axiosInstance} from './constants';

export default class CollectionSiteService{
    getCollectionSites(){
        return axiosInstance.get('collection_sites/');
    }
    editCollectionSite(data){
        return axiosInstance.put('collection_sites/',data);
    }
    addCollectionSIte(data){
        return axiosInstance.post('collection_sites/',data);
    }
    deleteCollectionSite(data){
        return axiosInstance.delete('collection_sites/',data)
    }
}