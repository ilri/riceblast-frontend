import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import FGSService from '../../../services/FGS';



const service = new FGSService();



export default function Add({getData,openDrawer}){


    const [form, setForm] = React.useState({
        rice_genotype:0,
        pcr_results:'',
        replicate_id: '',
        sample_id:'',
        fungal_gene:'',

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
            openDrawer={openDrawer}
         
        >

        </Form>
    )
}