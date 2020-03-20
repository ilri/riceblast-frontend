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
import ph_1 from '../../../assets/factsheets/postharvest/Red_Flour_Beetles.pdf';
import ph_2 from '../../../assets/factsheets/postharvest/Larger_Grain_Borer.pdf';
import ph_3 from '../../../assets/factsheets/postharvest/Angoumois_Grain_Moth.pdf';
// import ph_4 from '../../../assets/factsheets/postharvest/.pdf';
import ph_5 from '../../../assets/factsheets/postharvest/pe-harvest1.pdf';
import ph_6 from '../../../assets/factsheets/postharvest/Harvesting.pdf';
import ph_7 from '../../../assets/factsheets/postharvest/Rice_Postharvest_Handling.pdf';
import ph_8 from '../../../assets/factsheets/postharvest/Rice_Storage.pdf';
import ph_9 from '../../../assets/factsheets/postharvest/Rice_Milling.pdf';
import ph_10 from '../../../assets/factsheets/postharvest/Rice_Value_Addition.pdf';
import ph_11 from '../../../assets/factsheets/postharvest/Pre-and_Postharvest_Management.pdf';



const useStyles = makeStyles(theme => ({
    root: {
      marginTop:150,
    },
    heading: {
      fontSize: theme.typography.pxToRem(19),
      fontWeight: theme.typography.fontWeightRegular,
    },
}));


export default function PostHarvest(props){
    const classes = useStyles();

    const phs = [
        [ph_1,'Red Flour Beetles'],
        [ph_2,'Large Grain Borer'],
        [ph_3,'Angoumois Grain Moth'],
        // [ph_4,'Rice Weevil'],
        [ph_5,'Pre-harvest Management'],
        [ph_6,'Harvesting of Rice'],
        [ph_7,'Postharvest Handling'],
        [ph_8,'Rice Storage'],
        [ph_9,'Rice Milling'],
        [ph_10,'Value_Addition'],
        [ph_11,'Pre & Postharvest Management'],        
    ]

    return(
        <div>            
            <div className={classes.root}>
            <Container fixed>
                <ExpansionPanel expanded={true}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>Post Harvest</Typography>
                      <Divider />
                    </ExpansionPanelSummary>

                    {phs.map((ph,index)=>(
                    <ExpansionPanelDetails key={index + 1}>
                        <Typography>
                        <Link href={`#${ph[1]}`}
                            id={`${ph[1]}`} 
                            onClick={props.handleDownload(ph[0], `${ph[1]}.pdf`)}>
                            {ph[1]}
                        </Link>
                        </Typography>
                    </ExpansionPanelDetails>                        
                    ))}                                 

                  </ExpansionPanel>
            </Container>
            </div>
        </div>
    );
}


