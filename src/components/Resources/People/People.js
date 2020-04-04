import React from 'react';
import Table from './Table';
import Appbar from '../../Appbar/Appbar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddUser from './AddUser';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PeopleService from '../../../services/people';


const peopleService = new PeopleService();



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    options: {
      marginTop: 100,
      marginLeft:150,      
    },
    control: {
      padding: theme.spacing(2),
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      height:'70%',
      width:'70%',
      padding: theme.spacing(2, 4, 3),
    },
    grid:{
      position:'fixed',
      zIndex:4,
      maxWidth:'50%',
    },
}));


export default function People(props){
    const classes = useStyles();
    const [people,setPeople] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [user,setUser] = React.useState(null)


    

    React.useEffect(() => {
      getPeople();
    },[])
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
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

    const handleClick = (rowData) => (event) => {
      console.log(rowData);
      setUser(user ? null : rowData);
      setAnchorEl(anchorEl ? null : event.currentTarget);
    }

    const handleActivate = (action,username) => () => {
      const data = {
        'username':username, 'action':action
      };
      peopleService.activateUser(data).then(
        response => {
          console.log(response.data.message);
          getPeople();
          handleClick(user)();
        }
      ).catch(errors => console.log(errors));


    };
    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>
            <Grid container className={classes.options} spacing={2}>
                <Grid item xs={10}>
                    <Grid container alignContent='flex-end' justify='flex-end' spacing={2}>
                        <Fab color="primary" aria-label="add" 
                        aria-controls="add-menu" aria-haspopup="true" id='add-menu' onClick={handleOpen}>
                            <AddIcon />
                        </Fab> 
                            <div>
                              <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className={classes.modal}
                                open={open}

                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                  timeout: 500,
                                }}
                              >
                                <Fade in={open}>
                                  <div className={classes.paper}>
                                    <Grid container spacing={3}>

                                      <Grid container justify='flex-end' alignContent='flex-end'>
                                        <IconButton aria-label="close" onClick={handleClose}>
                                          <CloseIcon fontSize='large' />
                                        </IconButton>
                                      </Grid>                                      
                                      <Grid container className={classes.grid}>
                                        <h2 id="transition-modal-title">ADD USER</h2>
                                      </Grid>

                                    </Grid>
                                    <div id="transition-modal-description">
                                      <AddUser getPeople={getPeople} />
                                    </div>
                                  </div>
                                </Fade>
                              </Modal>
                            </div>
 
                    </Grid>
                </Grid>
      
            </Grid>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={2}>
                    <Table data={people} handleActivate={handleActivate} anchorEl={anchorEl} handleClick={handleClick} user={user} />
                  </Grid>
                </Grid>                
            </Grid>
        </div>
    )
}