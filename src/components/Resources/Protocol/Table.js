import React from 'react';
import MaterialTable from 'material-table';

export default function Table({data}){
    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Name', field:'name'},
                    {title:'Protocol ID', field:'isolate'},
                    {title:'Key Reference', field:'key_reference'},
                    {title:'Protocol', field:'protocol',},
                    {title:'Person', field:'tester_and_control',},
                    {title:'Lab', field:'lab',},
                    {title:'Protocol Modified', field:'protocol_modified'},
                    {title:'Related Protocols', field:'vcg',},
                ]}
                data={data}
                title='Protocols'
                style={{maxWidth:'90%',marginLeft:'250px',marginTop:150}}
                options={{
                    exportButton:true
                }}
            />
        </div>
    )
}