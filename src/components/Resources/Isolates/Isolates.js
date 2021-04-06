import React,{useEffect,useState} from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import IsolatesService from '../../../services/isolates';
import Loader from '../../Loader/Loader';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Drawer from '@material-ui/core/Drawer';      
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import Form from './Form';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AddIsolate from './AddIsolate';
import IconButton from '@material-ui/core/IconButton';




const isolatesService = new IsolatesService();


const useStyles = makeStyles(theme => ({
    table:{
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

export default function Isolates(props){
    const [isolates, setIsolates] = useState([]);
    const [open, setOpen] = useState(false);
    const [load,setLoad] = useState(true);
    const classes = useStyles();

    useEffect(() => {
        getIsolates();
    },[]);

    const getIsolates = () => {
        isolatesService.getIsolates().then(response => {
            console.log(response.data);
            setIsolates(response.data);
            setLoad(false);
        }).catch(errors => console.log(errors));
    };

    const openDrawer = () => {
        setOpen(!open);
    };

    const handleDelete = (id) => {
        // console.log('ray');
        isolatesService.deleteIsolate(id).then(
            response => {
                console.log(response.data);
                getIsolates();
            }
        ).catch(
            errors => {
                console.log(errors);
            }
        )
    };
    const handleEdit = (newData) => {
        console.log(newData);
        isolatesService.editIsolate(newData).then(
            response => {
                console.log(response.data)
                getIsolates();
            }
        ).catch(
            errors => {
                console.log(errors);
            }
        )
    };
    const handleDeleteSelected = (data) => {
        console.log(data);
        isolatesService.deleteMultiple(data).then(
            response => {
                getIsolates();
            }
        ).catch(
            errors => {
                console.log(errors);
            }
        )
    }
    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <div className={classes.loader}>
                <Loader load={load}  />
            </div>


            <Grid container spacing={2} justify='center' className={classes.table}>

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
                            
                            <AddIsolate 
                                getIsolates={getIsolates} 
                                openDrawer={openDrawer}
                            />                                    
                            
                        </Paper>
                    </Drawer> 
                </Grid>
                

                <Grid item xs={12} >
                    <Table 
                        isolates={isolates}
                        handleDelete={handleDelete} 
                        handleEdit={handleEdit}
                        handleDeleteSelected={handleDeleteSelected}
                    />
                </Grid>
            </Grid>
            
        </div>
    )
}