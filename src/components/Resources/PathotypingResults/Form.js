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


function ActualForm({form,openDrawer,riceGenotypes,handleSubmit,isolates,people,labs,handleChange, handleDateChange}){
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
                              {isolate.isolate_name}
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

                <Grid container style={{marginTop:'50px'}} direction="row" justify='space-between' alignItems='flex-end' xs={9}>
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
  handleFileUpload,riceGenotypes,isolates,
  people,labs,handleChange, handleDateChange,
  handlePostFile, handleSubmit,openDrawer
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
                    <Button variant="contained" onClick={openDrawer} color='secondary'>Close</Button>
                </Grid>
            </Grid>

            </TabPanel>

        </div>
    )
}