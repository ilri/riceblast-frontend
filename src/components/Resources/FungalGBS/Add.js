import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import FungalGBSService from '../../../services/fungalGBS';

const service = new FungalGBSService();



export default function Add({getData,openDrawer,people,labs}){


    const [form, setForm] = React.useState({
        fungal_gbs_name:'',
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
    

    return(
        <Form 
            form={form} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
            people={people}
            labs={labs}

         
        >

        </Form>
    )
}   