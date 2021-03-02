import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import RiceGeneService from '../../../services/riceGene';


const service = new RiceGeneService();



export default function Add({getRiceGenes,openDrawer}){


    const [form, setForm] = React.useState({
        name:'',
        chromosome_id:'',
        marker:'',
        donor_line: '',
        resistance_type:'',
        reference:'',
        project:'',

        errorMsg: '',
        errors: false,
        load: false,
    });


    const [fileUpload,setFileUPload] = React.useState(null);

    const handleFileUpload = (event) =>{
        const file = event.target.files[0];
        console.log(file);
        setFileUPload(file);
    }

    const handlePostFile = () => {
        service.uploadFile(fileUpload).then(
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
        )
    }

    const handleChange = (event) => {
        const value = event.target.value;
        console.log(value);
        setForm({...form, [event.target.name]:value });
    };


    const handleSubmit = () => {
        // console.log('ray');

        service.addiceGenes(form).then(
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
            handlePostFile={handlePostFile}
            handleFileUpload={handleFileUpload}
            openDrawer={openDrawer}
        >

        </Form>
    )
}