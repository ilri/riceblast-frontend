import React from 'react';
import MaterialTable from 'material-table';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import {fileDownload} from '../../../services/downloads';
const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },

}));
export default function Table({data,handleDelete,handleEdit,people}){
    const classes = useStyles();

    const findID = (props,event,newData,field) => {

        people.map((data) => {
            if(data.lab_name === newData){
                props.onChange(data.pk);
                console.log(data.pk);
            }
        });
    
    };
    const handleDownload = (file) => {
        fileDownload(file);
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
                                defaultValue={(option) => option.pk}
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
                title='Fungal Small DNA FragmentsSequence'
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
