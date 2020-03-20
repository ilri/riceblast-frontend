import React,{useEffect,useState} from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import FungalGBSService from '../../../services/fungalGBS';

const fungalService = new FungalGBSService();




export default function FungalGBS(props){
    const [data, setData] = useState([]);
    useEffect(() => {
        fungalService.getData().then(response => {
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