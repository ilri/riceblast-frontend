import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import FungalSmallService from '../../../services/fungalSmall';
import Autocomplete from '@material-ui/lab/Autocomplete';



const service = new FungalSmallService();



export default function Add({getData,openDrawer}){


    const [form, setForm] = React.useState({
        activity_name:'',
        fungal_gene_name:'',
        fungal: '',
        fungal_gene_sequence: '',
        date_of_sequence:new Date(),
        loci_id:'',
        person:'',
        target_gene:'', 
        
        errorMsg: '',
        errors: false,
        load: false,
    });

    const handleDateChange = (date_field,date) => {
        setForm({...form, [date_field]:date });
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setForm({...form, [event.target.name]:value });
    };

    const handleSelectChange = (field,pk) => {
        console.log(pk);
        setForm({...form, [field]:pk });
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
            handleDateChange={handleDateChange}
            handleSelectChange={handleSelectChange}
            handleFileChange={handleFileChange}         
            openDrawer={openDrawer}
        >

        </Form>
    )
}   