import React from 'react'
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import { Grid ,Button,TextArea,Form,Input} from 'semantic-ui-react';




export default function PublicationForm({form,handleChange,handleFileChange}){
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
                        value={form.title}
                    /> 
                </Grid.Column>

                <Grid.Column>
                    <Input
                        id="outlined-secondary"
                        label="Date"
                        size='small'
                        name='date'
                        onChange={handleChange}
                        value={form.date}
                        type='date'
                    /> 
                </Grid.Column>
                
                <Grid.Row>
                    <Grid.Column>
                        <Input
                            id="outlined-secondary"
                            label="Publication"
                            size='small'
                            name='publication'
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
                            value={form.description}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Form>

    )
}