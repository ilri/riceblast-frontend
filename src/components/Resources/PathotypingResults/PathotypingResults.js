import React,{useEffect,useState} from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import PathotypingService from '../../../services/pathotypingResults';
import Loader from '../../Loader/Loader';
import { makeStyles } from '@material-ui/core/styles';


const pathotypingService = new PathotypingService();

const useStyles = makeStyles(theme => ({
    labsTable:{
        marginTop: 100,
    },
    loader:{
        marginTop:68,
    },  
}));


export default function PathotypingResults(props){
    const [results, setResults] = useState([]);
    const [load,setLoad] = useState(true);

    useEffect(() => {
        pathotypingService.getResults().then(response => {
            console.log(response.data);
            setResults(response.data);
            setLoad(false)
        }).catch(errors => console.log(errors));
    },[]);

    const classes = useStyles();

    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <div className={classes.loader}>
                <Loader load={load}  />
            </div>

            <div>
                <Table results={results} />
            </div>
        </div>
    )
}