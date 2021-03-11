import React from 'react';
import MaterialTable from 'material-table';

export default function Table({genes,handleEdit,handleDelete}){
    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Name', field:'name'},
                    {title:'Chromosome ID', field:'chromosome_id'},
                    {title:'Marker Type', field:'marker_type'},
                    {title:'Marker Name', field:'marker_name'},
                    {title:'Donor Line', field: 'donor_line'},
                    {title:'Resistance Type', field: 'resistance_type'},
                    {title:'Reference', field: 'reference'},
                ]}
                data={genes}
                title='Rice Genes'
                style={{maxWidth:'70%',margin:'0 auto'}}
                options={{
                    exportButton:true,
                    actionsColumnIndex: -1

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

            />
        </div>
    )
}