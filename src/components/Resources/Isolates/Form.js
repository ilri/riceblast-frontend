import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IsolatesService from '../../../services/isolates';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ReactFlagsSelect from 'react-flags-select';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers/';
import DateFnsUtils from '@date-io/date-fns';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PeopleService from '../../../services/people';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import Upload from './Upload';




const peopleService = new PeopleService();


const useStyles = makeStyles(theme => ({
    selectCountry: {
      width: '90%',
      border:'1px solid black'
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Container fixed style={{marginTop:'50px'}}>
            {children}
          </Container>
        )}
      </div>
    );
}

function ActualForm(
    {
        findPersonID,form,people,handleSubmit,
        handleChange,handleDateChange,
        onSelect,openDrawer
    }){
        
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
                    label="Isolate ID"
                    size='small'
                    variant="outlined"
                    color="primary"
                    required={true}
                    name='isolate_id'
                    onChange={handleChange}
                /> 
            </Grid>

            <Grid item xs={9}>
                <TextField
                    id="outlined-secondary"
                    label="Isolate Name"
                    size='small'
                    name='isolate_name'
                    variant="outlined"
                    color="primary"
                    required={true}
                    value={form.isolate_name}
                    onChange={handleChange}

                /> 
            </Grid>


            <Grid item xs={9}>
                <TextField
                    id="outlined-secondary"
                    label="Tissue Type"
                    size='small'
                    name='tissue_type'
                    variant="outlined"
                    color="primary"
                    required={true}
                    value={form.tissue_type}
                    onChange={handleChange}

                /> 
            </Grid>



            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around"> 
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-collected"
                      label="Date Collected"
                      format="MM/dd/yyyy"
                      name='date_collected'
                      value={form.date_collected}
                      onChange={(data) => handleDateChange('date_collected',data)}
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
                      id="date-picker-isolated"
                      label="Date Isolated"
                      format="MM/dd/yyyy"
                      name='date_isolated'
                      value={form.date_isolated}
                      onChange={(data) => handleDateChange('date_isolated',data)}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            

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
                    label="Host Genotype"
                    size='small'
                    name='host_genotype'
                    variant="outlined"
                    color="primary"
                    required={true}
                    onChange={handleChange}
                    value={form.host_genotype}
                /> 
            </Grid>

            <Grid item xs={9}>
                <TextField
                    id="outlined-secondary"
                    label="Fungal Collection Site"
                    size='small'
                    name='collection_site'
                    variant="outlined"
                    color="primary"
                    required={true}
                    onChange={handleChange}
                    value={form.collection_site}

                /> 
            </Grid>

            <Grid item xs={9}>
                <Autocomplete 
                  id="combo-box-demo"
                  options={people}
                  value={form.people}
                  onInputChange={(event,newData) => {
                    findPersonID(newData)
                  }}
                  getOptionLabel={(option) => option.full_name}
                  style={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} size='small' label="People" variant="outlined" />}
                 />
            </Grid>

            <Grid container direction="row" justify='space-between' alignItems='flex-end' xs={9}>
                <Grid item xs={3}>
                    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                </Grid>

                <Grid item xs={3}>
                    <Button variant="contained" color='secondary' onClick={openDrawer}>Close</Button>
                </Grid>
            </Grid>

        </Grid>
    </div>
    )
}
export default function Form(
    {form,handlePeopleChange,
        handleChange,handleDateChange, openDrawer,
        handleSubmit, onSelect,handleFileUpload,handlePostFile}){

    const [people, setPeople] = React.useState([]);
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, newTabValue) => {
      setTabValue(newTabValue)
    }

    React.useEffect(() => {
        getPeople();
    },[]);

    const getPeople = () => {
        peopleService.getData().then(
            response => {
                setPeople(response.data);
            }
        ).then(
            errors => {
                console.log(errors);
            }
        )
    };
    const findPersonID = (newData) => {
        people.map((person,id) => {
            if(person.full_name === newData){
                handlePeopleChange(person.user.pk);
            }
        })
    }
    return(
        <div>

            <Tabs
              value={tabValue}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleTabChange}
              aria-label="disabled tabs example"
            >
              <Tab label="FORM" />
              <Tab label="" disabled />
              <Tab label="UPLOAD DATA" />
            </Tabs>
            <TabPanel value={tabValue} index={0}>
              
              <ActualForm
                form={form}
                findPersonID={findPersonID}
                people={people}
                handleSubmit={handleSubmit}
                handleDateChange={handleDateChange}
                onSelect={onSelect}
                handleChange={handleChange}
                openDrawer={openDrawer}
              />

            </TabPanel>

            <TabPanel value={tabValue} index={2}>

              <Upload
                  handleFileUpload={handleFileUpload}
              />
            
            <Grid container style={{marginTop:'50px'}} direction="row" justify='space-between' alignItems='flex-end' xs={9}>
                <Grid item xs={3}>
                    <Button variant="contained" onClick={handlePostFile}>Upload</Button>
                </Grid>

                <Grid item xs={3}>
                    <Button variant="contained" color='secondary' onClick={openDrawer}>Close</Button>
                </Grid>
            </Grid>

            </TabPanel>
        </div>        
    )
} 