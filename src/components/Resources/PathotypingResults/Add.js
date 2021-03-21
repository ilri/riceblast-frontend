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
    });
    // UPLOAD FILE
    const [pathotyping_results,setPathotypingResults] = React.useState('');
    const [progressBar,setProgressBar] = React.useState(false);
    const [intialFormState,setIntialFormState] = React.useState({});
    const [success,setSuccess] = React.useState('');
    const [error,setError] = React.useState('');
    // const uploadRef = React.createRef();


    React.useEffect(()=>{
        setIntialFormState(form);
    },[])

    const handleFileUpload = (event) =>{
        const file = event.target.files[0];
        var ext = event.target.value.match(/\.([^\.]+)$/)[1];
        switch(ext){
            case 'xls':
            case 'xlsx':
            case 'csv':
                setPathotypingResults(file);
                break;
            default:
                setError('Unsupported File Format. Use EXCEL files');

        }
        // handlePostFile(pathotyping_results);
        // event.target.value = null //RESET INUT FIELD

    }

    const handlePostFile = () => {
        service.uploadFile1(pathotyping_results,(event)=>{
            setProgressBar(true); //PROGRESS BAR
        }).then(
            response => {
                setSuccess(response.data.message);
                getData();
                setPathotypingResults('');
                setProgressBar(false);
                // openDrawer();
            }
        ).catch(
            error => {
                console.log(error);
                setError(error.response.data.message);
                setProgressBar(false);
            }            
        )
    }
    // CLOSE success/error MESSAGE
    const closeMessage = (type) => {
        if (type ==='success'){
            setSuccess('');
        }else{
            setError('');
        }
    };

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
                setForm(intialFormState);
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
                progressBar={progressBar}
                pathotyping_results={pathotyping_results}
                success={success}
                error={error}
                closeMessage={closeMessage}

            >

            </Form>


        </div>

    )
}
