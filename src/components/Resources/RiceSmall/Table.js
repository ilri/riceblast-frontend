import React from 'react';
import MaterialTable from 'material-table';

export default function Table({groups}){
    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Rice Genotype', field:'rice_genotype'},
                    {title:'Taxa Name', field:'taxa_name'},
                    {title:'Sequence ID', field:'sequence_id'},
                    {title:'Description', field:'description',},
                    {title:'Sequence Data', field:'sequence_data',},
                    {title:'Chromosome ID', field:'chromosome_id',},
                    {title:'Chromosome Site ID', field:'chromosome_site_id',},
                    {title:'Loci ID', field:'loci_id',},
                    {title:'Person', field:'person',},
                    {title:'Lab', field:'lab',},
                    {title:'Target Gene', field:'target_gene',},
                ]}
                data={groups}
                title='Rice Small DNA FragmentsSequence'
                style={{maxWidth:'90%',marginLeft:'250px',marginTop:150}}
                options={{
                    exportButton:true
                }}
            />
        </div>
    )
}