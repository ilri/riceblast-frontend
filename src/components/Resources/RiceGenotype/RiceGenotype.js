import React,{useEffect,useState} from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import RiceGenotypeServices from '../../../services/riceGenotype';

const genotypeService = new RiceGenotypeServices();




export default function RiceGenotype(props){
    const [riceGenotypes, setRiceGenotypes] = useState([]);
    useEffect(() => {
        genotypeService.getRiceGenotypes().then(response => {
            console.log(response.data);
            setRiceGenotypes(response.data);
        }).catch(errors => console.log(errors));
    },[]);

    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <div>
                <Table riceGenotypes={riceGenotypes} />
            </div>
        </div>
    )
}