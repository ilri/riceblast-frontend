import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LabService from '../../../services/labs';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ReactFlagsSelect from 'react-flags-select';




const useStyles = makeStyles(theme => ({
    selectCountry: {
      width: '90%',
      border:'1px solid black'
    },
}));

export default function Form({form, handleChange, handleSubmit, onSelect}){

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
                        label="Lab ID"
                        size='small'
                        variant="outlined"
                        color="primary"
                        required={true}
                        name='lab_id'
                        onChange={handleChange}


                    /> 
                </Grid>

                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Lab Name"
                        size='small'
                        name='lab_name'
                        variant="outlined"
                        color="primary"
                        required={true}
                        value={form.lab_name}
                        onChange={handleChange}

                    /> 
                </Grid>

                <Grid item xs={9}>
                    <ReactFlagsSelect
                        defaultCountry='KE'
                        searchable={true}
                        selectedSize={15}
                        className={classes.selectCountry}
                        name='country'
                        onSelect={code => onSelect(code)}
                    /> 
                </Grid>

                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Institution"
                        size='small'
                        name='institution'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.institution}
                    /> 
                </Grid>

                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Principal Investigator"
                        size='small'
                        name='principal_investigator'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.principal_investigator}

                    /> 
                </Grid>

                <Grid container direction="row" justify='space-between' alignItems='flex-end' xs={9}>
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={handleSubmit}> Submit</Button>
                    </Grid>

                    <Grid item xs={3}>
                        <Button variant="contained" >Close</Button>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}