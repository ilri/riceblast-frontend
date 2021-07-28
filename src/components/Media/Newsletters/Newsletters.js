import React from 'react';
import {Icon,Message,List,Popup,
  Card,Button,Segment} from 'semantic-ui-react';
import Container from '@material-ui/core/Container';
import Add from './Add';
import NewslettersService from '../../../services/newsletter';
import GetAppIcon from '@material-ui/icons/GetApp';
import {fileDownload} from '../../../services/downloads';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import UserService from '../../../services/userService';
import Edit from './Edit';
import EditIcon from '@material-ui/icons/Edit';
     
const userService = new UserService();


const service = new NewslettersService();



function OneNewsletter({newsletter,handleDownload,user,handleDelete,handleEdit}){

  
  return (
<div>
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Paper elevation={5}>
              <Segment>
                <List.Content>
                  <List.Header as='h4'> {newsletter.title}</List.Header>
                  <List.Description as='strong'>{newsletter.date}</List.Description>
                  <List.Description as='p'>{newsletter.description}</List.Description>
                  <List.Header>
                    <Tooltip title='Download'>
                      <IconButton aria-label="download" onClick={() => handleDownload(newsletter.newsletter)}>
                        <GetAppIcon color='action' />
                      </IconButton>
                    </Tooltip>
                  </List.Header>
                </List.Content>
              </Segment>
            </Paper>
          </Grid>
          <Grid item xs={2}>
              <Grid item xs>



                {user.role ==='ADMIN'? (
                  <span>
                      <Tooltip title='Edit'>
                        <IconButton aria-label="edit" onClick={() => handleEdit(newsletter)}>
                          <EditIcon color='primary'  />
                        </IconButton>
                      </Tooltip>

                      <Popup 
                        trigger={
                          <IconButton aria-label="download">
                            <DeleteIcon color='secondary' />
                          </IconButton>

                        }                  
                        flowing hoverable                  
                        >                  
                        <div style={{margin:'5px'}}>Are you sure you want to delete this newsletter?</div>
                        <Button color='red' onClick={() => handleDelete(newsletter.pk)}>DELETE</Button>
                      </Popup>
                  </span>

                ):''}

              </Grid>         
          </Grid>
          <hr />


        </Grid>

</div>
  )
}


export default function NewslettersMain(props){
    const [open, setOpen] = React.useState(false)
    const [editOpen, setEditOpen] = React.useState(false)

    const [data, setData] = React.useState([]);
    const [success, setSuccess] = React.useState('');
    const [user,setUser] = React.useState({});
    const [editData, setEditData] = React.useState({});

    

    React.useEffect(() => {
      getData();
      getUserInfo();
    },[]);
  
    const getData = () => {
      service.getData().then(response => {
          console.log(response.data);
          setData(response.data);
          // setLoad();
      }).catch(errors => console.log(errors));
    };

    const getUserInfo = () => {
      userService.getLoggedInUser().then(
        response => {
            // user=response.data
            setUser(response.data);
            console.log(response.data)
        }
        ).catch(
            error => {
            setUser({...user,'role':'GUEST'});
          }
      )
    }



    const handleDownload = (file) => {
      console.log(file);
      const path = file.split('/media')[1];
      const name = file.split('/media/Newsletters/newsletter/')[1];

            
      fileDownload(path,name);
    };
    const handleDelete = (pk) => {
      console.log(props)
      service.deleteData(pk).then(response => {
        getData();
        setSuccess('DELETED');

        setTimeout(() => {
          setSuccess('')
        },3000)
      })
    };


    const openModal = () => {
        setOpen(!open);
    };
    const handleEdit = (data) => {
      setEditData(data);
      openEditModal();
    };
    const openEditModal = () => {
      setEditOpen(!editOpen);
    };
    return(
        <Grid container>

            <Grid item xs={12} style={{marginTop:'80px'}}>
              <Grid container justify="center" alignItems="center">
                <Typography variant='h5'>NEWSLETTERS<hr style={{width:'15%'}} /></Typography>
              </Grid>
            </Grid>

            <Grid item xs={9}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={2} style={{marginTop:'10px',marginBottom:'10px',alignContent:'center'}} >

              {user.role == 'ADMIN' ? (
                <Grid container justify="center" alignItems="center">
                   <Tooltip title='Add Newsletter'>             
                     <Button color='blue' circular icon='plus' size='large' onClick={openModal} />
                   </Tooltip> 

                       
                    <Edit 
                      editOpen={editOpen} 
                      setEditOpen={setEditOpen}
                      editData={editData}
                      getData={getData}
                      setEditData={setEditData}

                    />


                   <Add 
                     open={open} 
                     setOpen={setOpen} 
                     getData={getData}
                   />                
                </Grid> 
              ):''}

            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              {(success)? (
                <Container fixed style={{marginTop:'50px'}}>
                  <div>
                    <Message color='green'>{success}</Message>              
                  </div>
                </Container>
              ):''}
            </Grid>
            <Grid item xs={3}></Grid>

            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              {data.map((newsletter,i ) => 
                <OneNewsletter
                  key={i}
                  newsletter={newsletter}
                  handleDownload={handleDownload}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  user={user}
                />
              )}
            </Grid>
            <Grid item xs={2}></Grid>


            <div> 
    
            </div>
        </Grid>

    )
}