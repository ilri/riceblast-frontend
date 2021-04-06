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
import agro_1 from '../../../assets/factsheets/pests/African_rice_gall_midge2.pdf';
import agro_2 from '../../../assets/factsheets/pests/Fall_armyworm2.pdf';
import agro_4 from '../../../assets/factsheets/pests/Pink_stem_borer.pdf';
import agro_5 from '../../../assets/factsheets/pests/Rice_Aster_Leafhopper1.pdf';
import agro_6 from '../../../assets/factsheets/pests/Rice_caseworm.pdf';
import agro_7 from '../../../assets/factsheets/pests/Rice_leaf_folders.pdf';
import agro_8 from '../../../assets/factsheets/pests/Rice_Leafminer1.pdf';
import agro_9 from '../../../assets/factsheets/pests/Rice_root_knot_nematodes.pdf';
import agro_10 from '../../../assets/factsheets/pests/Rice_white_tip_nematode.pdf';
import agro_11 from '../../../assets/factsheets/pests/Rice_whorl_maggots.pdf';
import agro_12 from '../../../assets/factsheets/pests/Spotted_stem_borer1.pdf';
import agro_13 from '../../../assets/factsheets/pests/white_rice_stem_borer.pdf';
import agro_14 from '../../../assets/factsheets/pests/Stalk-eyed_fly2.pdf';
import agro_15 from '../../../assets/factsheets/pests/The_African_armyworm1.pdf';
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


export default function Pests(props){
    const classes = useStyles();

    const pests = [
        [agro_4, 'Pink Stem Borer'],
        [agro_12, 'Spotted Stem Borer'],
        [agro_13,' White Rice Stem Borer'],
        [agro_15,'The African armyworm '],
        [agro_2,'Fall Armyworm '],
        [agro_14,'Stalk-eyed fly'],
        [agro_7,'Rice leaf folders'],
        [agro_11,'Rice whorl maggots'],
        [agro_5,'Rice Aster Leafhopper'],
        [agro_8,'Rice Leafminer'],
        [agro_1,'African rice gall midge'],
        [agro_6, 'Rice caseworm '],
        [agro_9, 'Rice root knot nematodes'],
        [agro_10,'Rice white tip nematode '],
    
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
                      <Typography className={classes.heading}>Pests</Typography>
                      <Divider />
                    </ExpansionPanelSummary>

                {pests.map((pest,index) => (
                    <ExpansionPanelDetails key={index + 1}>
                        <Typography>
                        <Link href={`#${pest[1]}`}
                            id={`${pest[1]}`} 
                            onClick={props.handleDownload(pest[0], `${pest[1]}.pdf`)}>
                            {pest[1]}
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