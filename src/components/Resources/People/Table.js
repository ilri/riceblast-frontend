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
    description:{
        padding:theme.spacing(1),
        fontSize:'18px',
    },
    actions:{
        paddingTop:theme.spacing(1),
        display:'flex',
    }
}));





const UserActivation = ({user,handleClick,anchorEl,handleActivate}) => {
    const classes = useStyles();
    return(
    <div>        
        <Popper open={(user ? true : false)} anchorEl={anchorEl} >
        {/* <p>{rowData.full_name}</p> */}
            <div className={classes.paper}>
              <div className={classes.description}>Are you sure you want to {user.user.is_active ? 'DEACTIVATE':'ACTIVATE'} {user.full_name}'s account?</div> 
              <Divider />
              <div className={classes.actions}>
                {user.user.is_active ? (
                    <Button variant='outlined' color="secondary" size='small' onClick={handleActivate('deactivate',user.user.username)}>Deactivate</Button>
                ) : (
                    <Button variant='outlined' color="primary" size='small' onClick={handleActivate('activate',user.user.username)}>Activate</Button>
                )}
                <Button style={{marginLeft:'auto'}} variant='contained' color="secondary" size='small' onClick={handleClick(user)}>Close</Button>
              </div>                                      
            </div>                
        </Popper>
    </div>
    )
};

export default function Table({data,handleActivate,handleClick,anchorEl,user}){
   


    
    

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
                                <Checkbox checked={rowData.user.is_active} color='primary' onClick={handleClick(rowData)} />
                                {user ? (<UserActivation user={user} handleClick={handleClick} anchorEl={anchorEl} handleActivate={handleActivate} />):''}                                
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