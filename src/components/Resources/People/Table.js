import React from 'react';
import MaterialTable from 'material-table';
import Checkbox from '@material-ui/core/Checkbox';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PeopleService from '../../../services/people';

const service = new PeopleService();

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

export default function Table({data,userloggedIn,handleActivate,handleEdit,
labs,handleClick,anchorEl,user,handleDeleteUser}){
    const ROLES = ['ADMIN','USER'];
    const findID = (props,event,newData) => {

        labs.map((data) => {
            if(data.lab_name === newData){
                props.onChange(data.pk);
                console.log(data.pk)
            }
        });
    };

    return(
        <div>
            <MaterialTable 
                columns={[
                    {title:'Full Name', field:'full_name'},
                    {title:'Email', field:'user.email'},
                    {title:'Username', field:'user.username',},
                    {title:'Telephone Number', field:'telephone_number'},
                    {
                        title:'Lab', 
                        field:'lab',
                        editComponent: props => (
                            <Autocomplete 
                                id="combo-box-demo"
                                options={labs}
                                onInputChange={(event,newData) => {
                                    findID(props,event,newData)
                                }}
                                getOptionLabel={(option) => option.lab_name}
                                size='small'
                                renderInput={(params) => <TextField {...params} label="Labs" variant="outlined" />}
                           />                            
                        )
                    },
                    {title:'Designation', field:'designation'},
                    {
                        title:'Role', 
                        field:'role',
                        editComponent: props =>(
                            <Autocomplete 
                                id="combo-box-demo"
                                options={ROLES}
                                onInputChange={(event,newData) => {
                                    props.onChange(newData);
                                }}
                                getOptionLabel={(option) => option}
                                size='small'
                                renderInput={(params) => <TextField {...params} label="Role" variant="outlined" />}
                            /> 
                        )
                    },
                    {
                        title:'Active', field:'user.is_active',editable:'never',
                        render: rowData =>(

                            <div> 
                                <Checkbox checked={rowData.user.is_active} color='primary' onClick={handleClick(rowData)} />
                                {user ? (<UserActivation user={user} handleClick={handleClick} anchorEl={anchorEl} handleActivate={handleActivate} />):''}                                

                            </div>
                        ),

                        
                    }                    
                ]}
                data={data}
                title='People'
                style={{marginLeft:'150px',marginTop:50}}
                options={{
                    exportButton:true,
                    actionsColumnIndex:-1,
                }}
                editable={{
                    isEditHidden: () => userloggedIn.role !== 'ADMIN',
                    isDeleteHidden: () => userloggedIn.role !== 'ADMIN',
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            handleEdit(newData,resolve,reject);
                            console.log(newData);                            
                        }, 1000);
                    }),
                    onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            handleDeleteUser(oldData);
                            resolve();
                        }, 1000);
                    }),
                }}
            />            
        </div>
    )
}