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
import pd_1 from '../../../assets/factsheets/pd/nitrogen_deficiency1.pdf';
import pd_2 from '../../../assets/factsheets/pd/Phosphorus_Deficiency2.pdf';
import pd_3 from '../../../assets/factsheets/pd/Potassium_deficiency1.pdf';
import pd_4 from '../../../assets/factsheets/pd/Silicon.pdf';
import pd_5 from '../../../assets/factsheets/pd/iron_deficiency1.pdf';
import pd_6 from '../../../assets/factsheets/pd/Sulphur.pdf';
import pd_7 from '../../../assets/factsheets/pd/magnesium.pdf';
import pd_8 from '../../../assets/factsheets/pd/iron_toxicity.pdf';
import pd_9 from '../../../assets/factsheets/pd/zinc_deficiency.pdf';
import pd_10 from '../../../assets/factsheets/pd/copper.pdf';
import pd_11 from '../../../assets/factsheets/pd/manganese.pdf';
import pd_12 from '../../../assets/factsheets/pd/drough_water.pdf';
import pd_13 from '../../../assets/factsheets/pd/salinity_stress.pdf';
import pd_14 from '../../../assets/factsheets/pd/cold_demage1.pdf';
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


export default function PhysiologicalDisorders(props){
    const classes = useStyles();
    const pds = [
        [pd_1,'Nitrogen Deficiency'],
        [pd_2,'Phosphorus Deficiency'],
        [pd_3, 'Potassium Deficiency'],
        [pd_4, 'Silicon Deficiency'],
        [pd_5, 'Iron Deficiency'],
        [pd_6, 'Sulphur Deficiency '],
        [pd_7, 'Magnesium Deficiency'],
        [pd_8, 'Iron Toxicity'],
        [pd_9, 'Zinc Deficiency'],
        [pd_10, 'Copper Deficiency'],
        [pd_11, 'Manganese Deficiency'],
        [pd_12, 'Drought (water) Stress'],
        [pd_13, 'Salinity Stress Damage '],
        [pd_14, 'Cold Damage'],
    ]

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
                      <Typography className={classes.heading}>Physiological Disorders</Typography>
                      <Divider />
                    </ExpansionPanelSummary>

                    {pds.map((pd, index)=>(
                        <ExpansionPanelDetails key={index + 1}>
                            <Typography>
                            <Link href={`#${pd[1]}`}
                                id={`${pd[1]}`} 
                                onClick={props.handleDownload(pd[0], `${pd[1]}.pdf`)}>
                                {pd[1]}
                            </Link>
                            </Typography>

                        </ExpansionPanelDetails>                        
                    ))}

                                
                  </ExpansionPanel>
                  </Paper>
            </Container>
            </div>
        </div>
    );
}