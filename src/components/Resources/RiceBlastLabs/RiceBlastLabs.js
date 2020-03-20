import React,{useEffect,useState}from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import { makeStyles } from '@material-ui/core/styles';
import LabService from '../../../services/labs';
import Loader from '../../Loader/Loader';

const labService = new LabService();


const useStyles = makeStyles(theme => ({
    labsTable:{
        marginTop: 100,
    },
    loader:{
        marginTop:68,
    },  
}));



export default function RiceBlastLabs(props){
    const [labs,setLabs] = useState([]);
    const [load,setLoad] = useState(true);

    useEffect(() => {
        getLabs();
    },[]);

    const getLabs = () => {
        labService.getLabs().then(response => {
            console.log(response.data);
            setLabs(response.data);
            setLoad(false);
        }).catch(errors => console.log(errors));
    };
    const classes = useStyles();

    return(
        <div >
            <div>
                <Appbar props={props} />
                
            </div>

            <div className={classes.loader}>
                <Loader load={load}  />
            </div>

            <div className={classes.labsTable}>

                <Table labs={labs} />
            </div>
        </div>
    )
}