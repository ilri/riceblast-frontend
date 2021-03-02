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





export default function Form({form, openDrawer,handleChange, handleSelectChange, handleSubmit,people,handleFileChange,riceGenotypes,labs}){

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
                    <FormControl className={classes.formControl}>

                        <Autocomplete 
                          id="combo-box-demo"
                          options={riceGenotypes}
                          onInputChange={(event,newData) => {
                              let genotypeID = newData.split(": ");                     
                              handleSelectChange('rice_genotype',genotypeID[0])
                          }}
                          getOptionLabel={(option) => option.pk + ": " + option.name  }
                          size='small'
                          style={{width:300}}
                          renderInput={(params) => <TextField {...params} label="Rice Genotypes" variant="outlined" />}
                        /> 
                    </FormControl>                
                </Grid>

                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Taxa Name"
                        size='small'
                        name='taxa_name'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.taxa_name}
                    /> 
                </Grid>



                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Sequence ID"
                        size='small'
                        name='sequence_id'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.sequence_id}
                    /> 
                </Grid>
                {/* CHANGE TO TEXT FIELD */}
                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Description"
                        size='small'
                        name='description'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.description}

                    /> 
                </Grid>


                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Sequence Data"
                        size='small'
                        name='sequence_data'
                        variant="outlined"
                        color="primary"
                        type='file'
                        inputProps= {{accept:"text/plain,.fasta"}}
                        required={true}
                        onChange={handleFileChange}

                    /> 
                </Grid>




                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Chromosome ID"
                        size='small'
                        name='chromosome_id'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.chromosome_id}
                    /> 
                </Grid>

                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Chromosome Site ID"
                        size='small'
                        name='chromosome_site_id'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.chromosome_site_id}

                    /> 
                </Grid>    

                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Loci ID"
                        size='small'
                        name='loci_id'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.loci_id}

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
                        label="Target Gene"
                        size='small'
                        name='target_gene'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.target_gene}

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