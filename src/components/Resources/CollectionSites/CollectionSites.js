import React, {useState, useEffect} from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import CollectionSiteService from '../../../services/collectionSites';
import PeopleService from '../../../services/people';


const peopleService = new PeopleService();

const siteService = new CollectionSiteService();




export default function CollectionSite(props){
    const [sites, setSites] = useState([]);
    const [people, setPeople] = useState([]);
    const [project,setProject] = useState([]);

    useEffect(() => {
        getSite();
        getPeople();
    },[]);
    
    const getSite = () => {
        siteService.getCollectionSites().then(response => {
            setSites(response.data);
        }).catch(errors => console.log(errors));       
    };
    const handleEditSite = (newData) => {
        siteService.editCollectionSite(newData).then(response => {
            getSite();
        }).catch(errors => console.log(errors));
    };

    const getPeople = () => {
        peopleService.getData().then(
          response => {
            setPeople(response.data);
          }
        ).catch(
          error => console.log(error)
        );
    };
    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <div>
                <Table 
                sites={sites} 
                handleEditSite={handleEditSite} 
                people={people}
                getSite={getSite} 
                />
            </div>

        </div>
    )
}