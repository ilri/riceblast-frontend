import React from 'react';
import MaterialTable from 'material-table';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Table({data,handleEdit,handleDelete,labs,people}){
    
    
    const findID = (props,event,newData,field) => {
        switch(field){

            case 'lab':
                labs.map((data) => {
                    if(data.lab_name === newData){
                        props.onChange(data.pk);
                        console.log(data.pk);

                    }
                });
                break;
            default:
                people.map((data) => {
                    if(data.full_name === newData){
                        props.onChange(data.pk);
                        console.log(data.pk);

                    }
                });
                break;
        }
    };
    const FindDefaultValue = () => {
        labs.map((lab,i) => {
            return lab
        })
    }
    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Group', field:'group'},
                    {title:'VCG ID', field:'vcg_id'},
                    {
                        title:'Person', 
                        field:'person',
                        editComponent: props => (
                            <Autocomplete 
                                id="combo-box-demo"
                                options={people}
                                onInputChange={(event,newData) => {
                                    findID(props,event,newData,'person')
                                }}
                                getOptionLabel={(option) => option.full_name}
                                size='small'
                                renderInput={(params) => <TextField {...params} label="People" variant="outlined" />}
                           />                            
                        )
                    }, 
                    {
                        title:'Lab', 
                        field:'lab',
                        editComponent: props => (
                            <Autocomplete 
                                id="combo-box-demo"
                                options={labs}
                                onInputChange={(event,newData) => {
                                    findID(props,event,newData,'lab')
                                }}
                                getOptionLabel={(option) => option.lab_name}
                                size='small'
                                renderInput={(params) => <TextField {...params} label="Labs" variant="outlined" />}
                           />                            
                        )
                    }, 
                ]}
                data={data}
                title='VCG Groups'
                style={{maxWidth:'90%',marginLeft:'250px'}}
                options={{
                    exportButton:true
                }}
                editable={{
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        handleEdit(newData);
                        resolve();
                      }, 1000)
                    }),

                    onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            handleDelete(oldData.pk);
                            resolve();
                        }, 1000);
                    }),
                }}
                options={{
                    actionsColumnIndex: -1,
                    exportButton:true
                }}                
            />
        </div>
    )
}