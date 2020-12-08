import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import RiceSmallService from '../../../services/riceSmall';



const service = new RiceSmallService();



export default function Add({getData,openDrawer,people,riceGenotypes,labs}){


    const [form, setForm] = React.useState({
        rice_genotype:'',
        taxa_name:'',
        sequence_id: '',
        description: '',
        sequence_data:undefined,
        chromosome_id:'',
        chromosome_site_id:'',
        loci_id:'', 
        person:'',
        lab:'',
        target_gene:'',

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
            riceGenotypes={riceGenotypes}
            labs={labs}
            handleFileChange={handleFileChange}
            openDrawer={openDrawer}
         
        >

        </Form>
    )
}   