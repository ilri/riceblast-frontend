import React from 'react'
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import { Grid ,Button,TextArea,Form,Input} from 'semantic-ui-react';
import {Message, Header, Image, Modal } from 'semantic-ui-react'
import AddIcon from '@material-ui/icons/Add';
import NewslettersService from '../../../services/newsletter';

const service = new NewslettersService();




function NewsletterForm({editData,handleChange,handleFileChange}){
    return(
        <Form>
            <Grid relaxed columns={3}>
                <Grid.Column>
                    <TextField
                        id="outlined-secondary"
                        label="Title"
                        size='small'
                        name='title'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={editData.title}
                    /> 
                </Grid.Column>

                <Grid.Column>
                    <Input
                        id="outlined-secondary"
                        label="Date"
                        size='small'
                        name='date'
                        onChange={handleChange}
                        value={editData.date}
                        type='date'
                    /> 
                </Grid.Column>
                
                <Grid.Row>
                    <Grid.Column>
                        <Input
                            id="outlined-secondary"
                            label="Newsletter"
                            size='small'
                            name='newsletter'
                            variant="outlined"
                            color="primary"
                            type='file'
                            required={true}
                            onChange={handleFileChange}
                        /> 
                    </Grid.Column>
                </Grid.Row> 


                <Grid.Row>
                    <Grid.Column>
                        <TextArea 
                            placeholder='Description'
                            onChange={handleChange} 
                            name='description'
                            rows={8}
                            value={editData.description}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Form>

    )
}

function Edit({editOpen,setEditData,editData,setEditOpen,handlePostData,getData}) {


    const [errors, setErrors] = React.useState({});
    const [success, setSuccess] = React.useState('');




    const handleChange = (e) => {
      const value = e.target.value;
      setEditData({...editData, [e.target.name]:value});  
      console.log(editData);   
   
    }

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      console.log(file);
      setEditData({...editData, [event.target.name]:file });
    }
    
    const handleSubmit = () => {
      service.editData(editData).then(
        response => {
            console.log(response.data);
            setSuccess(response.data.message)
            getData();

            setTimeout(() => {
              setSuccess('');
              setEditOpen(false)
            }, 2000);
        }
      ).catch(
        error => {
            console.log(error.response.data.message);
            setErrors(error.response.data.message);
        }
      ); 
    }    
    

  return (
    <Modal
      onClose={() => setEditOpen(false)}
      onOpen={() => setEditOpen(true)}
      open={editOpen}
      size='large'
      style={{minHeight:'300px'}}
    >
      <Modal.Header>
        EDIT MEETING

        {(success ? (
          <Message color='green'>{success}</Message>
        ): '' )}

      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
            <NewsletterForm 
                editData={editData}
                handleChange={handleChange} 
                handleFileChange={handleFileChange} 
            />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>

        <Button color='red' onClick={() => setEditOpen(false)}>
          Close
        </Button>

        <Button
          content="Submit"
          labelPosition='right'
          icon='checkmark'
          onClick={handleSubmit}
          positive
        />
        
      </Modal.Actions>
    </Modal>
  )
}

export default Edit


