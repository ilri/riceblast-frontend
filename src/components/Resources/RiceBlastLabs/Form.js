import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {Alert,AlertTitle} from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LabService from '../../../services/labs';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ReactFlagsSelect from 'react-flags-select';
import FormHelperText from '@material-ui/core/FormHelperText';




const useStyles = makeStyles(theme => ({
    selectCountry: {
      width: '90%',
      border:'1px solid black'
    },
}));

export default function Form({form, openDrawer,handleChange, 
    handleSubmit, onSelect,successMsg}){

    const classes = useStyles();

    return(
        <div>
            <Grid container spacing={3} direction="column" justify="center" alignItems="stretch">
                <Grid container spacing={3}>
 
                    <Grid container item xs={12} spacing={3}>                         
                         {(successMsg) ? 
                             (
                                 <Grid>
 
                                     <Alert severity="success">
                                         {successMsg}
                                     </Alert>
                                 </Grid>
                             ): ''
                         }
                     </Grid> 
 
 



                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={4}>
                            {form.errorMsg.hasOwnProperty('lab_id') ? 
                                (
                                    <Grid>
                                        <Alert severity="error">
                                            <AlertTitle><strong>Lab ID</strong></AlertTitle>                        
                                            {form.errorMsg.lab_id}
                                        </Alert>
                                    </Grid>
                                ): ''
                            }
                        </Grid>
                        <Grid item xs={4}>
                            {form.errorMsg.hasOwnProperty('lab_name') ? 
                                (
                                    <Grid>
                                        <Alert severity="error">
                                            <AlertTitle><strong>Lab Name</strong></AlertTitle>
                                            {form.errorMsg.lab_name}
                                        </Alert>
                                    </Grid>
                                ): ''
                            }
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={4}>
                            {form.errorMsg.hasOwnProperty('institution') ? 
                                (
                                    <Grid>

                                        <Alert severity="error">
                                            <AlertTitle><strong>Institution</strong></AlertTitle>
                                            {form.errorMsg.institution}
                                        </Alert>
                                    </Grid>
                                ): ''
                            }
                        </Grid>
                        <Grid item xs={4}>
                            {form.errorMsg.hasOwnProperty('principal_investigator') ? 
                                (
                                    <Grid>
                                        <Alert severity="error">
                                            <AlertTitle><strong>Principal Investigator</strong></AlertTitle>
                                
                                            {form.errorMsg.principal_investigator}
                                        </Alert>
                                    </Grid>
                                ): ''
                            }
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
            <Grid spacing={3} container direction="column" justify="center" alignItems="stretch" >
                <Grid item xs={9}>
                    <FormControl>

                        <TextField
                            id="outlined-secondary"
                            label="Lab ID"
                            size='small'
                            variant="outlined"
                            color="primary"
                            error={(form.errorMsg.hasOwnProperty('lab_id'))}
                            required={true}
                            name='lab_id'
                            onChange={handleChange}                            
                        />
                         
                        <FormHelperText>{form.errorMsg.lab_id}</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Lab Name"
                        size='small'
                        name='lab_name'
                        error={(form.errorMsg.hasOwnProperty('lab_name'))}

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
                        error={(form.errorMsg.hasOwnProperty('institution'))}                        
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
                        error={(form.errorMsg.hasOwnProperty('principal_investigator'))}

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
                        <Button variant="contained" color='secondary' onClick={openDrawer}>Close</Button>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}