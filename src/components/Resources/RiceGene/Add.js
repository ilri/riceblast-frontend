import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import RiceGeneService from '../../../services/riceGene';


const riceGeneService = new RiceGeneService();



export default function Add({getRiceGenes,openDrawer}){


    const [form, setForm] = React.useState({
        name:'',
        chromosome_id:'',
        marker:'',
        donor_line: '',
        resistance_type:'',
        reference:'',

        errorMsg: '',
        errors: false,
        load: false,
    });



    const handleChange = (event) => {
        const value = event.target.value;
        setForm({...form, [event.target.name]:value });
    };


    const handleSubmit = () => {


        riceGeneService.addiceGenes(form).then(
            response => {
                console.log(response.data);
                getRiceGenes();
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
        
        >

        </Form>
    )
}