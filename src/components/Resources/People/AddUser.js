import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import UserService from '../../../services/userService';



const userService = new UserService();

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },

}));


export default function AddUser({getPeople}) {
  const classes = useStyles();


  const [formState, setFormState] = React.useState({
    username: '',
    email: '',
    password: '',
    full_name: '',
    telephone_number: '',
    lab: '',
    designation: '',
    role: '',

    errorMsg: '',
    errors: false,
    load: false,
  });
  const [successMsg, setSuccessMsg] = React.useState('');
  const [initial, setInitial] = React.useState({}); 

  React.useEffect(() => {
    const initialFormState = Object.assign({}, formState);
    setInitial(initialFormState);
  },[]);

  const handleSubmit = () => {
    handleLoad();
    handleRegisterUser();
  };

  const handleRegisterUser = () => {
    userService.registerUser(formState).then(
      response => {
        // setFormState({...formState, load:false,successMsg:response.data.message});
        setSuccessMsg(response.data.message);
        setFormState(initial);
        getPeople();
        // console.log(formState);
      }
    ).catch(
      errors => {
        console.log(errors.response.data.message);

        setTimeout(() => {
          setFormState({ ...formState, errors: true, errorMsg: errors.response.data.message, load: false });
        }, 1000);

      }
    )
  };

  const handleErrors = () => {
    setFormState({ ...formState, errors: !errors });
  };

  const handleLoad = () => {
    setFormState({ ...formState, load: !load });
  }



  const handleChange = (event) => {
    const value = event.target.value;
    setFormState({ ...formState, [event.target.name]: value });
  };
  const handleSelectChange = (role) => {
    setFormState({...formState, role: role});
  };

  const handleSuccessClose = () => {
    setSuccessMsg('');
  };

  const { load, errors, errorMsg, ...form } = formState;

  return (
    <div className={classes.root}>
      <Form form={form} handleChange={handleChange} handleSubmit={handleSubmit}
        handleErrors={handleErrors} errors={errors} errorMsg={errorMsg} 
        load={load} successMsg={successMsg} handleSuccessClose={handleSuccessClose}
        handleSelectChange={handleSelectChange}
      />
    </div>
  );
}