import React from 'react';
import MaterialTable from 'material-table';

export default function Table({results}){
    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Replicate ID', field:'replicate_id'},
                    {title:'Sample ID', field:'sample_id'},
                    {title:'Stock ID', field:'stock_id'},
                    {title:'Date Inoculated', field:'date_inoculated',},
                    {title:'Date Scored', field: 'date_scored'},
                    {title:'Date Planted', field: 'date_planted'},
                    {title:'Disease Score', field: 'disease_score'},
                    {title:'Test', field:'test'},     
                    {title:'Tray', field:'tray'}, 
                    {title:'Rice Genotype', field:'rice_genotype'}, 
                    {title:'Isolate', field:'isolate'}, 
                    {title:'Person', field:'person'}, 
                    {title:'Lab', field:'lab'}, 
                    {title:'Project', field:'project'}, 
                ]}
                data={results}
                title='Pathotyping Results'
                style={{maxWidth:'90%',marginLeft:'250px',marginTop:150}}
                options={{
                    exportButton:true
                }}
            />
        </div>
    )
}