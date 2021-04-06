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
import w_1 from '../../../assets/factsheets/weeds/Barnyard_grass.pdf';
import w_2 from '../../../assets/factsheets/weeds/Red_Sprangletop.pdf';
import w_3 from '../../../assets/factsheets/weeds/Bermuda_grass.pdf';
import w_4 from '../../../assets/factsheets/weeds/Striga1.pdf';
import w_5 from '../../../assets/factsheets/weeds/Broad-leaf_weeds.pdf';
import w_6 from '../../../assets/factsheets/weeds/Water_lettuce1.pdf';
import w_7 from '../../../assets/factsheets/weeds/Wood_sorrels.pdf';
import w_8 from '../../../assets/factsheets/weeds/Billy_goat_weed1.pdf';
import w_9 from '../../../assets/factsheets/weeds/Purslane1.pdf';
import w_10 from '../../../assets/factsheets/weeds/Broad-leaf_weed_management1.pdf';
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


export default function Weeds(props){
    const classes = useStyles();
    const weeds = [
        [w_1, 'Barnyard Grass '],
        [w_2, 'Red Sprangletop'],
        [w_3, 'Bermuda Grass'],
        [w_4, 'Striga'],
        [w_5, 'Water Hyacinth'],
        [w_6, 'Water Lettuce'],
        [w_7, 'Wood Sorrels'],
        [w_8, 'Billy Goat Weed '],
        [w_9, 'Purslane'],
        [w_10, 'Broad leaf management'],

    ];

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
                      <Typography className={classes.heading}>Weeds</Typography>
                      <Divider />
                    </ExpansionPanelSummary>

                    {weeds.map((weed, index) => (
                    <ExpansionPanelDetails key={index + 1}>
                        <Typography>
                        <Link href={`#${weed[1]}`}
                            id={`${weed[1]}`} 
                            onClick={props.handleDownload(weed[0], `${weed[1]}.pdf`)}>
                            {weed[1]}
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