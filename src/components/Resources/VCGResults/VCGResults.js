
import React,{useEffect,useState} from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import VCGTestResultsService from '../../../services/vcgTestResults';

const vcgService = new VCGTestResultsService();




export default function VCGResults(props){
    const [data, setData] = useState([]);
    useEffect(() => {
        vcgService.getResults().then(response => {
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