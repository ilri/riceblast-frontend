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

}))


export default function Table({data}){
    const classes = useStyles();
    const handleDownload = (file) => {
        console.log(file);
        const path = file.split('/media')[1];
        const name = file.split('/media/Protocol/protocols')[1];
              
        fileDownload(path,name);
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
                        )                    
                    },
                ]}
                data={data}
                title='Protocols'
                style={{maxWidth:'90%',marginLeft:'250px'}}
                options={{
                    exportButton:true,
                    actionsColumnIndex:-1,
                }}
            />
        </div>
    )
}