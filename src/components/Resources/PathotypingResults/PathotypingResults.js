import React,{useEffect,useState} from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import PathotypingService from '../../../services/pathotypingResults';
import Loader from '../../Loader/Loader';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Drawer from '@material-ui/core/Drawer';      
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import Add from './Add';
import RiceGenotypeServices from '../../../services/riceGenotype';
import IsolatesService from '../../../services/isolates';
import PeopleService from '../../../services/people';
 import LabService from '../../../services/labs';
 import IconButton from '@material-ui/core/IconButton';



const service = new PathotypingService();
const genotypeService = new RiceGenotypeServices();
const isolatesService = new IsolatesService();
const peopleService = new PeopleService();
const labService = new LabService();




const useStyles = makeStyles(theme => ({
    labsTable:{
        marginTop: 50,
    },
    loader:{
        marginTop:68,
    },  
    addIcon:{
        textAlign:"right"
    },
    drawer:{
        width:550,
        height: '100%',
    }
}));


export default function PathotypingResults(props){
    const [data, setData] = useState([]);
    const [load,setLoad] = useState(true);
    const [open, setOpen] = useState(false);
    const [riceGenotypes, setRiceGenotypes] = useState([]);
    const [isolates, setIsolates] = useState([]);
    const [people,setPeople] = React.useState([]);
    const [labs,setLabs] = useState([]);



    useEffect(() => {
        getData();
        getGenotypes();
        getIsolates();
        getPeople();
        getLabs();
    },[]);



    const getData = () => {
        service.getData().then(response => {
            console.log(response.data);
            setData(response.data);
            setLoad(false)
        }).catch(errors => console.log(errors));
    };

    const classes = useStyles();

    const openDrawer = () => {
        setOpen(!open);
    };


    const handleDelete = (id) => {
        // console.log('ray');
        service.deleteData(id).then(
            response => {
                getData();
            }
        ).catch(
            errors => {
                console.log(errors);
            }
        )
    };

    const handleEdit = (newData) => {
        console.log(newData);
        service.editData(newData).then(
            response => {
                getData();
            }
        ).catch(
            errors => {
                console.log(errors);
            }
        )
    };
    const handleDeleteSelected = (data) => {
        console.log(data);
        service.deleteMultiple(data).then(
            response => {
                getData();
            }
        ).catch(
            errors => {
                console.log(errors);
            }
        )
    }
    const getGenotypes = () => {
        genotypeService.getRiceGenotypes().then(
          response => {
            setRiceGenotypes(response.data);
            console.log(response.data);
          }
        ).catch(
          error => console.log(error)
        );
    };


    const getIsolates = () => {
        isolatesService.getIsolates().then(response => {
            console.log(response.data);
            setIsolates(response.data);
            setLoad(false);
        }).catch(errors => console.log(errors));
    };
    
    const getPeople = () => {
        peopleService.getData().then(
          response => {
            setPeople(response.data);
            console.log(response.data);
          }
        ).catch(
          error => console.log(error)
        );
    };
  
    const getLabs = () => {
        labService.getLabs().then(response => {
            console.log(response.data);
            setLabs(response.data);
            setLoad(false);
        }).catch(errors => console.log(errors));
    };
        
    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <div className={classes.loader}>
                <Loader load={load}  />
            </div>


            <Grid container spacing={2} justify='center' className={classes.labsTable}>

                    <Grid item xs={10} className={classes.addIcon}>
                        <Fab color="primary" aria-label="add" 
                        aria-controls="add-menu" aria-haspopup="true" id='add-menu' onClick={openDrawer}>
                            <AddIcon />
                        </Fab>

                        <Drawer anchor='right' open={open} onClose={openDrawer}  
                            BackdropProps={{invisible: false}} 
                            disableBackdropClick={true}
                                
                        >
                            <Paper className={classes.drawer}>
                                <Grid container alignItems='flex-end' justify='flex-start'>
 
                                    <IconButton variant="outlined" onClick={openDrawer} size="medium" color="secondary" className='close-button'>        
                                        <CloseIcon fontSize='large' />
                                    </IconButton>
                                </Grid>

                                
                                <Add 
                                
                                getData={getData} 
                                openDrawer={openDrawer} 
                                riceGenotypes={riceGenotypes}
                                isolates={isolates}
                                people={people}
                                labs={labs}
                                />                                    
                                
                            </Paper>
                        </Drawer> 
                    </Grid>
                

                <Grid item xs={12} >
                    <Table 
                        data={data} 
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        riceGenotypes={riceGenotypes}
                        labs={labs}
                        isolates={isolates}
                        people={people}
                        handleDeleteSelected={handleDeleteSelected}
                    />
                </Grid>
            </Grid>

            
        </div>
    )
}