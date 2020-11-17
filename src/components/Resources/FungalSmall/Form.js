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
import PeopleService from '../../../services/people';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers/';
import DateFnsUtils from '@date-io/date-fns';

  


const peopleService = new PeopleService();

const useStyles = makeStyles(theme => ({
    
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
}));





export default function Form({form, handleChange, handleDateChange, handleSubmit}){
    const [people, setPeople] = useState([]);

    const classes = useStyles();

    React.useEffect(() =>{
        getPeople();
    },[]);

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
                        label="Activity Name"
                        size='small'
                        name='activity_name'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.activity_name}
                    /> 
                </Grid>



                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Fungal Gene Name"
                        size='small'
                        name='fungal_gene_name'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.fungal_gene_name}
                    /> 
                </Grid>
                {/* CHANGE TO TEXT FIELD */}
                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Fungal"
                        size='small'
                        name='fungal'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.fungal}

                    /> 
                </Grid>


                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Fungal Gene Sequence"
                        size='small'
                        name='fungal_gene_sequence'
                        variant="outlined"
                        color="primary"
                        type='file'
                        required={true}
                        onChange={handleChange}
                        value={form.fungal_gene_sequence}

                    /> 
                </Grid>




                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around"> 
                        <KeyboardDatePicker
                          margin="normal"
                          id="date-picker-sequence"
                          label="Date of Sequence"
                          format="MM/dd/yyyy"
                          name='date_of_sequence'
                          value={form.date_of_sequence}
                          onChange={(data) => handleDateChange('date_of_sequence',data)}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>

                <Grid item xs={9}>
                    <TextField
                        id="outlined-secondary"
                        label="Project Name"
                        size='small'
                        name='project_name'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.project_name}
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