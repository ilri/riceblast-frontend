import React from 'react';
import {Icon,Message,Image,
  Card,Button,} from 'semantic-ui-react';
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







const APIURLDEV = 'http://localhost:8000';
const APIURLPROD = 'https://riceblast.ilri.org';
const service = new OutreachService();


function Outreach({outreach,handleDelete,handleDownload}){

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));


  return (
    <Grid item xs={matches ? 4 : 12}>
      <Card>
          {(outreach.image)? 
          (
            <Image src={`${APIURLPROD}${outreach.image}`} wrapped ui={false}  />        
          
          ):''}
  
          <Card.Content>
            <Card.Header>{outreach.outreach}</Card.Header>
            <Card.Meta>{outreach.date}</Card.Meta>
            <Card.Description>
              {outreach.brief}
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
  
              
            <Tooltip title='Delete'>
              <a onClick={() => handleDelete(outreach.pk)}>
                <Icon name='trash' color='red' />
                Delete
              </a>
            </Tooltip>
              
          </Card.Content>
      </Card>
    </Grid>
  )
}


export default function OutreachMain(props){
    const [open, setOpen] = React.useState(false)

    const [data, setData] = React.useState([]);
    const [success, setSuccess] = React.useState('');

    

    React.useEffect(() => {
      getData();
    },[]);
  
    const getData = () => {
      service.getData().then(response => {
          console.log(response.data);
          setData(response.data);
          // setLoad();
      }).catch(errors => console.log(errors));
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

    const handleDownload = (file) => {
      console.log(file);
      const path = file.split('/media')[1];
      const name = file.split('/media/Outreach/outreach/')[1];

            
      fileDownload(path,name);
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
        <Grid container justify="center" alignItems="center">
          <Tooltip title='Add Newsletter'>

            <Button color='blue' circular icon='plus' size='large' onClick={openModal} />
          </Tooltip>
          

          <Add 
            open={open} 
            setOpen={setOpen} 
            getData={getData}
          />                
        </Grid>
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
              <Grid container spacing={2} style={{marginLeft:'150px'}} justify="center" >
                      {data.map((outreach,i) => 
                              <Outreach                                
                                  outreach={outreach}
                                  handleDelete={handleDelete}
                                  handleDownload={handleDownload}
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
                              />
                      )}   
              </Grid>
            </Hidden>
            </Container>
        </Grid>

    )
}