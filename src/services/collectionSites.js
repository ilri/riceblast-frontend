import {axiosInstance} from './constants';

export default class CollectionSiteService{
    getCollectionSites(){
        return axiosInstance.get('collection_sites/');
    }
}