import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LabService from '../../../services/labs';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';



const labService = new LabService();

const useStyles = makeStyles(theme => ({
  loader: {
    width: '70%',
    height:'50%',
    backgroundColor: 'rgba(255,255,255,0.5)',
    zIndex: 5,
    position: 'fixed',
    margin:'0 auto',
  },
  line: {
    maxWidth:'30%',
  },
  formControl: {
    minWidth: 120,
  },
}));

export default function Form(
  {form,handleChange,handleSelectChange,
  handleSubmit,handleErrors,errors, errorMsg,
  successMsg,handleSuccessClose,load}){
  const [labs, setLabs] = React.useState([]);
  const roles=['ADMIN','USER'];

  React.useEffect(() => {
    getLabs();
  },[]);

  const getLabs = () => {
    labService.getLabs().then(
      response => {
        setLabs(labs => labs.concat(response.data))
      }
    ).catch(errors => console.log(errors));  
  };

  const classes = useStyles();
    return(
        <div>
            {errors ? (
              <Grid container alignContent='center' justify='center' >
                <div>
                  <Alert severity="error" onClose={handleErrors}>
                    {errorMsg}
                  </Alert>
                </div>
              </Grid>
            ) : ''}


            {load ? (
              <div className={classes.loader}>
                <Grid container alignContent='center' justify='center' >
                  <CircularProgress style={{marginTop:'100px'}} />
                </Grid>
              </div>
            ): '' }

            <div>
              <Grid container alignContent='center' justify='center' style={{paddingTop:'30px', paddingBottom:'10px'}}>
                <Typography variant='h5' align='center'>USER CREDENTIALS<hr className={classes.line} /></Typography>
              </Grid>

            

              <Grid   
                  container
                  justify='space-between'
                  alignContent='center'
              >
                  <TextField
                    id="outlined-secondary"
                    label="Username"
                    size='small'
                    name='username'
                    error={(errorMsg.includes('username'))}
                    onChange={handleChange}
                    variant="outlined"
                    color="primary"
                    value={form.username}
                    required={true}
                  />     

                  <TextField
                    id="outlined-secondary"
                    label="Email"
                    size='small'
                    name='email'
                    error={(errorMsg.includes('email'))}
                    onChange={handleChange}
                    variant="outlined"
                    color="primary"
                    value={form.email}
                    required={true}
                  />      

                  <TextField
                    id="outlined-secondary"
                    label="Password"
                    size='small'
                    name='password'
                    onChange={handleChange}
                    variant="outlined"
                    color="primary"
                    value={form.password}
                    required={true}
                  />

                  <Autocomplete 
                    id="combo-box-demo"
                    options={roles}
                    name='role'
                    style={{width:300}}
                    onInputChange={(event,data)=>handleSelectChange(data)}
                    getOptionLabel={(option) => option}
                    size='small'
                    renderInput={(params) => <TextField {...params} required label="Role" variant="outlined" />}
                  /> 

              </Grid>

              <Grid container alignContent='center' justify='center' style={{paddingTop:'50px',paddingBottom:'10px'}}>
                <Typography variant='h5' align='center'>PROFESSIONAL INFORMATION<hr className={classes.line} /></Typography>
              </Grid>

              <Grid   
                  container
                  direction="row"
                  justify='space-between'
              >

                  <TextField
                    id="outlined-secondary"
                    label="Full Name"
                    size='small'
                    name='full_name'
                    onChange={handleChange}
                    variant="outlined"
                    color="primary"
                    value={form.full_name}
                    required={true}
                  />     

                  <TextField
                    id="outlined-secondary"
                    label="Telephone Number"
                    size='small'
                    name='telephone_number'
                    onChange={handleChange}
                    variant="outlined"
                    color="primary"
                    value={form.telephone_number}
                  />      

                <FormControl variant="outlined" className={classes.formControl} size='small'> 
                  <InputLabel id="demo-simple-select-outlined-label">Lab</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={form.lab}
                    onChange={handleChange}
                    name='lab'
                    size='small'
                    label="Lab"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {labs.map((lab,index) => (
                      <MenuItem key={index + 1} value={lab.pk}>{lab.lab_name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                  <TextField
                    id="outlined-secondary"
                    label="Designation"
                    size='small'
                    name='designation'
                    onChange={handleChange}
                    variant="outlined"
                    color="primary"
                    value={form.designation}
                  />

              </Grid>

              <Grid container alignContent='center' justify='center' style={{paddingTop:'20px'}}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size='large'
                  onClick={handleSubmit}
                  disabled={!(form.username && form.email && form.password && form.full_name)}
                >
                  Confirm
                </Button>
              </Grid>

              {/* SUCCESS MESSAGE AFTER REGISTERATION */}
              {successMsg ? (
              <Grid container alignContent='center' justify='center' style={{paddingTop:'50px'}}>
                <Alert severity="success" onClose={handleSuccessClose}>{successMsg}</Alert>
              </Grid> ) : '' } 

            </div>        
        </div>
    )
}