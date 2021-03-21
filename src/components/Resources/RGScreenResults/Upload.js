import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Message} from 'semantic-ui-react';


export default function Upload(
    {handleFileUpload,pathotyping_results,progressBar,success,error,closeMessage}
    ){
    return(

    <Grid item xs={9}>

        {(success ? (
          <Message color='green' onDismiss={()=> closeMessage('success')}>{success}</Message>
        ): '' )}

        {(error ? (
          <Message color='red' onDismiss={()=> closeMessage('error')}>{error}</Message>
        ): '' )}

        <TextField
            id="outlined-secondary"
            size='small'
            name='upload_rgs'
            variant="outlined"
            color="primary"
            type='file'
            required={true}
            value={pathotyping_results}
            disabled={progressBar}
            onChange={handleFileUpload}
            inputProps={{accept:'.xls,.xlsx,.csv'}}

        /> 

        {progressBar ? (
            <Grid 
                container
                direction='column'
                justify='center'
                alignItems='center'
            >
                <CircularProgress />
                <h4>Uploading file. Please wait....</h4>
            </Grid>
        ):''}

    </Grid>
    )
}
