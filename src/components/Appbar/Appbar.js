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
    height:40,
    width:40,
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
  const [dash, setDash] = useState(false); //RESOURCES
  const [showSide, setShowSide] = useState(true);

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
  
  const classes = useStyles();

  


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} position='fixed'>
        <Toolbar>
          {dash ? (
            // <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={showSidebar} >
            //   <MenuIcon />
            // </IconButton>

            <Link to='/'>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <img alt='Rice Blast Logo' src={logo} variant='rounded' className={classes.logo} />
              </IconButton>
            </Link>
          ) : (
            <Link to='/'>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <img alt='Rice Blast Logo' src={logo} variant='rounded' className={classes.logo} />
              </IconButton>
            </Link>
          )}
          <Typography variant="h6" className={classes.title}>
            DURABLE RICE BLAST FOR SUB-SAHARAN AFRICA
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
      

      

      {dash ? (<ResourceSidebar />):(<SideBar showSide={showSide} />)}
      
    </div>
  );
}