import React from 'react';
import MaterialTable from 'material-table';

export default function Table({genes}){
    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Name', field:'name'},
                    {title:'Chromosome ID', field:'chromosome_id'},
                    {title:'Marker', field:'marker'},
                    {title:'Donor Line', field: 'donor_line'},
                    {title:'Resistance Type', field: 'resistance_type'},
                    {title:'Reference', field: 'reference'},
                ]}
                data={genes}
                title='Rice Genes'
                style={{maxWidth:'70%',margin:'0 auto',marginTop:150}}
                options={{
                    exportButton:true
                }}
            />
        </div>
    )
}