import React from 'react';
import MaterialTable from 'material-table';
import Checkbox from '@material-ui/core/Checkbox';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    paper: {
      border: '1px solid',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    },
}));
export default function Table({data,handleActiveUser}){
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    

    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Full Name', field:'full_name'},
                    {title:'Email', field:'user.email'},
                    {title:'Username', field:'user.username',},
                    {title:'Telephone Number', field:'telephone_number'},
                    {title:'Lab', field:'lab',},
                    {title:'Designation', field:'designation'},
                    {
                        title:'Active', field:'user.is_active',
                        render: rowData => 
                        <div>
                            <Checkbox checked={rowData.user.is_active} color='primary' aria-describedby={id} onClick={handleClick} />
                            <Popper id={id} open={open} anchorEl={anchorEl}>
                                <div className={classes.paper}>
                                  <div>Are you sure you want to {rowData.user.is_active ? 'DEACTIVATE':'ACTIVATE'} {rowData.full_name}'s account?</div> 
                                  <Divider />
   
                                  
                                </div>
                              
                            </Popper>
                        </div>
                    }                    
                ]}
                data={data}
                title='People'
                style={{maxWidth:'80%',marginLeft:'250px',marginTop:50}}
                options={{
                    exportButton:true,
                    actionsColumnIndex:-1,
                }}
                actions={[
                    {
                        icon:'delete',
                        tooltip:'Delete User',
                        onClick:(event, rowData) => {

                        }
                    }
                ]}
            />
        </div>
    )
}