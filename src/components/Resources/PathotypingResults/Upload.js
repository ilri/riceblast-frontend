import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';



export default function Upload({handleFileUpload}){
    return(

    <Grid item xs={9}>
        <TextField
            id="outlined-secondary"
            size='small'
            name='gbs_dataset'
            variant="outlined"
            color="primary"
            type='file'
            required={true}
            onChange={handleFileUpload}

        /> 
    </Grid>
    )
}