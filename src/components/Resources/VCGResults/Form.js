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
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';  
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


function ActualForm({
  form, handleChange, handleSubmit,
  handleBooleanChange,isolates,labs,
  vcgGroups,openDrawer,handleSelectChange
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

    <Grid item xs={9}>
        <TextField
            id="outlined-secondary"
            label="VCG Test ID"
            size='small'
            name='vcg_test_id'
            variant="outlined"
            color="primary"
            required={true}
            onChange={handleChange}
            value={form.vcg_test_id}
        /> 
    </Grid>


    <Grid spacing={3} container direction="column" justify="center" alignItems="stretch" >

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
            <TextField
                id="outlined-secondary"
                label="VCG Tester ID"
                size='small'
                name='vcg_tester_id'
                variant="outlined"
                color="primary"
                required={true}
                onChange={handleChange}
                value={form.vcg_tester_id}
            /> 
        </Grid>

        <Grid item xs={9}>
            <FormControlLabel
                control={
                  <Checkbox
                    checked={form.tester_complimented_isolate}
                    onChange={handleBooleanChange}
                    name="tester_complimented_isolate"
                    color="primary"
                  />
                }
                label="Tester Complimented Isolate"
            />
        </Grid>

        <Grid item xs={9}>
            <FormControlLabel
                control={
                  <Checkbox
                    checked={form.tester_and_control}
                    onChange={handleBooleanChange}
                    name="tester_and_control"
                    color="primary"
                  />
                }
                label="Tester and Control"
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
            <TextField
                id="outlined-secondary"
                label="VCG Replicate ID"
                size='small'
                name='vcg_replicate_id'
                variant="outlined"
                color="primary"
                required={true}
                onChange={handleChange}
                value={form.vcg_replicate_id}

            /> 
        </Grid>




        <Grid item xs={9}>
            <FormControl className={classes.formControl}>



                <Autocomplete 
                  id="combo-box-demo"
                  options={vcgGroups}
                  style={{width:300}}
                  onInputChange={(event,newData) => {
                      let vcgID = newData.split(": ");                     
                      handleSelectChange('vcg',vcgID[0])
                  }}
                  getOptionLabel={(option) => option.pk + ": " + option.group  }
                  size='small'
                  renderInput={(params) => <TextField {...params} label="VCG Groups" variant="outlined" />}
                /> 


            </FormControl>                
        </Grid>





        <Grid container direction="row" justify='space-between' alignItems='flex-end' xs={9}>
            <Grid item xs={3}>
                <Button variant="contained" onClick={handleSubmit}> Submit</Button>
            </Grid>

            <Grid item xs={3}>
                <Button variant="contained" onClick={openDrawer} color='secondary' >Close</Button>
            </Grid>
        </Grid>

    </Grid>
</div>

  )
}

export default function Form(
  {
    form, handleChange, handleSubmit,
    handleBooleanChange,isolates,labs,openDrawer,
    vcgGroups,handleFileUpload,handlePostFile,handleSelectChange
  }){

    

    const [tabValue, setTabValue] = React.useState(0);

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
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleBooleanChange={handleBooleanChange}
          isolates={isolates}
          labs={labs}
          vcgGroups={vcgGroups}
          openDrawer={openDrawer}
          handleSelectChange={handleSelectChange}
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