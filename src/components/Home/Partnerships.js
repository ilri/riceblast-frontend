import React, { Component } from "react";
import Home4 from '../../assets/contributors.jpg';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';








const useStyles = makeStyles({
    root:{
        marginTop:15,

    },

    hr: {
      maxWidth: '10%',
    },

    image:{
        height:80,
        width:210,
    },


});


export default function Partnerships(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container spacing={1} className={classes.container}>
            <Grid item xs={12}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={8} 
            
            >            
                <Typography variant='h5' align='center'>PARTNERSHIPS<hr className={classes.hr} /></Typography>
                <Paper elevation={5} style={{paddingTop:30,paddingBottom:30}}>
                    <img src={Home4} height={700} width='100%'></img>
                </Paper>
            </Grid>
            </Grid>        
        </div>
    )
}



















