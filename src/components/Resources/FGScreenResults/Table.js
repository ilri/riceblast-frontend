import React from 'react';
import MaterialTable from 'material-table';

export default function Table({results}){
    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Rice Genotype', field:'rice_genotype'},
                    {title:'Fungal Gene', field:'fungal_gene'},
                    {title:'PCR Results', field:'pcr_results'},
                    {title:'Replicate id', field:'replicate_id',},
                    {title:'Sample ID', field: 'sample_id'},
                ]}
                data={results}
                title='Fungal Gene Screen Results'
                style={{maxWidth:'70%',margin:'0 auto',marginTop:150}}
                options={{
                    exportButton:true
                }}
            />
        </div>
    )
}