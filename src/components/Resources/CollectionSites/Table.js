import React from 'react';
import MaterialTable from 'material-table';

export default function Table({sites}){
    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Name', field:'name'},
                    {title:'Type', field:'type'},
                    {title:'Latitude', field:'latitude'},
                    {title:'Longitude', field:'longitude',},
                    {title:'Country', field: 'country'},
                    {title:'Project', field: 'project'},
                    {title:'Person', field: 'person'},
                ]}
                data={sites}
                title='Fungal Collection Sites'
                style={{maxWidth:'70%',margin:'0 auto',marginTop:150}}
                options={{
                    exportButton:true
                }}
            />
        </div>
    )
}