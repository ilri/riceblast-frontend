import React, {useEffect,useState} from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import Loader from '../../Loader/Loader';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Drawer from '@material-ui/core/Drawer';      
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Add from './Add';
import RiceGBSService from '../../../services/riceGBS';
import IconButton from '@material-ui/core/IconButton';

import PeopleService from '../../../services/people';
import LabService from '../../../services/labs';



const peopleService = new PeopleService();
const labService = new LabService();
const service = new RiceGBSService();

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









export default function RiceGBS(props){
    const [data, setData] = useState([]);
    const [load,setLoad] = useState(true);
    const [people,setPeople] = React.useState([]);
    const [riceGenotypes, setRiceGenotypes] = useState([]);
    const [labs,setLabs] = useState([]);
        // DRAWER
    const [open, setOpen] = useState(false);

    useEffect(() => {
        getData();
        getPeople();
        getLabs();
    },[]);


    const classes = useStyles();


    const getData = () => {
        service.getData().then(response => {
            console.log(response.data);
            setData(response.data);
            setLoad();
        }).catch(errors => console.log(errors));
    }

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
                                    people={people}    
                                    labs={labs}                                       
                                    openDrawer={openDrawer} 
                                />                                    
                                
                            </Paper>
                        </Drawer> 
                    </Grid>
                

                <Grid item xs={12} >
                    <Table 
                        data={data} 
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        people={people}    
                        labs={labs}                    
                    />
                </Grid>
            </Grid>


        </div>
    )
}