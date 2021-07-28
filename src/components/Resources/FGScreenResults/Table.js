import React from 'react';
import MaterialTable from 'material-table';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';






export default function Table({data,handleDeleteSelected,handleDelete,handleEdit,isolates,genes}){

    const findIsolateID = (props,event,newData) => {
        console.log(newData)
        isolates.map((isolate) => {
            if(isolate.isolate_id === newData){
                props.onChange(isolate.pk);
            }
        })
    };


    return(
        <div>
            <MaterialTable 
                columns={[


                    {title:'Fungal Gene', field:'fungal_gene'},

                    {
                        title:'Isolate', 
                        field:'isolate',

                        editComponent: props => (
                            <Autocomplete 
                                id="combo-box-demo"
                                options={isolates}
                                onInputChange={(event,newData) => {
                                    findIsolateID(props,event,newData)
                                }}
                                getOptionLabel={(option) => option.isolate_id}
                                size='small'
                                renderInput={(params) => <TextField {...params} label="Isolates" variant="outlined" />}
                           />                            
                        )
                    },


                    {title:'PCR Results', field:'pcr_results'},
                    {title:'Replicate id', field:'replicate_id',},
                    {title:'Sample ID', field: 'sample_id'},
                ]}
                data={data}
                title='Fungal Gene Screen Results'
                style={{maxWidth:'70%',margin:'0 auto'}}
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
                    exportButton:true,
                    actionsColumnIndex: -1,
                    selection: true,
                }} 

                actions={[
                    {
                      tooltip: 'Remove All Selected',
                      icon: 'delete',
                      onClick: (evt, data) =>{
                          console.log(data);                          
                          handleDeleteSelected(data)                      
                        } 
                    }
                  ]}
            />
        </div>
    )
}