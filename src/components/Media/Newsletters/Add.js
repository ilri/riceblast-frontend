import React from 'react'
import {Message, Button, Header, Image, Modal } from 'semantic-ui-react'
import AddIcon from '@material-ui/icons/Add';
import NewsLeteterForm from './Form';
import NewslettersService from '../../../services/newsletter';

const service = new NewslettersService();


function Add({open,setOpen,handlePostData,getData}) {

    const [form, setForm] = React.useState({
        title:'',
        date:'',
        description:'',
        newsletter:'',
    });
    const [errors, setErrors] = React.useState({});
    const [success, setSuccess] = React.useState('');

    const [initialForm, setInitialForm] = React.useState({});

    React.useEffect(() => {
      setInitialForm(form);
    },[])

    const handleChange = (e) => {
      const value = e.target.value;
      setForm({...form, [e.target.name]:value});     
   
    }

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      console.log(file);
      setForm({...form, [event.target.name]:file });
    }
    
    const handleSubmit = () => {
      service.addData(form).then(
        response => {
            console.log(response.data);
            setSuccess(response.data.message)
            setForm(initialForm);
            getData();

            setTimeout(() => {
              setSuccess('')
            }, 5000);
            // openDrawer();
        }
      ).catch(
        error => {
            console.log(error.response.data.message);
            setErrors(error.response.data.message);
            // setForm({...form, errorMsg:error.response.data.message});
        }
      ); 
      // () => setOpen(false)
    }    
    

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='large'
      style={{minHeight:'300px'}}
    >
      <Modal.Header>
        ADD NEWSLETTER

        {(success ? (
          <Message color='green'>{success}</Message>
        ): '' )}

      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
            <NewsLeteterForm 
                form={form}
                handleChange={handleChange} 
                handleFileChange={handleFileChange} 
            />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
      <Button color='red' onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
          disabled={((!form.title) || (!form.date) || (!form.description) || (!form.newsletter))}
          content="Submit"
          color='blue'
          labelPosition='right'
          icon='checkmark'
          onClick={handleSubmit}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default Add