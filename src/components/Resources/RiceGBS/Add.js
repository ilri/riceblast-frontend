import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import RiceGBSService from '../../../services/riceGBS';





const service = new RiceGBSService();



export default function Add({getData,openDrawer,people,labs}){


    const [form, setForm] = React.useState({
        rice_gbs_name:'',
        person:'',
        lab:'',
        gbs_dataset:'',


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
            people={people}
            labs={labs}
            handleFileChange = {handleFileChange}
         
        >

        </Form>
    )
}   