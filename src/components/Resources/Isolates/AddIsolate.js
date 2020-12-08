import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import IsolatesService from '../../../services/isolates';


const service = new IsolatesService();



export default function AddIsolate({getIsolates,openDrawer}){


    const [form, setForm] = React.useState({
        isolate_id:'',
        isolate_name:'',
        taxa_name:'',
        tissue_type:'',
        date_collected: new Date(),
        date_isolated:new Date(),
        country:'KE',
        host_genotype:'',
        collection_site:'',
        collection_site:'',
        person:0,


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
                getIsolates();
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

    const handleDateChange = (date_field,date) => {
        setForm({...form, [date_field]:date });
    };

    const onSelect = (code) => {
        console.log(code);
        setForm({...form, country:code});
    };

    const handleSubmit = () => {
        
        console.log(form);
        const {errorMsg, errors,load, ...data } = form;
        service.addIsolate(data).then(
            response => {
                console.log(response.data);
                getIsolates();
                openDrawer();
            }
        ).catch(
            error => {
                console.log(error.response.data.message);
                setForm({...form, errorMsg:error.response.data.message});
            }
        );
    }
    const handlePeopleChange = (id) => {
        console.log(id);
        setForm({...form, person:id});
    };
    

    return(
        <Form 
            form={form} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            onSelect={onSelect}    
            handleDateChange={handleDateChange}   
            handlePeopleChange={handlePeopleChange}
            handleFileUpload={handleFileUpload}
            handlePostFile={handlePostFile} 
            openDrawer={openDrawer}
        >

        </Form>
    )

}