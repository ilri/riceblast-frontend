import React, { useState } from 'react';
import Appbar from '../Appbar/Appbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockIcon from '@material-ui/icons/Lock';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import UserService from '../../services/userService';
import Alert from '@material-ui/lab/Alert';

const userService = new UserService();

const useStyles = makeStyles(theme => ({
    root: {
      marginTop: 150,
    },
    header : {
        textAlign:'center',
        paddingTop:10,
        paddingBottom:10,
    },
    form:{
        margin: 50,
        flexDirection:'column',
        alignItems:'center',
    },
    hr: {
      maxWidth: '7%',
    },
    formWrapper:{
      width:'60%',
      margin:'0 auto',
    },
    loginBtn:{
      textAlign:'center',
      marginTop:'10px'
    },
}));


export default function Login(props){
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState(false);
    const [credentials, setCredentials] = useState({
      username:'',
      password:'',
    });
    const classes = useStyles();

    const handleChange = (event) => {
        const value = event.target.value;
        setCredentials({...credentials, [event.target.name]:value});
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      userService.loginUser(credentials).then(
        response => {
          console.log(response.data);
          localStorage.setItem('access', response.data.access);
          localStorage.setItem('refresh', response.data.refresh);
          props.history.push('/resources/dashboard');
        }
      ).catch(errors => setErrors(true));

    };

    const handleClickShowPassword = ()=>{
        setShowPassword(true);
    };

    const handleMouseDownPassword = () => {
        setShowPassword(false);
    };



    return(
        <div>

            <div>
                <Appbar props={props} />
            </div>

            <div className={classes.root}>
                <Container fixed>
                    <Typography component="div" style={{ backgroundColor: 'white', height: '50vh' }}>
                        <div>
                            <Typography component='h4' variant='h4' className={classes.header}>LOGIN</Typography>
                            <hr className={classes.hr} />
                        </div>

                        <div className={classes.formWrapper}>
                            {errors? <Alert severity="error">Wrong Login Credentials</Alert> : ''}
                            <form className={classes.form} onSubmit={handleSubmit}>

                                <div>
                                    <Grid container spacing={2} alignItems="flex-end">
                                      <Grid item>
                                        <EmailIcon />
                                      </Grid>
                                      <Grid item xs={10}>
                                        <TextField error={errors} id="input-with-icon-grid" name='username' label="Email" value={credentials.username} variant='outlined' fullWidth onChange={handleChange} />
                                      </Grid>
                                    </Grid>
                                </div>

                                <div>
                                    <Grid container spacing={2} alignItems="flex-end">
                                      <Grid item>
                                        <LockIcon />
                                      </Grid>
                                      <Grid item xs={10}>
                                        <FormControl variant="outlined" fullWidth >
                                          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                          <OutlinedInput
                                            id="outlined-adornment-password"
                                            error={errors}
                                            type={showPassword ? 'text' : 'password'}
                                            value={credentials.password}
                                            name='password'
                                            fullWidth
                                            onChange={handleChange}
                                            endAdornment={
                                              <InputAdornment position="end">
                                                <IconButton
                                                  aria-label="toggle password visibility"
                                                  onClick={handleClickShowPassword}
                                                  onMouseDown={handleMouseDownPassword}
                                                  edge="end"
                                                >
                                                  {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                              </InputAdornment>
                                            }
                                            labelWidth={70}
                                          />
                                        </FormControl>
                                      </Grid>
                                    </Grid>
                                </div>
                                <div className={classes.loginBtn}>
                                  <Button variant="outlined" type='submit' color="primary" size='large' >
                                    LOGIN
                                  </Button>
                                </div>
                            </form>
                        </div>
                    </Typography>
                </Container>
            </div>
        </div>
    )
}