import React,{useEffect,useState} from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import RiceGenotypeServices from '../../../services/riceGenotype';
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




const genotypeService = new RiceGenotypeServices();


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




export default function RiceGenotype(props){
    const [riceGenotypes, setRiceGenotypes] = useState([]);
    const [load,setLoad] = useState(true);
    // DRAWER
    const [open, setOpen] = useState(false);




    useEffect(() => {
        getGenotypes();
    },[]);

    const classes = useStyles();


    const getGenotypes = () => {
        genotypeService.getRiceGenotypes().then(response => {
            console.log(response.data);
            setRiceGenotypes(response.data);
            setLoad();
        }).catch(errors => console.log(errors));
    }

    const openDrawer = () => {
        setOpen(!open);
    };


    const handleDelete = (id) => {
        // console.log('ray');
        genotypeService.deleteRiceGenotypes(id).then(
            response => {
                getGenotypes();
            }
        ).catch(
            errors => {
                console.log(errors);
            }
        )
    };

    const handleEdit = (newData) => {
        console.log(newData);
        genotypeService.editRiceGenotypes(newData).then(
            response => {
                getGenotypes();
            }
        ).catch(
            errors => {
                console.log(errors);
            }
        )
    };
    const handleDeleteSelected = (data) => {
        console.log(data);
        genotypeService.deleteMultiple(data).then(
            response => {
                getGenotypes();
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

                                
                                <Add getGenotypes={getGenotypes} openDrawer={openDrawer} />                                    
                                
                            </Paper>
                        </Drawer> 
                    </Grid>
                

                <Grid item xs={12} >
                    <Table 
                        riceGenotypes={riceGenotypes} 
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        handleDeleteSelected={handleDeleteSelected}
                    />
                </Grid>
            </Grid>
        </div>
    )
}