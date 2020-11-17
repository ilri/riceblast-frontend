import React from 'react';
import MaterialTable from 'material-table';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Table({data,handleEdit,handleDelete,riceGenotypes,labs,isolates,people}){
    
    
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
            case 'isolate':
                isolates.map((data) => {
                    if(data.isolate_name === newData){
                        props.onChange(data.pk);
                        console.log(data.pk);

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
                    {title:'Replicate ID', field:'replicate_id'},
                    {title:'Sample ID', field:'sample_id'},
                    {title:'Stock ID', field:'stock_id'},
                    {
                        title:'Date Inoculated', 
                        field:'date_inoculated',
                        render: (rowData) => {
                            let date = '';
                            if(rowData.date_inoculated !== ''){
                                date = new Date(rowData.date_inoculated).getFullYear();
                            }
                            return (
                                <Box color="text.primary">
                                    {date}
                                </Box>
                            )

                        }
                    },

                    {
                        title:'Date Scored', 
                        field: 'date_scored',
                        render: (rowData) => {
                            let date = '';
                            if(rowData.date_scored !== ''){
                                date = new Date(rowData.date_scored).getFullYear();
                            }
                            return (
                                <Box color="text.primary">
                                    {date}
                                </Box>
                            )

                        }
                    },

                    {
                        title:'Date Planted', 
                        field: 'date_planted',
                        render: (rowData) => {
                            let date = '';
                            if(rowData.date_planted !== ''){
                                date = new Date(rowData.date_planted).getFullYear();
                            }
                            return (
                                <Box color="text.primary">
                                    {date}
                                </Box>
                            )

                        }
                    },
                    {title:'Disease Score', field: 'disease_score'},
                    {title:'Test', field:'test'},     
                    {title:'Tray', field:'tray'}, 
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
                    {
                        title:'Isolate', 
                        field:'isolate',
                        editComponent: props => (
                            <Autocomplete 
                                id="combo-box-demo"
                                options={isolates}
                                onInputChange={(event,newData) => {
                                    findID(props,event,newData,'isolate')
                                }}
                                getOptionLabel={(option) => option.isolate_name}
                                size='small'
                                renderInput={(params) => <TextField {...params} label="Isolates" variant="outlined" />}
                           />                            
                        )
                    }, 
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
                ]}
                data={data}
                title='Pathotyping Results'
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