import React,{useEffect,useState} from 'react';
import Appbar from '../../Appbar/Appbar';
import Table from './Table';
import RiceGeneService from '../../../services/riceGene';
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







const riceGeneService = new RiceGeneService();

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


export default function RiceGenes(props){
    const [genes, setGenes] = useState([]);
    const [load,setLoad] = useState(true);
    // DRAWER
    const [open, setOpen] = useState(false);



    useEffect(() => {
        getRiceGenes();
    },[]);

    const classes = useStyles();


    const getRiceGenes = () => {
        riceGeneService.getRiceGenes().then(response => {
            console.log(response.data);
            setGenes(response.data);
            setLoad()
        }).catch(errors => console.log(errors));
    }

    const openDrawer = () => {
        setOpen(!open);
    };


    const handleDelete = (id) => {
        // console.log('ray');
        riceGeneService.deleteRiceGenes(id).then(
            response => {
                getRiceGenes();
            }
        ).catch(
            errors => {
                console.log(errors);
            }
        )
    };

    const handleEdit = (newData) => {
        console.log(newData);
        riceGeneService.editRiceGenes(newData).then(
            response => {
                getRiceGenes();
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

                                
                                <Add getRiceGenes={getRiceGenes} openDrawer={openDrawer} />                                    
                                
                            </Paper>
                        </Drawer> 
                    </Grid>
                

                <Grid item xs={12} >
                    <Table 
                        genes={genes}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />
                </Grid>
            </Grid>
        </div>
    )
}