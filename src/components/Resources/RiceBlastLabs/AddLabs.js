import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import LabService from '../../../services/labs';


const labService = new LabService();



export default function AddLabs({getLabs,openDrawer}){


    const [form, setForm] = React.useState({
        lab_id:'',
        lab_name:'',
        country:'KE',
        institution: '',
        principal_investigator:'',

        errorMsg: '',
        errors: false,
        load: false,
    });



    const handleChange = (event) => {
        const value = event.target.value;
        setForm({...form, [event.target.name]:value });
    };
    const onSelect = (code) => {
        console.log(code);
        setForm({...form, country:code});
    }

    const handleSubmit = () => {


        labService.addLab(form).then(
            response => {
                console.log(response.data);
                getLabs();
                openDrawer();
            }
        ).catch(
            error => {
                console.log(error.response.data.message);
                setForm({...form, errorMsg:error.response.data.message});
            }
        );
    }
    

    return(
        <Form 
            form={form} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            onSelect={onSelect}
        
        >

        </Form>
    )

}