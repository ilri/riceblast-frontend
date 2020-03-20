import React,{useEffect,useState} from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import RiceGeneService from '../../../services/riceGene';

const riceGeneService = new RiceGeneService();




export default function RiceGenes(props){
    const [genes, setGenes] = useState([]);
    useEffect(() => {
        riceGeneService.getRiceGenes().then(response => {
            console.log(response.data);
            setGenes(response.data);
        }).catch(errors => console.log(errors));
    },[]);

    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <div>
                <Table genes={genes} />
            </div>
        </div>
    )
}