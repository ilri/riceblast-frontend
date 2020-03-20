import React, {useEffect,useState} from 'react';
import FGSService from '../../../services/FGS';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';



const fgsService = new FGSService();




export default function FGScreenResults(props){
    const [results, setResults] = useState([]);
    useEffect(() => {
        fgsService.getResults().then(response => {
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