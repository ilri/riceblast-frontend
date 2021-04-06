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
import MenuIcon from '@material-ui/icons/Menu';
import ResourceSidebar from '../Resources/ResourceSidebar';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import { Menu, Segment } from 'semantic-ui-react'



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
    [theme.breakpoints.down('md')]: {
      fontSize: 10,
    },
  },
  logo : {
    height:50,
    width:50,
    borderRadius:5,
  },
  links: {
      textDecoration:'none',
      color:'white',
  },
  homeIcon: {
      margin:5,
  },
  sideMenuButton:{
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  logoWrapper:{
    zIndex: theme.zIndex.drawer + 3,

  }
}));
export default function Appbar(props) {

  const [home,setHome] = useState(true);
  const [dash, setDash] = useState(false); //RESOURCES
  const [showSide, setShowSide] = useState(true);
  const [responsiveDrawer,setRespDrawer] = useState(false);

  useEffect(() => {
    // console.log(props)
    handleUrls();
  });

  const handleUrls = () => {
    const path = props.props.match.path;
    //CHECK IF USER IS IN RESOURCES
    const resources = path.split('/').includes('resources');

    if(path !== '/'){
      setHome(false);
    }

    if(resources){
      setDash(true);
      setShowSide(false);
    }
    

  }
  const showSidebar = () => {
    setShowSide(!showSide);
  }
  const handleResponsiveDrawer=()=>{
    setRespDrawer(!responsiveDrawer);
  }
  
  const classes = useStyles();

  


  return (
    <div className={classes.root}>

        <AppBar className={classes.appBar} position='fixed'>
        <Toolbar>

        <Hidden only={['xs','sm','md']} implementation="css">

            <div className={classes.logoWrapper}>

              <Link to='/'>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <img alt='Rice Blast Logo' src={logo} variant='rounded' className={classes.logo} />
                </IconButton>
              </Link>
            </div>
        </Hidden>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleResponsiveDrawer}
            className={classes.sideMenuButton}
          >
          <MenuIcon />
        </IconButton>
          <Typography variant="h6" className={classes.title}>

            DURABLE RICEBLAST FOR SUB-SAHARAN AFRICA
          </Typography>

          {!home ? (
            <div>
            <Link to='/' className={classes.links}>
              <Button color="inherit" >
                  <HomeIcon className={classes.homeIcon} />
              </Button>
            </Link>

            {dash ? (
            <Link to='/resources/dashboard' className={classes.links}>
              <Button color="inherit" >
                  <DashboardIcon className={classes.homeIcon} />
              </Button> 
            </Link>
            ):''}
            </div>
          ): ''}

        </Toolbar>
        </AppBar>

      

      

      {dash ? (<ResourceSidebar props={props} />):(<SideBar handleResponsiveDrawer={handleResponsiveDrawer} responsiveDrawer={responsiveDrawer} showSide={showSide} />)}
      
    </div>
  );
}