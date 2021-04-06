import React from 'react';
import MaterialTable from 'material-table';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';






export default function Table({data,handleDeleteSelected,handleDelete,handleEdit,riceGenotypes,genes}){

    const findGenotypeID = (props,event,newData) => {
        console.log(newData)
        riceGenotypes.map((genotype) => {
            if(genotype.name === newData){
                props.onChange(genotype.pk);
            }
        })
    };
    
    const findGeneID = (props,event,newData) => {
        console.log('nugu');
        genes.map((gene) => {
            if(gene.name === newData){
                props.onChange(gene.pk);
            }
        });
    };


    return(
        <div>
            <MaterialTable 
                columns={[

                    {
                        title:'Rice Genotype', 
                        field:'rice_genotype',

                        editComponent: props => (
                            <Autocomplete 
                                id="combo-box-demo"
                                options={riceGenotypes}
                                onInputChange={(event,newData) => {
                                    findGenotypeID(props,event,newData)
                                }}
                                getOptionLabel={(option) => option.name}
                                size='small'
                                renderInput={(params) => <TextField {...params} label="Rice Genotype" variant="outlined" />}
                           />                            
                        )
                    },

                    {
                        title:'Rice Gene', 
                        field:'rice_gene',
                        editComponent: props => (
                            <Autocomplete 
                                id="combo-box-demo"
                                options={genes}
                                onInputChange={(event,newData) => {
                                    findGeneID(props,event,newData)
                                }}
                                getOptionLabel={(option) => option.name}
                                size='small'
                                renderInput={(params) => <TextField {...params} label="Rice Gene" variant="outlined" />}
                           />                            
                        )                       
                    },
                    {title:'PCR Results', field:'pcr_results'},
                    {title:'Replicate id', field:'replicate_id',},
                    {title:'Sample ID', field: 'sample_id'},
                ]}
                data={data}
                title='Rice Gene Screen Results'
                style={{maxWidth:'70%',margin:'0 auto'}}
                options={{
                    exportButton:true,
                    actionsColumnIndex: -1,
                    selection: true,
                }} 

                actions={[
                    {
                      tooltip: 'Remove All Selected',
                      icon: 'delete',
                      onClick: (evt, data) =>{
                          console.log(data);                          
                          handleDeleteSelected(data)                      
                        } 
                    }
                  ]}
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
            />
        </div>
    )
}