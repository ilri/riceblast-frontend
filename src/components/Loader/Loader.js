import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import LinearProgress from '@material-ui/core/LinearProgress';


export default function Loader({load}){
    return(
        <Fade in={load}>
            <LinearProgress variant="query" />
        </Fade>
    )
}