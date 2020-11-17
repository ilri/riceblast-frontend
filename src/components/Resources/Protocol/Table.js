import React from 'react';
import MaterialTable from 'material-table';

export default function Table({data}){
    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Name', field:'name'},
                    {title:'Protocol', field:'protocol',},
                ]}
                data={data}
                title='Protocols'
                style={{maxWidth:'90%',marginLeft:'250px'}}
                options={{
                    exportButton:true
                }}
            />
        </div>
    )
}