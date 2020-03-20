import React,{useEffect,useState} from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import IsolatesService from '../../../services/isolates';

const isolatesService = new IsolatesService();




export default function Isolates(props){
    const [isolates, setIsolates] = useState([]);
    useEffect(() => {
        isolatesService.getIsolates().then(response => {
            console.log(response.data);
            setIsolates(response.data);
        }).catch(errors => console.log(errors));
    },[]);

    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <div>
                <Table isolates={isolates} />
            </div>
        </div>
    )
}