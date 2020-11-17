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
import ProtocolService from '../../../services/protocol';



const service = new ProtocolService();

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
        height: 300,
    }
}));









export default function Protocol(props){
    const [data, setData] = useState([]);
    const [load,setLoad] = useState(true);

        // DRAWER
    const [open, setOpen] = useState(false);

    useEffect(() => {
        getData();

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
 
                                    <CloseIcon fontSize='large' onClick={openDrawer} />

                                </Grid>

                                
                                <Add 
                                    getData={getData}                                     
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
                    />
                </Grid>
            </Grid>


        </div>
    )
}