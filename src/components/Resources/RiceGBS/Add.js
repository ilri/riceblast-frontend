import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import RiceGBSService from '../../../services/riceGBS';

const riceService = new RiceGBSService();



export default function Add({getGenotypes,openDrawer}){


    const [form, setForm] = React.useState({
        rice_genotype:null,
        rice_gene:null,
        pcr_results:'',
        replicate_id: '',
        sample_id:'',

        errorMsg: '',
        errors: false,
        load: false,
    });



    const handleChange = (event) => {
        const value = event.target.value;
        setForm({...form, [event.target.name]:value });
    };


    const handleSubmit = () => {


        genotypeService.addRiceGenotypes(form).then(
            response => {
                console.log(response.data);
                getGenotypes();
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
