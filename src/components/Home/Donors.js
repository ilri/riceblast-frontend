import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import donor1 from '../../assets/ukaid-dfid-logo.jpg';
import donor2 from '../../assets/bgmf.png';
import donor3 from '../../assets/DFID.gif';
import donor4 from '../../assets/bbsrc-logo.png';
import contributor11 from '../../assets/ohio.png';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root:{
        marginTop:20,
        marginBottom:20,
    },
    hr: {
      maxWidth: '5%',
    },
    wrappper:{
        backgroundColor: 'white', 
        height: '15vh',
        display:'flex',
        justifyContent:'space-between',
        padding:50,
    },
    image:{
        height:100,
        width:200,
    },
    imageDonor4:{
        height:80,
        width:200,
    },
});


export default function Donors(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container spacing={1} className={classes.container}>
            <Grid item xs={12}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>                
            <Typography variant='h5' align='center'>DONORS<hr className={classes.hr} /></Typography>
                <Paper elevation={3}> 
                    <GridList cellHeight={150} className={classes.gridList} cols={2}>                    
                    {[donor1,donor2,donor3,donor4]
                    .map((image,index)=>(
                        <GridListTile key={index} cols={1} cellHeight='auto'>
                          <img src={image} alt={image} />
                        </GridListTile>

                    ))}
                    </GridList>
                </Paper>            
            </Grid>
            <Grid item xs={2}></Grid>

            </Grid>
        </div>
    )
}