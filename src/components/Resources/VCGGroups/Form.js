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
import PeopleService from '../../../services/people';
import LabService from '../../../services/labs';
import Autocomplete from '@material-ui/lab/Autocomplete';




const labService = new LabService();


const peopleService = new PeopleService();


const useStyles = makeStyles(theme => ({
    
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
}));





export default function Form({form, handleChange,openDrawer, handleSelectChange, handleSubmit}){
    const [people,setPeople] = useState([]);
    const [labs,setLabs] = useState([]);

    
    const classes = useStyles();

    React.useEffect(() =>{
        getLabs();
        getPeople();
    },[]);


    const getLabs = () => {
        labService.getLabs().then(response => {
            console.log(response.data);
            setLabs(response.data);
        }).catch(errors => console.log(errors));
    };
  
    const getPeople = () => {
      peopleService.getData().then(
        response => {
          setPeople(response.data);
          console.log(response.data);
        }
      ).catch(
        error => console.log(error)
      );
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
                    <TextField
                        id="outlined-secondary"
                        label="Group"
                        size='small'
                        name='group'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.group}
                    /> 
                </Grid>



                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="VCG ID"
                        size='small'
                        name='vcg_id'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.vcg_id}
                    /> 
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

