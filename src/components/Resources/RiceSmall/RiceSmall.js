import React,{useEffect,useState} from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import RiceSmallService from '../../../services/riceSmall';

const riceSmallService = new RiceSmallService();




export default function RiceSmall(props){
    const [data, setData] = useState([]);
    useEffect(() => {
        riceSmallService.getData().then(response => {
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