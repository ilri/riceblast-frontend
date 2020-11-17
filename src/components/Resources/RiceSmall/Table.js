
import React from 'react';
import MaterialTable from 'material-table';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Table({data,handleEdit,handleDelete,riceGenotypes,labs,people}){

    const findID = (props,event,newData,field) => {
        switch(field){
            case 'rice_genotype':
                riceGenotypes.map((data) => {
                    if(data.name === newData){
                        props.onChange(data.pk);
                        console.log(data.pk);
                        console.log();
                    }
                });
                break;
            case 'lab':
                labs.map((data) => {
                    if(data.lab_name === newData){
                        props.onChange(data.pk);
                        console.log(data.pk);

                    }
                });
                break;
            default:
                people.map((data) => {
                    if(data.full_name === newData){
                        props.onChange(data.pk);
                        console.log(data.pk);

                    }
                });
                break;
        }
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
                                    findID(props,event,newData,'rice_genotype')
                                }}
                                getOptionLabel={(option) => option.name}
                                size='small'
                                renderInput={(params) => <TextField {...params} label="Rice Genotype" variant="outlined" />}
                           />                            
                        )
                    },                     
                    {title:'Taxa Name', field:'taxa_name'},
                    {title:'Sequence ID', field:'sequence_id'},
                    {title:'Description', field:'description',},
                    {title:'Sequence Data', field:'sequence_data',},
                    {title:'Chromosome ID', field:'chromosome_id',},
                    {title:'Chromosome Site ID', field:'chromosome_site_id',},
                    {title:'Loci ID', field:'loci_id',},
                    {
                        title:'Person', 
                        field:'person',
                        editComponent: props => (
                            <Autocomplete 
                                id="combo-box-demo"
                                options={people}
                                onInputChange={(event,newData) => {
                                    findID(props,event,newData,'person')
                                }}
                                getOptionLabel={(option) => option.full_name}
                                size='small'
                                renderInput={(params) => <TextField {...params} label="People" variant="outlined" />}
                           />                            
                        )
                    }, 
                    {
                        title:'Lab', 
                        field:'lab',
                        editComponent: props => (
                            <Autocomplete 
                                id="combo-box-demo"
                                options={labs}
                                onInputChange={(event,newData) => {
                                    findID(props,event,newData,'lab')
                                }}
                                getOptionLabel={(option) => option.lab_name}
                                size='small'
                                renderInput={(params) => <TextField {...params} label="Labs" variant="outlined" />}
                           />                            
                        )
                    }, 
                    {title:'Target Gene', field:'target_gene',},
                ]}
                data={data}
                title='Rice Small DNA Fragments Sequence'
                style={{maxWidth:'90%',marginLeft:'250px'}}
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
                    actionsColumnIndex: -1,
                    exportButton:true
                }}
            />
        </div>
    )
}
