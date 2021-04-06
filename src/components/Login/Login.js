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
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';


import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';




const userService = new UserService();

const useStyles = makeStyles(theme => ({
    root: {
      width:'100%',
      [theme.breakpoints.between('xs', 'md')]: {
        marginTop: '150px',
      },   
      [theme.breakpoints.between('lg', 'xl')]: {
        paddingTop: '350px',
      },   
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
      maxWidth: '5%',
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
          // props.history.push('/resources/dashboard');
          window.location.href = '/resources/dashboard';
        }
      ).catch(errors => setErrors(true));

    };

    const handleClickShowPassword = ()=>{
        setShowPassword(true);
    };

    const handleMouseDownPassword = () => {
        setShowPassword(false);
    };
    const handleClose = () => {
      setErrors(false);
    }

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    return(
        <div>

            <div>
                <Appbar props={props} />
            </div>

            <div className={classes.root}>
                        <Grid container spacing={2} justify='center' alignItems='center'>
                          <Grid item xs={(matches) ? 10 : 4}>
                            <Paper elevation={10}>
                              <Typography component='div' variant='h4' className={classes.header}>LOGIN</Typography>
                                <hr className={classes.hr} />

                                {errors? <Alert onClose={handleClose} severity="error">Wrong Login Credentials</Alert> : ''}

                              <form className={classes.form} onSubmit={handleSubmit}>


                                    <Grid container spacing={5} justify='center' alignItems='center'>
                                      <Grid item xs={(matches) ? 12: 6}>
                                        <TextField error={errors} id="input-with-icon-grid" size='small'
                                        name='username' label="Username" value={credentials.username} variant='outlined' 
                                        onChange={handleChange} fullWidth />
                                      </Grid>
                                    </Grid>

                                    <Grid container spacing={5} justify='center' alignItems='center'>
                                      <Grid item xs={(matches)? 12 : 6}>
                                        <FormControl variant="outlined" size='small' fullWidth>
                                          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                          <OutlinedInput
                                            id="outlined-adornment-password"
                                            error={errors}
                                            label='Password'
                                            type={showPassword ? 'text' : 'password'}
                                            value={credentials.password}
                                            name='password'          
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
                                          />
                                        </FormControl>
                                      </Grid>
                                    </Grid>
                                <div className={classes.loginBtn}>
                                  <Button variant="outlined" type='submit' color="primary" size='large' disabled={(!credentials.username) || (!credentials.password)}>
                                    LOGIN
                                  </Button>
                                </div>
                              </form>
                              <Grid item xs={12}>
                                <hr />         
                                <Typography component='div' variant='p' style={{alignContent:'center',padding:'10px',}}>
                                  To access database resources, please contact Samuel Mutiga email address: <a>mutiga@uark.edu</a> 
                                </Typography>
                              </Grid>
                            </Paper>
                          </Grid>



                        </Grid>
            </div>
        </div>
    )
}