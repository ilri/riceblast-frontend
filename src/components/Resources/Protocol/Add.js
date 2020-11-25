import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import ProtocolService from '../../../services/protocol';



const service = new ProtocolService();



export default function Add({getData,openDrawer}){


    const [form, setForm] = React.useState({
        name:'',
        protocol:'',


        errorMsg: '',
        errors: false,
        load: false,
    });


    const handleChange = (event) => {
        const value = event.target.value;
        setForm({...form, [event.target.name]:value });
    };


    const handleSubmit = () => {


        service.addData(form).then(
            response => {
                console.log(response.data);
                getData();
                openDrawer();
            }
        ).catch(
            error => {
                console.log(error.response.data.message);
                setForm({...form, errorMsg:error.response.data.message});
            }
        );
    }
    
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setForm({...form, [event.target.name]:file });
    } 
    return(
        <Form 
            form={form} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
            handleFileChange={handleFileChange}
         
        >

        </Form>
    )
}   