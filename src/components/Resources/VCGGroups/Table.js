import React from 'react';
import MaterialTable from 'material-table';

export default function Table({groups}){
    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Group', field:'group'},
                    {title:'VCG ID', field:'vcg_id'},
                    {title:'Lab', field:'lab'},
                    {title:'Person', field:'person',},
                ]}
                data={groups}
                title='VCG Groups'
                style={{maxWidth:'90%',marginLeft:'250px',marginTop:150}}
                options={{
                    exportButton:true
                }}
            />
        </div>
    )
}