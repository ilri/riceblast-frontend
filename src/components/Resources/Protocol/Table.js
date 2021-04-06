import React from 'react';
import MaterialTable from 'material-table';
import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from '@material-ui/core/IconButton';
import {fileDownload} from '../../../services/downloads';
import { makeStyles } from '@material-ui/core/styles';
import {Input} from 'semantic-ui-react';






const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },

}))


export default function Table({handleDelete,handleDeleteSelected,handleEdit,people,labs,data}){
    const classes = useStyles();
    const handleDownload = (file) => {
        console.log(file);
        const path = file.split('/media')[1];
        const name = file.split('/media/Protocol/protocols')[1];
              
        fileDownload(path,name);
    };
    const handleFileChange = (event,props) => {
        const file = event.target.files[0];
        console.log(file);
        props.onChange(file);
    };
    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Name', field:'name'},
                    {
                        title:'Protocol', 
                        field:'protocol',
                        render: rowData => (
                            <IconButton aria-label="delete" onClick={() => handleDownload(rowData.protocol)} className={classes.margin}>
                                <GetAppIcon />
                            </IconButton>
                        ),
                        editComponent: props => (
                            <Input
                                id="outlined-secondary"
                                size='small'
                                name='protocol'
                                variant="outlined"
                                color="primary"
                                type='file'
                                onChange={(event) => handleFileChange(event,props)}
                            />
                        )                    
                    },
                ]}
                data={data}
                title='Protocols'
                style={{maxWidth:'90%',marginLeft:'250px'}}
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