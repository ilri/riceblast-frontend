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
import IsolatesService from '../../../services/isolates';
import PeopleService from '../../../services/people';
import LabService from '../../../services/labs';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers/';
import DateFnsUtils from '@date-io/date-fns';



const labService = new LabService();
const genotypeService = new RiceGenotypeServices();
const isolatesService = new IsolatesService();
const peopleService = new PeopleService();

const useStyles = makeStyles(theme => ({
    
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
}));





export default function Form({form, handleChange, handleDateChange, handleSubmit}){
    const [riceGenotypes, setRiceGenotypes] = useState([]);
    const [isolates, setIsolates] = useState([]);
    const [people,setPeople] = React.useState([]);
    const [labs,setLabs] = useState([]);
    const classes = useStyles();

    React.useEffect(() =>{
        getGenotypes();
        getPeople();
        getIsolates();
        getLabs();
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



    const getIsolates = () => {
        isolatesService.getIsolates().then(response => {
            console.log(response.data);
            setIsolates(response.data);
        }).catch(errors => console.log(errors));
    };

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

                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Stock ID"
                        size='small'
                        name='stock_id'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.stock_id}
                    /> 
                </Grid>



                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around"> 
                        <KeyboardDatePicker
                          margin="normal"
                          id="date-picker-collected"
                          label="Date Inoculated"
                          format="MM/dd/yyyy"
                          name='date_inoculated'
                          value={form.date_inoculated}
                          onChange={(data) => handleDateChange('date_inoculated',data)}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around"> 
                        <KeyboardDatePicker
                          margin="normal"
                          id="date-picker-collected"
                          label="Date Planted"
                          format="MM/dd/yyyy"
                          name='date_planted'
                          value={form.date_collected}
                          onChange={(data) => handleDateChange('date_planted',data)}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around"> 
                        <KeyboardDatePicker
                          margin="normal"
                          id="date-picker-collected"
                          label="Date Scored"
                          format="MM/dd/yyyy"
                          name='date_scored'
                          value={form.date_scored}
                          onChange={(data) => handleDateChange('date_scored',data)}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>



                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Disease Score"
                        size='small'
                        name='disease_score'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.disease_score}
                    /> 
                </Grid>


                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Test"
                        size='small'
                        name='test'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.test}
                    /> 
                </Grid>

                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Tray"
                        size='small'
                        name='tray'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.tray}
                    /> 
                </Grid>

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
                    <FormControl className={classes.formControl}>

                        <Select
                          displayEmpty
                          name='isolate'
                          value={form.isolate}
                          onChange={handleChange}
                          input={<Input />}
                          inputProps={{ 'aria-label': 'Without label' }}
                          renderValue={(selected) => {
                            if (!selected) {
                              return <em>Isolate</em>;
                            }
                        }}
                        >
                          <MenuItem disabled value="">
                            <em>Isolate</em>
                          </MenuItem>
                          {isolates.map((isolate,i) => (
                            <MenuItem key={i} value={isolate.pk} >
                              {isolate.name}
                            </MenuItem>
                          ))}
                        </Select>
                    </FormControl>                
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
                              return <em>People</em>;
                            }
                        }}
                        >
                          <MenuItem disabled value="">
                            <em>People</em>
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