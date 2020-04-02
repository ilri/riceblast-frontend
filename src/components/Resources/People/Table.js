import React from 'react';
import MaterialTable from 'material-table';

export default function Table({data}){
    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Full Name', field:'full_name'},
                    {title:'Email', field:'email'},
                    {title:'Username', field:'username',},
                    {title:'Telephone Number', field:'telephone_number'},
                    {title:'Lab', field:'lab',},
                    {title:'Designation', field:'designation'},                    
                ]}
                data={data}
                title='People'
                style={{maxWidth:'80%',marginLeft:'250px',marginTop:50}}
                options={{
                    exportButton:true
                }}
            />
        </div>
    )
}