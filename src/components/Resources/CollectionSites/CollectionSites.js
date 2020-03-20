import React, {useState, useEffect} from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import CollectionSiteService from '../../../services/collectionSites';


const siteService = new CollectionSiteService();




export default function CollectionSite(props){
    const [sites, setSites] = useState([]);
    useEffect(() => {
        siteService.getCollectionSites().then(response => {
            console.log(response.data);
            setSites(response.data);
        }).catch(errors => console.log(errors));
    },[]);
    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <div>
                <Table sites={sites} />
            </div>
        </div>
    )
}