import React from 'react';
import { makeStyles,useState } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Divider from '@material-ui/core/Divider';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import agro_1 from '../../../assets/factsheets/agronomy/AgronomyCropEstablishement.pdf';
import agro_2 from '../../../assets/factsheets/agronomy/agro_suitability_map.pdf';
import agro_3 from '../../../assets/factsheets/agronomy/nursery_establishement.pdf';
import agro_4 from '../../../assets/factsheets/agronomy/site_selection.pdf';
import agro_5 from '../../../assets/factsheets/agronomy/planting_seedlings.pdf';
import agro_6 from '../../../assets/factsheets/agronomy/Weeding.pdf';
import agro_7 from '../../../assets/factsheets/agronomy/Bird_Scaring.pdf';
import agro_8 from '../../../assets/factsheets/agronomy/bbsrc_varieties_kenya.pdf';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles(theme => ({
    root: {
      marginTop:50,
    },
    heading: {
      fontSize: theme.typography.pxToRem(19),
      fontWeight: theme.typography.fontWeightRegular,
    },
}));


export default function Agronomy(props){
    const classes = useStyles();

    return(
        <div>            
            <div className={classes.root}>
            <Container fixed>
              <Paper elevation={5}>
                <ExpansionPanel expanded={true}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>Agronomy</Typography>
                      <Divider />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        <Link href='#crop' onClick={props.handleDownload(agro_1,'Agronomy_Crop_ Establishment.pdf')}>
                          Crop Establishment
                        </Link>                        
                      </Typography>
                    </ExpansionPanelDetails>

                   

                    <ExpansionPanelDetails>
                      <Typography>
                        <Link href='#maps' onClick={props.handleDownload(agro_2,'Agronomy_Suitability_Maps.pdf')}>
                        Suitability Maps
                        </Link> 
                        
                      </Typography>
                    </ExpansionPanelDetails>

                    <ExpansionPanelDetails>
                      <Typography>
                      <Link href='#nursery' onClick={props.handleDownload(agro_3,'Agronomy_Nursery_Establishement.pdf')}>
                      Nursery Establishement
                      </Link> 
                        
                      </Typography>
                    </ExpansionPanelDetails>

                    <ExpansionPanelDetails>
                      <Typography>
                      <Link href='#sites' onClick={props.handleDownload(agro_4,'Agronomy_Site_Selection_and_Land_Preparation.pdf')}>
                        Site Selection and Land Preparation 
                      </Link>                        
                      </Typography>
                    </ExpansionPanelDetails>

                    <ExpansionPanelDetails>
                      <Typography>                       
                      <Link href='#seedlings' onClick={props.handleDownload(agro_5,'Agronomy_Planting_Seedlings.pdf')}>
                        Plant the Seedlings
                      </Link> 
                      </Typography>

                    </ExpansionPanelDetails>

                    <ExpansionPanelDetails>
                      <Typography>
                      <Link href='#weeding' onClick={props.handleDownload(agro_6,'Agronomy_Weeding_Practices.pdf')}>
                      Weeding Practices 
                      </Link>                    
                      </Typography>
                    </ExpansionPanelDetails>

                    <ExpansionPanelDetails>
                      <Typography>
                        
                      <Link href='#birdscaring' onClick={props.handleDownload(agro_7,'Agronomy_Bird_Scaring.pdf')}>
                        Bird Scaring
                      </Link> 
                      </Typography>

                    </ExpansionPanelDetails>
                    
                    <ExpansionPanelDetails>
                      <Typography>
                          
                        <Link href='#bbsrc' onClick={props.handleDownload(agro_8,'Agronomy_BBSRC_Varieties_kenya.pdf')}>
                        BBSRC Varieties in Kenya
                        </Link> 
                      </Typography>
                    </ExpansionPanelDetails>                                        

                  </ExpansionPanel>
                </Paper>
            </Container>
            </div>
        </div>
    );
}