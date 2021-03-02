import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';

  


 


const useStyles = makeStyles(theme => ({
    
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
}));





export default function Form({form, handleChange, handleSelectChange,openDrawer,handleFileChange,handleSubmit,people,labs}){

    const classes = useStyles();




    return(
        <div>
            <Grid container spacing={3} direction="column" justify="center" alignItems="stretch">
                {form.errorMsg ? 
                    (
                        <Alert severity="error">{form.errorMsg}</Alert>
                    ): ''
                }

            </Grid>
            <Grid spacing={3} container direction="column" justify="center" alignItems="stretch" >



                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Rice GBS Name"
                        size='small'
                        name='rice_gbs_name'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.rice_gbs_name}
                    /> 
                </Grid>

                <Grid item xs={9}>
                    <FormControl className={classes.formControl}>

                        <Autocomplete 
                          id="combo-box-demo"
                          options={people}
                          style={{width:300}}
                          onInputChange={(event,newData) => {
                              let personID = newData.split(": ");                     
                              handleSelectChange('person',personID[0])
                          }}
                          getOptionLabel={(option) => option.pk + ": " + option.full_name  }
                          size='small'
                          renderInput={(params) => <TextField {...params} label="People" variant="outlined" />}
                        /> 
                    </FormControl>                
                </Grid>

                <Grid item xs={9}>
                    <FormControl className={classes.formControl}>

                        <Autocomplete 
                          id="combo-box-demo"
                          options={labs}
                          onInputChange={(event,newData) => {
                              let labID = newData.split(": ");                     
                              handleSelectChange('lab',labID[0])
                          }}
                          getOptionLabel={(option) => option.pk + ": " + option.lab_name  }
                          size='small'
                          style={{width:300}}
                          renderInput={(params) => <TextField {...params} label="Rice Blast Labs" variant="outlined" />}
                        /> 
                    </FormControl>                
                </Grid>

                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="GBS Dataset"
                        size='small'
                        name='gbs_dataset'
                        variant="outlined"
                        color="primary"
                        type='file'
                        required={true}
                        onChange={handleFileChange}

                    /> 
                </Grid>



                <Grid container direction="row" justify='space-between' alignItems='flex-end' xs={9}>
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={handleSubmit}> Submit</Button>
                    </Grid>

                    <Grid item xs={3}>
                        <Button variant="contained" onClick={openDrawer} color='secondary'>Close</Button>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}