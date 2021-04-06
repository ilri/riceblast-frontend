import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Typography from '@material-ui/core/Typography';
import {NavLink} from 'react-router-dom';

const drawerWidth = 170;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawerResource: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaperResource: {
    width: drawerWidth, 
  },
  list: {
    marginTop:80,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  link:{
    textDecoration:'none',
  },
  toolbar: theme.mixins.toolbar,

}));

const resourceOptions = [
  //['SIDEBAR TEXT','PATH URL']

    ['Rice Blast Labs','/resources/labs'],
    ['Fungal Site Collection','/resources/sites'],
    ['Isolates','/resources/isolates'],
    ['Rice Genotype','/resources/rice_genotypes'],
    ['Rice Genes','/resources/rice_genes'],
    ['Rice Gene Screen Results','/resources/rice_gene_screen_results'],
    ['Fungal Gene Screen Results','/resources/fungal_gene_screen_results'],
    ['Pathotyping Results','/resources/pathotyping_results'],
    ['VCG Groups', '/resources/vcg_groups'],
    ['Fungal DNA Amplicon Sequence', '/resources/fungal_dna_amplicon_sequence'],
    ['Rice DNA Amplicon Sequence','/resources/rice_dna_amplicon_sequence'],
    ['VCG Test Results','/resources/vcg_test_results'],
    ['Protocol','/resources/protocols'],
    ['Rice GBS','/resources/rice_gbs'],
    ['Fungal GBS','/resources/fungal_gbs'],
]

export default function ResourceSidebar(props){
    const classes = useStyles();
    const [active,setActive] = React.useState('');
    React.useEffect(()=>{
      // const {props:{props:{props:location}}}=props;
      setActive(props.props.props.location.pathname)

    })

    return(

        <div>
            <Drawer
                className={classes.drawerResource}
                variant="permanent"
                classes={{
                  paper: classes.drawerPaperResource,
                }}
            >
                <List className={classes.list}>
                    <NavLink to='/resources/people' 
                    className={classes.link} active
                    activeStyle={{
                      fontWeight: "bold",
                      fontSize:'16px',
                      color: "black",
                    }}
                    >                        
                        <ListItem button style={{backgroundColor:(active === '/resources/people' ? '#f5f4f4': 'none')}} divider>
                          <ListItemText primary='People' />
                        </ListItem>
                    </NavLink>  

                    {resourceOptions.map((option, index) => (
                      <NavLink to={option[1]} className={classes.link} key={index + 1}
                      activeStyle={{
                        fontWeight: "bold",
                        fontSize:'16px',
                        color: "black",
                      }}
                      >                        
                        <ListItem button style={{backgroundColor:(active === option[1] ? '#f5f4f4': 'none')}} divider>
                          <ListItemText primary={option[0]} />
                        </ListItem>
                      </NavLink>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}