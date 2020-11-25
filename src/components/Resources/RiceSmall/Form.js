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

  





const useStyles = makeStyles(theme => ({
    
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
}));





export default function Form({form, handleChange, handleSubmit,people,handleFileChange,riceGenotypes,labs}){

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

                        <Select
                          displayEmpty
                          name='rice_genotype'
                          value={form.rice_genotype}
                          onChange={handleChange}
                          input={<Input />}
                          inputProps={{ 'aria-label': 'Without label' }}
                          renderValue={(selected) => {
                            if (!selected) {
                              return <em>Rice Genotype</em>;
                            }
                        }}
                        >
                          <MenuItem disabled value="">
                            <em>Rice Genotype</em>
                          </MenuItem>
                          {riceGenotypes.map((genotype,i) => (
                            <MenuItem key={i} value={genotype.pk} >
                              {genotype.name}
                            </MenuItem>
                          ))}
                        </Select>
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

                        <Select
                          displayEmpty
                          name='person'
                          value={form.person}
                          onChange={handleChange}
                          input={<Input />}
                          inputProps={{ 'aria-label': 'Without label' }}
                          renderValue={(selected) => {
                            if (!selected) {
                              return <em>Person</em>;
                            }
                        }}
                        >
                          <MenuItem disabled value="">
                            <em>Person</em>
                          </MenuItem>

                          {people.map((person,i) => (
                            <MenuItem key={i} value={person.pk} >
                              {person.full_name}
                            </MenuItem>
                          ))}

                        </Select>
                    </FormControl>                
                </Grid>

                <Grid item xs={9}>
                    <FormControl className={classes.formControl}>

                        <Select
                          displayEmpty
                          name='lab'
                          value={form.lab}
                          onChange={handleChange}
                          input={<Input />}
                          inputProps={{ 'aria-label': 'Without label' }}
                          renderValue={(selected) => {
                            if (!selected) {
                              return <em>Labs</em>;
                            }
                        }}
                        >
                          <MenuItem disabled value="">
                            <em>Labs</em>
                          </MenuItem>
                          {labs.map((lab,i) => (
                            <MenuItem key={i} value={lab.pk} >
                              {lab.lab_name}
                            </MenuItem>
                          ))}
                        </Select>
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
                        <Button variant="contained" >Close</Button>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}