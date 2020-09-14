import React from 'react';
import MaterialTable from 'material-table';

export default function Table({riceGenotypes,handleEdit,handleDelete}){
    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Name', field:'name'},
                    {title:'Rice Genotype ID', field:'rice_genotype_id'},
                    {title:'Resistance Genes', field:'resistance_genes'},
                    {title:'R Gene Sources', field:'r_gene_sources',},
                    {title:'Susceptible Background', field: 'susceptible_background'},
                    {title:'Accession Number', field: 'accession_number'},
                    {title:'Pedigree', field: 'pedigree'},
                    {title:'Category', field:'category'},     
                ]}
                data={riceGenotypes}
                title='Rice Genotypes'
                style={{maxWidth:'70%',margin:'0 auto'}}
                options={{
                    exportButton:true
                }}
                editable={{
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        handleEdit(newData);
                        resolve();
                      }, 1000)
                    }),

                    onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            handleDelete(oldData.pk);
                            resolve();
                        }, 1000);
                    }),
                }}
                options={{
                    actionsColumnIndex: -1
                }}
            />
        </div>
    )
} 