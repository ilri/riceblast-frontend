import React from 'react';
import MaterialTable from 'material-table';
import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from '@material-ui/core/IconButton';
import {fileDownload} from '../../../services/downloads';
import { makeStyles } from '@material-ui/core/styles';
import {Input} from 'semantic-ui-react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },

}));



export default function Table({handleDelete,handleDeleteSelected,handleEdit,people,labs,data}){
    const classes = useStyles();
    const handleDownload = (file) => {
        console.log(file);
        const path = file.split('/media')[1];
        const name = file.split('/media/RiceGBS/rice_gbs_dataset')[1];
              
        fileDownload(path,name);
    };
    const handleFileChange = (event,props) => {
        const file = event.target.files[0];
        console.log(file);
        props.onChange(file);
    };
        
    const findID = (props,event,newData,field) => {
        switch(field){
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
                    {title:'Rice GBS Name', field:'rice_gbs_name'},
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
                    {
                        title:'GBS Dataset', 
                        field:'gbs_dataset',
                        render: rowData => (
                            <IconButton aria-label="delete" onClick={() => handleDownload(rowData.gbs_dataset)} className={classes.margin}>
                                <GetAppIcon />
                            </IconButton>
                        ),
                        editComponent: props => (
                            <Input
                                id="outlined-secondary"
                                size='small'
                                name='gbs_dataset'
                                variant="outlined"
                                color="primary"
                                type='file'
                                onChange={(event) => handleFileChange(event,props)}
                            />
                        )  
                    },
                ]}
                data={data}
                title='Rice GBS'
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
            />
        </div>
    )
}