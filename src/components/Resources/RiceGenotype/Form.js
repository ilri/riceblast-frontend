import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const useStyles = makeStyles(theme => ({
    
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
}));

export default function Form({form, handleChange, openDrawer,handleSubmit}){

    const classes = useStyles();
    const catogoryChoices = [
        ['released_variety','Released Variety'],
        ['microgenic_line','Microgenic Line'],
        ['interspecific_variety','Interspecific Variety'],
        ['introgession_line', 'Introgession Line'],
        ['adapted_african_cultiva', 'Adapted African Cultiva'], 
    ]
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
                        label="Name"
                        size='small'
                        variant="outlined"
                        color="primary"
                        required={true}
                        name='name'
                        onChange={handleChange}


                    /> 
                </Grid>

                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Rice Genotype ID"
                        size='small'
                        name='rice_genotype_id'
                        variant="outlined"
                        color="primary"
                        required={true}
                        value={form.rice_genotype_id}
                        onChange={handleChange}

                    /> 
                </Grid>


                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Resistance Genes"
                        size='small'
                        name='resistance_genes'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.resistance_genes}
                    /> 
                </Grid>

                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="R Gene Sources"
                        size='small'
                        name='r_gene_sources'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.r_gene_sources}

                    /> 
                </Grid>


                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Susceptible Background"
                        size='small'
                        name='susceptible_background'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.susceptible_background}

                    /> 
                </Grid>

                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Accession Number"
                        size='small'
                        name='accession_number'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.accession_number}

                    /> 
                </Grid>


                <Grid item xs={9}>
                    <TextareaAutosize
                        id="outlined-secondary"
                        placeholder="Pedigree"
                        size='small'
                        rowsMin={7}
                        name='pedigree'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.pedigree}

                    /> 
                </Grid>

                <FormControl className={classes.formControl}>

                    <Select
                      displayEmpty
                      name='category'
                      value={form.catogory}
                      onChange={handleChange}
                      input={<Input />}
                      inputProps={{ 'aria-label': 'Without label' }}
                      renderValue={(selected) => {
                        if (!selected) {
                          return <em>Category</em>;
                        }
                    }}
                    >
                      <MenuItem disabled value="">
                        <em>Category</em>
                      </MenuItem>
                      {catogoryChoices.map((name,i) => (
                        <MenuItem key={i} value={name[0]} >
                          {name[1]}
                        </MenuItem>
                      ))}
                    </Select>

                </FormControl>


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