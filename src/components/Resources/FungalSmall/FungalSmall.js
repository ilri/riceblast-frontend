import React,{useEffect,useState} from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import FungalSmallService from '../../../services/fungalSmall';

const fungalSmallService = new FungalSmallService();




export default function FungalSmall(props){
    const [data, setData] = useState([]);
    useEffect(() => {
        fungalSmallService.getData().then(response => {
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