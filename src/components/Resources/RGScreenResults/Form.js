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
import RiceGenotypeServices from '../../../services/riceGenotype';
import RiceGeneService from '../../../services/riceGene';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { FindInPageOutlined } from '@material-ui/icons';




const riceGeneService = new RiceGeneService();
const genotypeService = new RiceGenotypeServices();


const useStyles = makeStyles(theme => ({
    
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
}));





export default function Form({form, handleChange, handleSelectChange,openDrawer,handleSubmit}){
    const [riceGenotypes, setRiceGenotypes] = useState([]);
    const [genes, setGenes] = useState([]);

    const classes = useStyles();

    React.useEffect(() =>{
        getGenotypes();
        getRiceGenes();
    },[]);

    const getGenotypes = () => {
        genotypeService.getRiceGenotypes().then(
          response => {
            setRiceGenotypes(response.data);
            console.log(response.data);
          }
        ).catch(
          error => console.log(error)
        );
    };
    const getRiceGenes = () => {
        riceGeneService.getRiceGenes().then(response => {
            console.log(response.data);
            setGenes(response.data);
        }).catch(errors => console.log(errors));
    };

    
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
                    <FormControl className={classes.formControl}>


                        <Autocomplete 
                          id="combo-box-demo"
                          options={genes}
                          style={{width:300}}
                          onInputChange={(event,newData) => {
                              let geneID = newData.split(": ");                     
                              handleSelectChange('rice_gene',geneID[0])
                          }}
                          getOptionLabel={(option) => option.pk + ": " + option.name  }
                          size='small'
                          renderInput={(params) => <TextField {...params} label="Rice Genes" variant="outlined" />}
                        /> 
                    </FormControl>                
                </Grid>

                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="PCR Results"
                        size='small'
                        name='pcr_results'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.pcr_results}
                    /> 
                </Grid>

                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Replicate ID"
                        size='small'
                        name='replicate_id'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.replicate_id}

                    /> 
                </Grid>


                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Sample ID"
                        size='small'
                        name='sample_id'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.sample_id}

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