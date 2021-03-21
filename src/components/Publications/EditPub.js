import React from 'react'
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Grid ,Button,TextArea,Form} from 'semantic-ui-react';




export default function EditForm({form,handleChange,handleFileChange}){
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
                    <TextField
                        id="outlined-secondary"
                        label="Date"
                        size='small'
                        name='date'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.date}
                    /> 
                </Grid.Column>

                <Grid.Column>
                    <TextField
                        id="outlined-secondary"
                        label="publication"
                        size='small'
                        name='publication'
                        variant="outlined"
                        color="primary"
                        type='file'
                        required={true}
                        onChange={handleFileChange}
                    /> 
                </Grid.Column>

                <Grid.Row>
                    <Grid.Column>
                        <TextArea 
                            placeholder='Description'
                            onChange={handleChange} 
                            name='description'
                            rows={8}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Form>

    )
}