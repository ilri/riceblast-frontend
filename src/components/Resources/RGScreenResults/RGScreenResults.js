import React, {useEffect,useState} from 'react';
import RGSService from '../../../services/RGS';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';



const rgsService = new RGSService();




export default function RGScreenResults(props){
    const [results, setResults] = useState([]);
    useEffect(() => {
        rgsService.getResults().then(response => {
            console.log(response.data);
            setResults(response.data);
        }).catch(errors => console.log(errors));
    },[]);

    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <div>
                <Table results={results} />
            </div>
        </div>
    )
}