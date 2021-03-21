import React from 'react'
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { Grid ,Button,TextArea,Form,Input} from 'semantic-ui-react';




export default function MeetingsForm({form,handleChange,handleFileChange}){
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
                            label="Minutes"
                            size='small'
                            name='minutes'
                            variant="outlined"
                            color="primary"
                            type='file'
                            required={true}
                            onChange={handleFileChange}
                        />  
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </Form>

    )
}