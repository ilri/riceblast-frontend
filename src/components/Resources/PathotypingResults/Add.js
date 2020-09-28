import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import PathotypingService from '../../../services/pathotypingResults';



const service = new PathotypingService();



export default function Add({getData,openDrawer}){


    const [form, setForm] = React.useState({
        rice_genotype:null,
        isolate:null,
        person:null,
        lab:null,

        stock_id:'',
        replicate_id: '',
        sample_id:'',
        date_inoculated: new Date(),
        date_scored: new Date(),
        date_planted: new Date(),
        disease_score:'',
        test:'',
        tray:'',

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
    
    const handleDateChange = (date_field,date) => {
        setForm({...form, [date_field]:date });
    };
    return(
        <Form 
            form={form} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            handleDateChange={handleDateChange}
         
        >

        </Form>
    )
}