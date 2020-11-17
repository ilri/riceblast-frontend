
import React from 'react';
import MaterialTable from 'material-table';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';

export default function Table({data,handleEdit,handleDelete,isolates,labs,vcgGroups}){

    const findID = (props,event,newData,field) => {
        switch(field){
            case 'isolate':
                isolates.map((data) => {
                    if(data.isolate_name === newData){
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
            case 'vcg':
                vcgGroups.map((data) => {
                    if(data.group === newData){
                        props.onChange(data.pk);
                        console.log(data.pk);

                    }
                });
                break;
            default:
                break;
        }
    };
    const handleCheckBoxClick = (props) => (event) => {
        console.log(props);
        props.onChange(!props.rowData[props.columnDef.field])
        // console.log(props.rowData);

        // setUser(user ? null : rowData);
        // setAnchorEl(anchorEl ? null : event.currentTarget);
    }    
    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'VCG Test ID', field:'vcg_test_id'},
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
                                renderInput={(params) => <TextField {...params} label="Isolate" variant="outlined" />}
                           />                            
                        )
                    },
                    {title:'VCG Tester ID', field:'vcg_tester_id'},
                    {
                        title:'Tester Complimented Isolate', 
                        field:'tester_complimented_isolate',
                        editComponent: props => (
                        <div> 
                            <Checkbox 
                                checked={props.rowData.tester_complimented_isolate} 
                                name='tester_complimented_isolate'
                                color='primary' 
                                onClick={handleCheckBoxClick(props)} 
                            />
                        </div>                            
                        ),
                        render: rowData => (

                        <div> 
                            <Checkbox 
                                checked={rowData.tester_complimented_isolate} 
                                name='tester_complimented_isolate'
                                color='primary' 
                                disabled
                                
                            />
                        </div>
                        )



                    },
                    {
                        title:'Tester and Control', 
                        field:'tester_and_control',
                        render: rowData => (
                        <div> 
                            <Checkbox 
                                checked={rowData.tester_and_control} 
                                name='tester_complimented_isolate'
                                color='primary' 
                                disabled
                            />
                        </div>
                        ),
                        editComponent: props => (
                        <div> 
                            <Checkbox 
                                checked={props.rowData.tester_and_control} 
                                name='tester_complimented_isolate'
                                color='primary' 
                                onClick={handleCheckBoxClick(props)} 
                            />
                        </div>
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
                    {title:'VCG Replicate ID', field:'vcg_replicate_id',},
                    {
                        title:'VCG Group', 
                        field:'vcg',
                        editComponent: props => (
                            <Autocomplete 
                                id="combo-box-demo"
                                options={vcgGroups}
                                onInputChange={(event,newData) => {
                                    findID(props,event,newData,'vcg')
                                }}
                                getOptionLabel={(option) => option.group}
                                size='small'
                                renderInput={(params) => <TextField {...params} label="VCG Group" variant="outlined" />}
                           />                            
                        )
                    },
                ]}
                data={data}
                title='VCG Test Results'
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
 