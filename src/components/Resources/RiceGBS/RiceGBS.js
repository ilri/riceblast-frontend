import React,{useEffect,useState} from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import RiceGBSService from '../../../services/riceGBS';

const riceService = new RiceGBSService();




export default function RiceGBS(props){
    const [data, setData] = useState([]);
    useEffect(() => {
        riceService.getData().then(response => {
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