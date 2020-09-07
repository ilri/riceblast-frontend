import React from 'react';
import MaterialTable from 'material-table';
import SiteMap from './Maps';
import GoogleApiWrapper from './GoogleMaps';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import CollectionSiteService from '../../../services/collectionSites';
import TextField from '@material-ui/core/TextField';
// import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';




const siteService = new CollectionSiteService();



const useStyles = makeStyles(theme => ({
    formControl: {
      minWidth: 170,
    },
}));
export default function Table({sites,handleEditSite,people,getSite}){

    const [errors,setErrors] = React.useState({});

    const editSite = (newData, oldData) => {
        console.log(newData,oldData);
        handleEditSite(newData);
    };

    const addSite = (newSite,resolve,reject) => {
        siteService.addCollectionSIte(newSite).then(response => {
            getSite();
            resolve();
        }).catch(errors => {
            setErrors(errors.response.data)
            console.log(errors.response.data);
            reject();
        });
    };

    const deleteSite = (site,resolve,reject) => {
        siteService.deleteCollectionSite(site).then(response => {
            getSite();
            resolve();
        }).catch(() => {
            reject();
        });
    };
    const classes = useStyles();

    return(
        <div>
            <MaterialTable 
                columns={[
                    {
                        title:'Name', field:'name',                     
                    },

                    {title:'Type', field:'type'},

                    {
                        title:'Latitude', field:'latitude',
                        editComponent: props => (
                            <FormControl error={Object.keys(errors).includes('latitude')}>
                                <TextField 
                                    size='small'  
                                    onChange={e => props.onChange(e.target.value)}
                                    error={Object.keys(errors).includes('latitude')}
                                    value={props.value}
                                    
                                />
                                {(Object.keys(errors).includes('latitude')) ? (
                                    <FormHelperText error>Invalid Input</FormHelperText>):''
                                }

                            </FormControl>
                        )
                    },

                    {
                        title:'Longitude', field:'longitude',
                        editComponent: props => (
                            <FormControl error={Object.keys(errors).includes('longitude')}>
                                <TextField 
                                    size='small'  
                                    onChange={e => props.onChange(e.target.value)}
                                    error={Object.keys(errors).includes('longitude')}
                                    value={props.value}
                                    
                                />
                                {(Object.keys(errors).includes('longitude')) ? (
                                    <FormHelperText error>Invalid Input</FormHelperText>):''
                                }

                            </FormControl>
                        )                        
                    },

                    {
                        title:'Country', field: 'country',
                        render: rowData => 
                            <ReactFlagsSelect   
                                defaultCountry={rowData.country}
                                disabled={true}                                                    
                            />
                        ,                                                   
                        editComponent: props => (

                            <FormControl>

                                <ReactFlagsSelect 
                                    searchable={true}
                                    defaultCountry={props.value}
                                    onSelect={code => props.onChange(code) }  
                                />
                                {(Object.keys(errors).includes('country')) ? (
                                    <FormHelperText error>Required</FormHelperText>):''
                                }
                            </FormControl>                            
                        )
                    },   
                    {
                        title:'Project', field: 'project',
                        editComponent: props => (
                            <FormControl variant="outlined"  size='small' className={classes.formControl}> 
                                <InputLabel id="demo-simple-select-outlined-label">Project</InputLabel>
                                <Select
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  value={props.value}
                                  onChange={e => props.onChange(e.target.value)}
                                  size='small'
                                >
                                  <MenuItem value="">
                                    <em style={{fontSize:'15px'}}>No Projects.</em>
                                  </MenuItem>
                                  {/* {labs.map((lab,index) => (
                                    <MenuItem key={index + 1} value={lab.pk}>{lab.lab_name}</MenuItem>
                                  ))} */}
                                </Select>
                            </FormControl>
                        )
                    },
                    {
                        title:'Person', field: 'person',
                        editComponent: props => (
                            <FormControl variant="outlined"  size='small' className={classes.formControl}> 
                                <InputLabel id="demo-simple-select-outlined-label">Person</InputLabel>
                                <Select
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  value={props.value}
                                  onChange={e => {
                                      props.onChange(e.target.value)
                                      console.log(e.target.value)
                                    }}
                                  size='small'
                                >
                                {(people.length < 1) ? (
                                    <MenuItem value={null}>
                                        <em style={{fontSize:'15px'}}>No People.</em>
                                    </MenuItem>) : (
                                  people.map((person,index) => (
                                    <MenuItem key={index + 1} value={person.user.pk}>{person.full_name}</MenuItem>
                                  ))
                                )}
                                </Select>
                            </FormControl>
                        )
                    },
                ]}
                data={sites}
                title='Fungal Collection Sites'
                style={{maxWidth:'70%',margin:'0 auto',marginTop:150}}
                options={{
                    exportButton:true
                }}
                detailPanel={rowData => {
                    return (
                        <div style={{height:'200px'}} height='650'>
                            <GoogleApiWrapper lat={rowData.latitude} lng={rowData.longitude} name={rowData.name + ' ' + rowData.type} />
                            
                        </div>
                    )
                }}
                editable={{
                    onRowUpdate:(newData,oldData) => 
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                editSite(newData,oldData); 
                                resolve();
                                    
                            },1000);
                        }),
                    onRowAdd:newData =>
                        new Promise((resolve,reject) => {
                            setTimeout(() => {
                                console.log(newData);
                                addSite(newData,resolve,reject); 
                            });
                        }),
                    onRowDelete:oldData =>
                        new Promise((resolve,reject) => {
                            setTimeout(() => {
                                console.log(oldData);
                                deleteSite(oldData.pk,resolve,reject);
                            });
                        }),
                }}   
                options={{
                    actionsColumnIndex: -1
                }}            
            />
        </div>
    )
}