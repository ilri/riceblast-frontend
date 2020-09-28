import React from 'react';
import MaterialTable from 'material-table';
import Box from '@material-ui/core/Box';
import PeopleService from '../../../services/people';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



const peopleService = new PeopleService();


export default function Table({isolates,handleDelete,handleEdit}){
    const [people, setPeople] = React.useState([]);

    React.useEffect(() => {
        getPeople();
    },[]);

    const getPeople = () => {
        peopleService.getData().then(
            response => {
                setPeople(response.data);
            }
        ).then(
            errors => {
                console.log(errors);
            }
        )
    };
    const findPersonID = (props,event,newData) => {
        console.log(newData)
        people.map((person) => {
            if(person.full_name === newData){
                props.onChange(person.user.pk);
            }
        })
    };    
    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Isolate ID', field:'isolate_id'},
                    {title:'Name', field:'name'},
                    {title:'Taxa Name', field:'taxa_name'},
                    {title:'Tissue Type', field:'tissue_type',},
                    {
                        title:'Date Collected', 
                        field: 'date_collected',
                        render: (rowData) => {
                            let date = '';
                            if(rowData.date_collected !== ''){
                                date = new Date(rowData.date_collected).getFullYear();
                            }
                            return (
                                <Box color="text.primary">
                                    {date}
                                </Box>
                            )

                        }
                    },
                    {
                        title:'Date Isolated', 
                        field: 'date_isolated',
                        render: (rowData) => {
                            let date = '';
                            if(rowData.date_isolated !== ''){
                                date = new Date(rowData.date_isolated).getFullYear();
                            }
                            return (
                                <Box color="text.primary">
                                    {date}
                                </Box>
                            )

                        }                        
                    },
                    {title:'Country', field: 'country'},
                    {title:'Host Genotype', field:'host_genotype'},
                    {title:'Fungal Collection Site', field: 'collection_site'},

                    {
                        title:'Person', 
                        field: 'person',
                        editComponent: props => (
                            <Autocomplete 
                                id="combo-box-demo"
                                options={people}
                                onInputChange={(event,newData) => {
                                    findPersonID(props,event,newData)
                                }}
                                getOptionLabel={(option) => option.full_name}
                                size='small'
                                renderInput={(params) => <TextField {...params} label="People" variant="outlined" />}
                           />                            
                        )
                    },
                ]}
                data={isolates}
                title='Isolates'
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
                            console.log('ray');
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