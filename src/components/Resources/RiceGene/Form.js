import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
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



const choices = [
    ['released_variety','Released Variety'],
    ['microgenic_line','Microgenic Line'],
    ['interspecific_variety','Interspecific Variety'],
    ['introgession_line', 'Introgession Line'],
    ['adapted_african_cultiva', 'Adapted African Cultiva'],   
];


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

function ActualForm({form,openDrawer, handleChange, handleSubmit}){
    const classes = useStyles();
    return (
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
                    label="Chromosome ID"
                    size='small'
                    name='chromosome_id'
                    variant="outlined"
                    color="primary"
                    required={true}
                    value={form.chromosome_id}
                    onChange={handleChange}

                /> 
            </Grid>


            <Grid item xs={9}>
                <TextField
                    id="outlined-secondary"
                    label="Marker"
                    size='small'
                    name='marker'
                    variant="outlined"
                    color="primary"
                    required={true}
                    onChange={handleChange}
                    value={form.marker}
                /> 
            </Grid>

            <Grid item xs={9}>
                <TextField
                    id="outlined-secondary"
                    label="Donor Line"
                    size='small'
                    name='donor_line'
                    variant="outlined"
                    color="primary"
                    required={true}
                    onChange={handleChange}
                    value={form.donor_line}

                /> 
            </Grid>


            <Grid item xs={9}>
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
                          return <em>Resistance Type</em>;
                        }
                    }}
                    >
                      <MenuItem disabled value="">
                        <em>Resistance Type</em>
                      </MenuItem>
                      {choices.map((name,i) => (
                        <MenuItem key={i} value={name[0]} >
                          {name[1]}
                        </MenuItem>
                      ))}
                    </Select>

                </FormControl>                
            </Grid>

            <Grid item xs={9}>
                <TextField
                    id="outlined-secondary"
                    label="Reference"
                    size='small'
                    name='reference'
                    variant="outlined"
                    color="primary"
                    required={true}
                    onChange={handleChange}
                    value={form.reference}

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


export default function Form(
    {form, handleChange, handlePostFile, 
    handleFileUpload, handleSubmit,openDrawer
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
                    <Button variant="contained" onClick={openDrawer} color='secondary'>Close</Button>
                </Grid>
            </Grid>

            </TabPanel>            
        </div>
    )
}