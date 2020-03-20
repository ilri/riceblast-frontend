import React from 'react';
import MaterialTable from 'material-table';

export default function Table({data}){
    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'VCG Test ID', field:'vcg_test_id'},
                    {title:'Isolate', field:'isolate'},
                    {title:'VCG Tester ID', field:'vcg_tester_id'},
                    {title:'Tester Complimented Isolate', field:'tester_complimented_isolate',},
                    {title:'Tester and Control', field:'tester_and_control',},
                    {title:'Lab', field:'lab',},
                    {title:'VCG Replicate ID', field:'vcg_replicate_id',},
                    {title:'VCG Group', field:'vcg',},
                    {title:'Project', field:'project',},
                ]}
                data={data}
                title='VCG Test Results'
                style={{maxWidth:'90%',marginLeft:'250px',marginTop:150}}
                options={{
                    exportButton:true
                }}
            />
        </div>
    )
}
