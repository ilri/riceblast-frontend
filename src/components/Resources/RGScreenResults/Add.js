import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import RGSService from '../../../services/RGS';
import Upload from './Upload';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


const service = new RGSService();


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Container fixed style={{marginTop:'50px'}}>
            {children}
          </Container>
        )}
      </div>
    );
}


export default function Add({getData,openDrawer}){


    const [form, setForm] = React.useState({
        rice_genotype:null,
        rice_gene:null,
        pcr_results:'',
        replicate_id: '',
        sample_id:'',
    });

    const [rgs_results,setRGSResults] = React.useState('');
    const [progressBar,setProgressBar] = React.useState(false);
    const [intialFormState,setIntialFormState] = React.useState({});
    const [success,setSuccess] = React.useState('');
    const [error,setError] = React.useState('');
    const [tabValue, setTabValue] = React.useState(0);

    React.useEffect(()=>{
        setIntialFormState(form);
    })

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
                setForm(intialFormState);
                // openDrawer();

            }
        ).catch(
            error => {
                console.log(error.response.data.message);
                setForm({...form, errorMsg:error.response.data.message});
            }
        );
    }
    
    const handleFileUpload = (event) =>{
        const file = event.target.files[0];
        var ext = event.target.value.match(/\.([^\.]+)$/)[1];
        switch(ext){
            case 'xls':
            case 'xlsx':
            case 'csv':
                setRGSResults(file);
                break;
            default:
                setError('Unsupported File Format. Use EXCEL files');

        }
        // handlePostFile(pathotyping_results);
        // event.target.value = null //RESET INUT FIELD
    };

    const handlePostFile = () => {
        service.uploadFile(rgs_results,(event)=>{
            setProgressBar(true); //PROGRESS BAR
        }).then(
            response => {
                setSuccess(response.data.message);
                getData();
                setRGSResults('');
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

    const handleTabChange = (event, newTabValue) => {
      setTabValue(newTabValue)
    }; 
    return(
        <div>
            <Tabs
              value={tabValue}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleTabChange}
              aria-label="disabled tabs example"
            >
              <Tab label="FORM" />
              <Tab label="" disabled />
              <Tab label="UPLOAD DATA" />
            </Tabs>
            <TabPanel value={tabValue} index={0}>
              
            <Form 
                form={form} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                openDrawer={openDrawer}
                handleSelectChange={handleSelectChange}
                rgs_results={rgs_results}
                progressBar={progressBar}
                success={success}
                error={error}
                handlePostFile={handlePostFile}
            />
 
            </TabPanel>

            <TabPanel value={tabValue} index={2}>
            
            {/* UPLOAD FILE */}
              <Upload
                  handleFileUpload={handleFileUpload}
                  progressBar={progressBar}
                  success={success}
                  error={error}
                  closeMessage={closeMessage}
              />
            
            <Grid container style={{marginTop:'50px'}} direction="row" justify='space-between' alignItems='flex-end'>
                <Grid item xs={3}>
                    <Button disabled={((rgs_results === '') ? true: false)} variant="contained" onClick={handlePostFile}>Upload</Button>
                </Grid>

                <Grid item xs={3}>
                    <Button variant="contained" onClick={openDrawer} color='secondary'>Close</Button>
                </Grid>
            </Grid>

            </TabPanel>





        </div>

        
    )
}