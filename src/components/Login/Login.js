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
        marginTop: 50,
        flexDirection:'column',
        alignItems:'center',
    },
    formFields : {
        
    }



}));


export default function Login(props){
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const classes = useStyles();

    const handleChange = (event) => {
        const value = event.target.value;
        setPassword(value)
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
                            <Typography component='h5' variant='h5' className={classes.header}>LOGIN TO RICE BLAST DATABASE</Typography>
                            <Divider component='hr' variant='middle' />
                        </div>

                        <div >
                            <form className={classes.form}>  
                                <div>
                                    <Grid container spacing={2} alignItems="flex-end">
                                      <Grid item>
                                        <EmailIcon />
                                      </Grid>
                                      <Grid item xs={10}>
                                        <TextField id="input-with-icon-grid" label="Email" variant='outlined' fullWidth />
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
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
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

                            </form>
                        </div>
                    </Typography>
                </Container>
            </div>
        </div>
    )
}