import React from 'react';
import MaterialTable from 'material-table';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PathotypingService from '../../../services/pathotypingResults';

const service = new PathotypingService();

export default function Table({handleEdit,handleDeleteSelected,handleDelete,
tableRef,riceGenotypes,labs,isolates,people}){
    const [selectedRows, setSelectedRows] = React.useState([]);
    const [pageSelected, setPageSelected] = React.useState([]); //




    const handleSelectionChange = (rows) => {
        console.log(rows);
        setPageSelected(rows);
        // setSelectedRows([...selectedRows,...rows]);

        // console.log(selectedRows);
    };

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
                    if(data.isolate_id === newData){
                        props.onChange(data.pk);
                        console.log(data.pk);
                        return;

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
                                getOptionLabel={(option) => option.isolate_id }
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
                data={
                    query => new Promise((resolve,reject) => {
                        // let url = 'http://localhost:8000/api/pathotyping_results';
                        // url += 'page=' + query.pageSize
                        
                        query.page = query.page + 1;
                        // setTablePage,setTablePageSize
                        // getData(query.page,query.pageSize,resolve,reject);
                        // query.page = query.page + 1;
                        // setSelectedRows([...selectedRows,...pageSelected]);
                        // setPageSelected([]);
                        service.getData(query.page,query.pageSize)
                        .then(result => {
                            console.log(result)
                          resolve({
                            data: result.data.data.map(row => selectedRows.find(selected => selected.pk === row.pk) ? { ...row, tableData: { checked: true } } : row),
                            page: query.page - 1,
                            totalCount: result.data.count,
                          })
                        })
                    })
                }
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
                    exportButton:true,
                    actionsColumnIndex: -1,
                    selection: true,
                    pageSize:25,
                    pageSizeOptions:[25,50,100]
                }} 
                tableRef={tableRef}
                actions={[
                    {
                      tooltip: 'Remove All Selected',
                      icon: 'delete',
                      onClick: (evt, data) =>{
                        setSelectedRows([...selectedRows,...pageSelected]);
                          handleDeleteSelected(selectedRows);                      
                        } 
                    },
                    {
                        icon: 'refresh',
                        tooltip: 'Refresh Data',
                        isFreeAction: true,
                        onClick: () => tableRef.current && tableRef.current.onQueryChange(),
                    }
                  ]}
                onSelectionChange={handleSelectionChange}
                // onChangePage={() => console.log('ray')}
            />
        </div>
    )
}