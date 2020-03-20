import React from 'react';
import MaterialTable from 'material-table';

export default function Table({data}){
    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Rice GBS Name', field:'rice_gbs_name'},
                    {title:'Person', field:'person'},
                    {title:'Lab', field:'lab'},
                    {title:'GBS Dataset', field:'gbs_dataset',},
                ]}
                data={data}
                title='Rice GBS'
                style={{maxWidth:'90%',marginLeft:'250px',marginTop:150}}
                options={{
                    exportButton:true
                }}
            />
        </div>
    )
}