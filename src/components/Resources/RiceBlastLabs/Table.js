import React from 'react';
import MaterialTable from 'material-table';

export default function Table({labs}){
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
                style={{maxWidth:'50%',margin:'0 auto'}}
                options={{
                    exportButton:true
                }}
            />
        </div>
    )
}