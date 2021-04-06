import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import contributor1 from '../../assets/BecA.png';
import contributor2 from '../../assets/theohiostateuniversity-logo.jpg';
import contributor3 from '../../assets/inera-logo.png';
import contributor4 from '../../assets/karlo-logo.png';
import contributor5 from '../../assets/tsl.png';
import contributor6 from '../../assets/beca-logo.png';
import contributor7 from '../../assets/universityofexeter-logo1.png';
import contributor8 from '../../assets/africa-rice.png';
import contributor9 from '../../assets/IRRI-logo.svg';
import contributor10 from '../../assets/uoa.png';
import contributor11 from '../../assets/ohio.png';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root:{
        marginTop:15,
    },

    hr: {
      maxWidth: '10%',
    },
    wrappper:{
        backgroundColor: 'white', 
        height: '20vh',
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        flexWrap:'wrap',
        padding:50,
    },
    image:{
        height:80,
        width:210,
    },
    bioImage:{
        height:80,
        width:350,
    },
    uoeImage:{
        height:110,
        width:150,   
    }

});


export default function Contributors(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container spacing={1} className={classes.container}>
            <Grid item xs={12}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>            
                <Typography variant='h5' align='center'>CONTRIBUTORS<hr className={classes.hr} /></Typography>
                <Paper elevation={3}> 
                    <GridList cellHeight={150} className={classes.gridList} cols={3}>
                    {[contributor6,contributor4,contributor5,contributor7,
                    contributor3,contributor8,contributor9,contributor10,contributor11]
                    .map((image,index)=>(
                        <GridListTile key={index} cols={(image == contributor6) ? 3:(index == 2 ) ? 2 : 1} cellHeight='auto'>
                          <img src={image} alt={image} />
                        </GridListTile>

                    ))}
                    </GridList>
                </Paper>

                <Grid item xs={2}></Grid>

            </Grid>
            </Grid>        
        </div>
    )
}