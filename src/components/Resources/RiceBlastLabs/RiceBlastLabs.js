import React,{useEffect,useState}from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import LabService from '../../../services/labs';
import Loader from '../../Loader/Loader';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Drawer from '@material-ui/core/Drawer';      
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import Form from './Form';
import AddLabs from './AddLabs';
import IconButton from '@material-ui/core/IconButton';











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
    }
}));



export default function RiceBlastLabs(props){
    const [labs,setLabs] = useState([]);
    const [load,setLoad] = useState(true);
    // DRAWER
    const [open, setOpen] = useState(false);

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

    const openDrawer = () => {
        setOpen(!open);
    };


    const handleDelete = (id) => {
        // console.log('ray');
        labService.deleteLab(id).then(
            response => {
                console.log(response.data);
                getLabs();
            }
        ).catch(
            errors => {
                console.log(errors);
            }
        )
    };
    const handleEdit = (newData) => {
        console.log(newData);
        labService.editLab(newData).then(
            response => {
                console.log(response.data)
                getLabs();
            }
        ).catch(
            errors => {
                console.log(errors);
            }
        )
    };



    return(
        <div >
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
                            <div className={classes.drawer}>
                                <Grid container alignItems='flex-end' justify='flex-start'>
                                    <IconButton variant="outlined" onClick={openDrawer} size="medium" color="secondary" className='close-button'>

                                        <CloseIcon fontSize='large' />
                                    </IconButton>

                                </Grid>

                                
                                <AddLabs getLabs={getLabs} openDrawer={openDrawer} />                                    
                                
                            </div>
                        </Drawer> 
                    </Grid>
                

                <Grid item xs={12} >
                    <Table 
                        labs={labs} 
                        handleDelete={handleDelete} 
                        handleEdit={handleEdit}
                    />
                </Grid>
            </Grid>
        </div>
    )
}