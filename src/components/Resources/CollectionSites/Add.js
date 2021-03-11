import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import CollectionSiteService from '../../../services/collectionSites';



const service = new CollectionSiteService();



export default function Add({getData,openDrawer}){


    const [form, setForm] = React.useState({
        name:'',
        type:'',
        latitude: '',
        longitude:'',
        country:'KE',
        person:0,

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
    const handlePeopleChange = (id) => {
        console.log(id);
        setForm({...form, person:id});
    };

    return(
        <Form 
            form={form} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            openDrawer={openDrawer}
            handleSelectChange={handleSelectChange}
            handlePeopleChange={handlePeopleChange}
         
        >

        </Form>
    )
}