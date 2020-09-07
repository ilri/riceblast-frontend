import React from 'react';
import MaterialTable from 'material-table';

export default function Table({labs, handleDelete,handleEdit}){
    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Lab ID', field:'lab_id'},
                    {title:'Lab Name', field:'lab_name'},
                    {title:'Country', field:'country'},
                    {title:'Institution', field:'institution',},
                    {title:'Principal Investigator', field: 'principal_investigator'}
                ]}
                data={labs}
                title='Rice Blast Labs'
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
                            console.log('ray');
                            handleDelete(oldData.pk);
                            resolve();
                        }, 1000);
                    }),
                }}
                options={{
                    actionsColumnIndex: -1
                }} 
            />
        </div>
    )
} 