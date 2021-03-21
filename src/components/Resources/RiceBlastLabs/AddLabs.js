import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import LabService from '../../../services/labs';
import Container from '@material-ui/core/Container';


const labService = new LabService();



export default function AddLabs({getLabs,openDrawer}){


    const [form, setForm] = React.useState({
        lab_id:'',
        lab_name:'',
        country:'KE',
        institution: '',
        principal_investigator:'',

        errorMsg:{},
        errors: false,
        load: false,
    });
    const [successMsg, setSuccessMsg] = React.useState('');
    const [initial, setInitial] = React.useState({}); 

    React.useEffect(() => {
      const initialFormState = Object.assign({}, form);
      setInitial(initialFormState);
    },[]);

    const handleChange = (event) => {
        const value = event.target.value;
        setForm({...form, [event.target.name]:value });
    };
    const onSelect = (code) => {
        console.log(code);
        setForm({...form, country:code});
    };

    const handleSubmit = () => {
        labService.addLab(form).then(
            response => {
                console.log(response.data.message);
                const success = response.data.message;
                setSuccessMsg(success);
                setForm(initial);
                getLabs();
                // openDrawer();
            }
        ).catch(
            error => {
                console.log(error.response.data.message);
                const backendErrors = error.response.data.message;
                if(typeof backendErrors == "string" ){
                    setForm({...form, errorMsg:backendErrors});
                }else{
                    setForm({...form, errorMsg:backendErrors});
                }
            }
        );
    };
    

    return(
        <Container fixed className='form-container'>
            <Form 
                form={form} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                onSelect={onSelect}
                openDrawer={openDrawer}
                successMsg={successMsg}
            >

            </Form>
        </Container>

    )

}