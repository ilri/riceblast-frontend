import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import VCGTestResultsService from '../../../services/vcgTestResults';

const service = new VCGTestResultsService();


export default function Add({getData,openDrawer,isolates,vcgGroups,labs}){


    const [form, setForm] = React.useState({
        vcg_test_id:'',
        isolate:null,
        vcg_tester_id: '',
        tester_complimented_isolate: false,
        tester_and_control:false,
        lab:null,
        vcg_replicate_id:'',
        vcg:null, 


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
                getData();
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
        setForm({...form, [event.target.name]:value });
    };

    const handleSelectChange = (field,pk) => {
        console.log(pk);
        setForm({...form, [field]:pk });
    }

    const handleBooleanChange= (event) => {
        setForm({...form, [event.target.name]:event.target.checked });

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
            labs={labs}
            isolates={isolates}
            vcgGroups={vcgGroups}      
            handleBooleanChange={handleBooleanChange}   
            handleFileUpload={handleFileUpload}
            handlePostFile={handlePostFile}
            openDrawer={openDrawer}
            handleSelectChange={handleSelectChange}
        >

        </Form>
    )
}   