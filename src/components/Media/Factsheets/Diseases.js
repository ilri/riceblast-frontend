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
import agro_1 from '../../../assets/factsheets/diseases/Bacterial_blight1.pdf';
import agro_2 from '../../../assets/factsheets/diseases/Bakanae_Disease_of_Rice2.pdf';
import agro_3 from '../../../assets/factsheets/diseases/Brown_Spot1.pdf';
import agro_4 from '../../../assets/factsheets/diseases/False_smut2.pdf';
import agro_5 from '../../../assets/factsheets/diseases/Leaf_Scald1.pdf';
import agro_6 from '../../../assets/factsheets/diseases/Rice_blast3.pdf';
import agro_7 from '../../../assets/factsheets/diseases/rice_sheath.pdf';
import agro_8 from '../../../assets/factsheets/diseases/Rice_Yellow_Mottle_Virus1.pdf';
import agro_9 from '../../../assets/factsheets/diseases/Sheath_blight1.pdf';
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


export default function Diseases(props){
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
                      <Typography className={classes.heading}>Diseases</Typography>
                      <Divider />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        <Link href='#riceblast' onClick={props.handleDownload(agro_6,'Diseases_Rice_Blast.pdf')}>
                          Rice Blast
                        </Link>                        
                      </Typography>
                    </ExpansionPanelDetails>

                    <Divider />

                    <ExpansionPanelDetails>
                      <Typography>
                        <Link href='#ricesheat' 
                        onClick={props.handleDownload(agro_7,'Diseases_Rice_Sheath.pdf')}>
                        Rice Sheath Rot
                        </Link> 
                        
                      </Typography>
                    </ExpansionPanelDetails>

                    <ExpansionPanelDetails>
                      <Typography>
                      <Link href='#bakanae' onClick={props.handleDownload(agro_2,'Diseases_Bakanae_Disease_of_Rice.pdf')}>
                      Bakanae Disease of Rice
                      </Link> 
                        
                      </Typography>
                    </ExpansionPanelDetails>

                    <ExpansionPanelDetails>
                      <Typography>
                      <Link href='#riceyellow' 
                      onClick={props.handleDownload(agro_8,'Rice_Yellow_Mottle_Virus.pdf')}>
                      Rice Yellow Mottle Virus
 
                      </Link>                        
                      </Typography>
                    </ExpansionPanelDetails>

                    <ExpansionPanelDetails>
                      <Typography>                       
                      <Link href='#blight' 
                      onClick={props.handleDownload(agro_1,'Diseases_Bacterial_Blight.pdf')}>
                      Bacterial Blight
                      </Link> 
                      </Typography>

                    </ExpansionPanelDetails>

                    <ExpansionPanelDetails>
                      <Typography>
                      <Link href='#brownspot' 
                      onClick={props.handleDownload(agro_3,'Diseases_Brown_Spot.pdf')}>
                      Brown Spot
 
                      </Link>                    
                      </Typography>
                    </ExpansionPanelDetails>

                    <ExpansionPanelDetails>
                      <Typography>
                        
                      <Link href='#sheathblight' 
                      onClick={props.handleDownload(agro_9,'Sheath_Blight.pdf')}>
                      Sheath Blight

                      </Link> 
                      </Typography>

                    </ExpansionPanelDetails>
                    
                    <ExpansionPanelDetails>
                      <Typography>
                          
                        <Link href='#falsesmut' 
                        onClick={props.handleDownload(agro_4,'False_Smut.pdf')}>
                        False Smut

                        </Link> 

                        <Link href='#leafscald' 
                        onClick={props.handleDownload(agro_5,'Leaf_Scald.pdf')}>
                        Leaf Scald 

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