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
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers/';
import DateFnsUtils from '@date-io/date-fns';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import Upload from './Upload';
import Autocomplete from '@material-ui/lab/Autocomplete';



const useStyles = makeStyles(theme => ({
    
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
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


function ActualForm({form,openDrawer,riceGenotypes,handleSubmit,
  isolates,people,labs,handleChange, handleSelectChange, handleDateChange}){
  
  
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
                          options={isolates}
                          style={{width:300}}
                          onInputChange={(event,newData) => {
                              let isolateID = newData.split(": ");                     
                              handleSelectChange('isolate',isolateID[0])
                          }}
                          getOptionLabel={(option) => option.pk + ": " + option.isolate_name  }
                          size='small'
                          renderInput={(params) => <TextField {...params} label="Isolates" variant="outlined" />}
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

                <Grid container style={{marginTop:'50px'}} direction="row" justify='space-between' alignItems='flex-end' >
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


export default function Form({form, 
  handleFileUpload,riceGenotypes,isolates,closeMessage,
  people,labs,handleChange, handleSelectChange, handleDateChange,
  handlePostFile, handleSubmit,openDrawer,progressBar,success,error,pathotyping_results
}){


    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newTabValue) => {
      setTabValue(newTabValue)
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
                riceGenotypes={riceGenotypes}
                labs={labs}
                isolates={isolates}
                people={people}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleDateChange={handleDateChange}
                handleSelectChange={handleSelectChange}

              />
 
            </TabPanel>

            <TabPanel value={tabValue} index={2}>
            
            {/* UPLOAD FILE */}
              <Upload
                  handleFileUpload={handleFileUpload}
                  progressBar={progressBar}
                  success={success}
                  error={error}
                  closeMessage={closeMessage}
              />
            
            <Grid container style={{marginTop:'50px'}} direction="row" justify='space-between' alignItems='flex-end'>
                <Grid item xs={3}>
                    <Button disabled={((pathotyping_results === '') ? true: false)} variant="contained" onClick={handlePostFile}>Upload</Button>
                </Grid>

                <Grid item xs={3}>
                    <Button variant="contained" onClick={openDrawer} color='secondary'>Close</Button>
                </Grid>
            </Grid>

            </TabPanel>

        </div>
    )
}