import React from 'react';
import MaterialTable from 'material-table';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import {fileDownload} from '../../../services/downloads';
import {Input} from 'semantic-ui-react';


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },

}));
export default function Table({data,handleDelete,handleEdit,people,handleDeleteSelected}){
    const classes = useStyles();

    const findID = (props,event,newData,field) => {

        people.map((data) => {
            if(data.full_name === newData){
                props.onChange(data.pk);
                console.log(data.pk);
            }
        });
    
    };
    const handleDownload = (file) => {
        console.log(file);
        const path = file.split('/media')[1];
        const name = file.split('/media/FungalSmallDnaFragmentsSequence/fungal_gene_sequence')[1];
  
              
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
                    {title:'Activity Name', field:'activity_name'},
                    {title:'Fungal Gene Name', field:'fungal_gene_name'},
                    {title:'Fungal', field:'fungal'},
                    {
                        title:'Fungal Gene Sequence', 
                        field:'fungal_gene_sequence',
                        render: rowData => (
                        <IconButton aria-label="delete" onClick={() => handleDownload(rowData.fungal_gene_sequence)} className={classes.margin}>
                            <GetAppIcon />
                        </IconButton>
                        ),
                        editComponent: props => (
                            <Input
                                id="outlined-secondary"
                                size='small'
                                name='fungal_gene_sequence'
                                variant="outlined"
                                color="primary"
                                type='file'
                                onChange={(event) => handleFileChange(event,props)}
                            />
                        )
                    },
                    {title:'Date of Sequence', field:'date_of_sequence',},
                    {title:'Project Name', field:'project_name',},
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
                    {title:'Target Gene', field:'target_gene',},
                ]}
                data={data}
                title='Fungal DNA Amplicon Sequence'
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
