import React,{useEffect,useState} from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import ProtocolService from '../../../services/protocol';

const protocolService = new ProtocolService();




export default function Protocols(props){
    const [data, setData] = useState([]);
    useEffect(() => {
        protocolService.getData().then(response => {
            console.log(response.data);
            setData(response.data);
        }).catch(errors => console.log(errors));
    },[]);

    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <div>
                <Table data={data} />
            </div>
        </div>
    )
}