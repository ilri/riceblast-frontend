import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../assets/riceblast_logo.jpg';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';
import SideBar from './Sidebar';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar:{
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo : {
    height:60,
    width:60,
    borderRadius:5,
  },
  links: {
      textDecoration:'none',
      color:'white',
  },
  homeIcon: {
      margin:5,
  }
}));
export default function Appbar(props) {

  const [home,setHome] = useState(true);
  useEffect(() => {
    if(props.props.match.path !== '/'){
      setHome(false);
    }
  },[]);
  
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} position='fixed'>
        <Toolbar>
          <Link to='/'>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <img alt='Rice Blast Logo' src={logo} variant='rounded' className={classes.logo} />
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            RICE BLAST 
          </Typography>

          {!home ? (
            
            <Link to='/' className={classes.links}>
              <Button color="inherit" >
                  <HomeIcon className={classes.homeIcon} />
              </Button>
            </Link>
          ): ''}

        </Toolbar>
      </AppBar>

      <SideBar />
    </div>
  );
}