import React from 'react';
import {Popup,Message,Image,
  Card,Button,Modal} from 'semantic-ui-react';
import Container from '@material-ui/core/Container';
import Add from './Add';
import OutreachService from '../../../services/outreach';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {fileDownload} from '../../../services/downloads';
import UserService from '../../../services/userService';
import Edit from './Edit';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const userService = new UserService();





const APIURLDEV = 'http://localhost:8000';
const APIURLPROD = 'https://riceblast.ilri.org';
const service = new OutreachService();



const ImageViewer = ({outreach,open,setOpen}) => (
    <Grid item xs={12}>
      <Modal         
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='small' 
        style={{margin:5}}
      >
        <img src={`${APIURLPROD}${outreach.image}`} height={800} width={1200} />
        <Typography variant='h4' style={{width:1200}}>{outreach.outreach}</Typography>
        <Typography variant='h6' style={{width:1200}}>{outreach.date}</Typography>
        <Typography variant='h5' style={{width:1200}}>{outreach.brief}</Typography>
      </Modal>
    </Grid>
)


function Outreach({outreach,handleEdit,handleDelete,user,handleDownload}){

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = React.useState(false);


  return (
    
    <Grid item xs={matches ? 4 : 12} style={{marginBottom:20}}>
      <ImageViewer outreach={outreach} open={open} setOpen={setOpen} />
      <Card style={{height:500}}>

          {(outreach.image)? 
          (
              <img src={`${APIURLPROD}${outreach.image}`} style={{cursor:'pointer'}} height={200} onClick={() => setOpen(true)} />        
          ):''}
  
          <Card.Content>
            <Card.Header>
              {outreach.outreach.slice(0,100)} 
              {(outreach.outreach.length > 100) ? (<span>....<a onClick={() => setOpen(true)} style={{fontSize:15}}>Read More</a></span>) : ''}
              </Card.Header>
            <Card.Meta>{outreach.date}</Card.Meta>
            <Card.Description>
              {outreach.brief.slice(0,100)}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          
            {(outreach.outreach_file)? 
              (
                <Tooltip title='Download Outreach File'>
                  <IconButton aria-label="download" onClick={() => handleDownload(outreach.outreach_file)}>
                    <GetAppIcon  />
                  </IconButton>
                </Tooltip>
            ):''}    

            {user.role == 'ADMIN' ? (       
              
            <div>
              <span>
              <Tooltip title='Edit'>
                <IconButton aria-label="edit" onClick={() => handleEdit(outreach)}>
                  <EditIcon color='primary'  />
                </IconButton>
              </Tooltip>Edit          
              </span>
              <Popup 
                    trigger={(
                      <span>
                      <IconButton aria-label="delete">
                        <DeleteIcon color='secondary' />
                      </IconButton>Delete
                      </span>)

                    }                  
                    flowing hoverable                  
                  >

                    <div style={{margin:'5px'}}>Are you sure you want to delete this Outreach?</div>
                    <Button color='red' onClick={() => handleDelete(outreach.pk)}>DELETE</Button>
              </Popup>
            </div>
            ):''}
              
          </Card.Content>
      </Card>
    </Grid>
  )
}


export default function OutreachMain(props){
    const [open, setOpen] = React.useState(false)

    const [data, setData] = React.useState([]);
    const [success, setSuccess] = React.useState('');
    const [user, setUser] = React.useState({});
    const [editOpen, setEditOpen] = React.useState(false)
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

    const handleDownload = (file) => {
      console.log(file);
      const path = file.split('/media')[1];
      const name = file.split('/media/Outreach/outreach/')[1];

            
      fileDownload(path,name);
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
          <Typography variant='h5'>OUTREACH<hr style={{width:'15%'}} /></Typography>
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
          

          <Add 
            open={open} 
            setOpen={setOpen} 
            getData={getData}
          />       

          <Edit 
            editOpen={editOpen} 
            setEditOpen={setEditOpen}
            editData={editData}
            getData={getData}
            setEditData={setEditData}
          />         
        </Grid>
      ):''}
      </Grid>

      {(success)? (
        <Container fixed style={{marginTop:'50px'}}>
          <div>
            <Message color='green'>{success}</Message>

          </div>
        </Container>
      ):''}  

            <Container fixed >
            <Hidden only={['xs', 'sm']}>
              <Grid container spacing={2} style={{marginLeft:'150px'}} justify="flex-start" >
                      {data.map((outreach,i) => 
                              <Outreach                                
                                  outreach={outreach}
                                  handleDelete={handleDelete}
                                  handleDownload={handleDownload}
                                  user={user}
                                  handleEdit={handleEdit}
                              />
                      )}   
              </Grid>
            </Hidden>

            <Hidden only={['lg', 'xl','md']}>
              <Grid container spacing={2} direction='column' justify="center"alignItems="center" >
                      {data.map((outreach,i) => 
                              <Outreach                                
                                  outreach={outreach}
                                  handleDelete={handleDelete}
                                  handleDownload={handleDownload}
                                  user={user}
                                  handleEdit={handleEdit}
                              />
                      )}   
              </Grid>
            </Hidden>
            </Container>
        </Grid>

    )
}