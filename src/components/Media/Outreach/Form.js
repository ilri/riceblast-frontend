import React from 'react'
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { Grid ,Label,TextArea,Form,Input} from 'semantic-ui-react';




export default function OutreachForm({form,handleChange,handleFileChange}){
    return(
        <Form>
            <Grid relaxed columns={3}>
                <Grid.Column>
                    <TextField
                        id="outlined-secondary"
                        label="Outreach"
                        size='small'
                        name='outreach'
                        variant="outlined"
                        color="primary"
                        required={true}
                        onChange={handleChange}
                        value={form.outreach}
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
                            label="Upload Image"
                            size='small'
                            name='image'
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
                        <Input
                            id="outlined-secondary"
                            label="Upload File"
                            size='small'
                            name='outreach_file'
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
                        <Label>Brief</Label>
                        <TextArea 
                            placeholder='Brief'
                            onChange={handleChange} 
                            name='brief'
                            rows={8}
                            value={form.brief}
                        />
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </Form>

    )
}