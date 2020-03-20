import React,{useEffect,useState} from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import VCGGroupsService from '../../../services/vcgGroups';

const vcgService = new VCGGroupsService();




export default function VCGGroups(props){
    const [groups, setGroups] = useState([]);
    useEffect(() => {
        vcgService.getResults().then(response => {
            console.log(response.data);
            setGroups(response.data);
        }).catch(errors => console.log(errors));
    },[]);

    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <div>
                <Table groups={groups} />
            </div>
        </div>
    )
}