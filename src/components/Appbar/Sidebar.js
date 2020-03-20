import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Collapse from '@material-ui/core/Collapse';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {Link} from 'react-router-dom';



const useStyles = makeStyles(theme => ({

    drawer:{
      width: 240,
      flexShrink: 0,
      zIndex:10,
    },
    drawerPaper: {
        width: 240,
    },
    toolbar: theme.mixins.toolbar,
    list:{
        paddingTop:20,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    links: {
        textDecoration:'none',
    }
}));


export default function SideBar({showSide}){
    const classes = useStyles();
    const [open,setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    


    const mediaOptions = () => (
        <div key={'Media'}>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <ArrowForwardIosIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText primary="Media" style={{color:'#3f51b5',fontWeight:'bold'}} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {['Newsletters','Meetings', 'Stakeholder Engagements','Factsheets'].map((media, index)=>(
                    <div key={index + 1}>
                    <Link 
                        to={`/media/${(media === "Newsletters") ? "newletters": (media === "Meetings") ? "meetings": (media == 'Factsheets') ? "factsheets" : "stakeholder_engagements"}`}
                        className={classes.links}
                    >
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                              <ArrowRightIcon fontSize='small' />
                            </ListItemIcon>
                            <ListItemText primary={media} />
                        </ListItem> 
                        <Divider variant='inset' />
                    </Link>
                    </div>
                    ))}
                </List>
            </Collapse>
            <Divider />
        </div>
    );
    const resourceOptions = () => (
        <div key={'Resources'}>
            <Link to='/login' className={classes.links}>
                <ListItem button>
                    <ListItemIcon>
                        <ArrowForwardIosIcon fontSize='small' />
                    </ListItemIcon>
                    <ListItemText primary="Resources" style={{color:'#3f51b5',fontWeight:'bold'}} />
                </ListItem>
                <Divider />
            </Link>
        </div>
    );
    const aboutOptions = () => (
        <div key={'About'}>
            <Link to='/about' className={classes.links}>
                <ListItem button>
                    <ListItemIcon>
                        <ArrowForwardIosIcon fontSize='small' />
                    </ListItemIcon>
                    <ListItemText primary="About" style={{color:'#3f51b5',fontWeight:'bold'}} />
                </ListItem>
                <Divider />
            </Link>
        </div>
    );
    const publicationsOptions = () => (
        <div key={'Publications'}>
            <Link to='/publications' className={classes.links}>
                <ListItem button>
                    <ListItemIcon>
                        <ArrowForwardIosIcon fontSize='small' />
                    </ListItemIcon>
                    <ListItemText primary="Publications" style={{color:'#3f51b5',fontWeight:'bold'}} />
                </ListItem>
                <Divider />
            </Link>
        </div>
    );
    const sideList = () => (
        <div
          className={classes.list}
          role="presentation"
        >
          <List className={classes.list}>
            {['About', 'Media', 'Publications', 'Resources'].map((text) => (
                (text === 'About') ? (aboutOptions()) : (text === 'Media') ? (mediaOptions()) : (text === 'Publications') ? (publicationsOptions()) : (text === 'Resources') ? (resourceOptions()) : (
                <div key={text}>
                    <ListItem button key={text}>
                        <ListItemIcon>
                          <ArrowForwardIosIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary={text} style={{color:'#3f51b5'}} />
                    </ListItem>
                    <Divider />
                </div>
                )


            ))}
          </List>
          

        </div>
    );
    return(
        <div>
            {showSide ? (
                <Drawer variant='permanent' anchor='left' classes={{paper:classes.drawerPaper}} className={classes.drawer}>
                    <div className={classes.toolbar} />
                    {sideList()}  
                </Drawer>

            ) : (
                ''
            )}
        </div>
    )
}