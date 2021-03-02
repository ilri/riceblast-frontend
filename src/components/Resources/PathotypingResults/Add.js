import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import PathotypingService from '../../../services/pathotypingResults';


const service = new PathotypingService();



export default function Add({getData,openDrawer,riceGenotypes,isolates,people,labs}){
    

    const [form, setForm] = React.useState({
        rice_genotype:'',
        isolate:'',
        person:'',
        lab:'',

        stock_id:'',
        replicate_id: '',
        sample_id:'',
        date_inoculated: new Date(),
        date_scored: new Date(),
        date_planted: new Date(),
        disease_score:'',
        test:'',
        tray:'',

        errorMsg: '',
        errors: false,
        load: false,
    });
    // UPLOAD FILE
    const [pathotyping_results,setPathotypingResults] = React.useState(null);

    const handleFileUpload = (event) =>{
        const file = event.target.files[0];
        console.log(file);
        setPathotypingResults(file);
        // handlePostFile(pathotyping_results);
    }

    const handlePostFile = () => {
        service.uploadFile(pathotyping_results).then(
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
        console.log(form);
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
    
    const handleDateChange = (date_field,date) => {
        setForm({...form, [date_field]:date });
    };
    return(
        <div>
            <Form 
                form={form} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                handleDateChange={handleDateChange}
                riceGenotypes={riceGenotypes}
                isolates={isolates}
                people={people}
                labs={labs}
                handleFileUpload={handleFileUpload}
                handlePostFile={handlePostFile}
                openDrawer={openDrawer}
                handleSelectChange={handleSelectChange}

            >

            </Form>


        </div>

    )
}