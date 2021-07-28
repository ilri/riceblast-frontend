import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import FGSService from '../../../services/FGS';



const service = new FGSService();



export default function Add({getData,isolates,openDrawer}){


    const [form, setForm] = React.useState({
        isolate:null,
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

    const handleSelectChange = (field,pk) => {
        console.log(pk);
        setForm({...form, [field]:pk });
    }
    
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
            handleSelectChange={handleSelectChange}
            isolates={isolates}
         
        >

        </Form>
    )
}