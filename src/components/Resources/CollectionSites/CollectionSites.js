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
import IconButton from '@material-ui/core/IconButton';
import CollectionSiteService from '../../../services/collectionSites';
import PeopleService from '../../../services/people';

const peopleService = new PeopleService();

const service = new CollectionSiteService();













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



export default function CollectionSite(props){
    const [data, setData] = useState([]);
    const [load,setLoad] = useState(true);
    const [people, setPeople] = useState([]);
    // DRAWER
    const [open, setOpen] = useState(false);

    useEffect(() => {
        getData();
        getPeople();
    },[]);


    const classes = useStyles();


    const getData = () => {
        service.getCollectionSites().then(response => {
            setData(response.data);
            setLoad(false);
        }).catch(errors => console.log(errors));  
    }

    const openDrawer = () => {
        setOpen(!open);
    };



    const getPeople = () => {
        peopleService.getData().then(
          response => {
            setPeople(response.data);
          }
        ).catch(
          error => console.log(error)
        );
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

                                
                                <Add getData={getData} openDrawer={openDrawer} />                                    
                                
                            </Paper>
                        </Drawer> 
                    </Grid>
                

                <Grid item xs={12} >
                    <Table 
                        data={data} 
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        people={people}
                    />
                </Grid>
            </Grid>


        </div>
    )
}