import React from 'react';
import MaterialTable from 'material-table';
import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from '@material-ui/core/IconButton';
import {fileDownload} from '../../../services/downloads';
import { makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },

}));


export default function Table({data}){

    const classes = useStyles();
    const handleDownload = (file) => {
        fileDownload(file);
    };


    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Fungal GBS Name', field:'fungal_gbs_name'},
                    {title:'Person', field:'person'},
                    {title:'Lab', field:'lab'},
                    {
                        title:'GBS Dataset', 
                        field:'gbs_dataset',
                        render: rowData => (
                            <IconButton disabled aria-label="delete" onClick={() => handleDownload(rowData.gbs_dataset)} className={classes.margin}>
                                <GetAppIcon />
                            </IconButton>
                        )  
                    },
                ]}
                data={data}
                title='Fungal GBS'
                style={{maxWidth:'90%',marginLeft:'250px',}}
                options={{
                    exportButton:true,
                    exportButton:true
                }}
            />
        </div>
    )
}