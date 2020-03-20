import React from 'react';
import MaterialTable from 'material-table';

export default function Table({isolates}){
    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Isolate ID', field:'isolate_id'},
                    {title:'Name', field:'name'},
                    {title:'Taxa Name', field:'taxa_name'},
                    {title:'Tissue Type', field:'tissue_type',},
                    {title:'Date Collected', field: 'date_collected'},
                    {title:'Date Isolated', field: 'date_isolated'},
                    {title:'Country', field: 'country'},
                    {title:'Host Genotype', field:'host_genotype'},
                    {title:'Fungal Collection Site', field: 'collection_site'},
                    {title:'Person', field: 'person'},
                ]}
                data={isolates}
                title='Isolates'
                style={{maxWidth:'70%',margin:'0 auto',marginTop:150}}
                options={{
                    exportButton:true
                }}
            />
        </div>
    )
}