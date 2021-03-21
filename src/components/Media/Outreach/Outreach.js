import React from 'react';
import {Icon,Grid,Message,Image,Popup,
  Card,Button,Segment} from 'semantic-ui-react';
import Container from '@material-ui/core/Container';
import Add from './Add';
import OutreachService from '../../../services/outreach';


const service = new OutreachService();

const APIURLDEV = 'http://localhost:8000';
const APIURLPROD = 'https://riceblast.ilri.org';



function Outreach({outreach,handleDelete}){


  return (
    <Card>
        <Image src={`${APIURLPROD}${outreach.image}`} wrapped ui={false}  />        
        <Card.Content>
          <Card.Header>{outreach.outreach}</Card.Header>
          <Card.Meta>{outreach.outreach}</Card.Meta>
          <Card.Description>
            {outreach.brief}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a onClick={() => handleDelete(outreach.pk)}>
            <Icon name='trash' color='red' />
            Delete
          </a>
        </Card.Content>
    </Card>
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
    return(
        <div>
           
            <Container fixed style={{marginTop:'80px',}}>
              <div>
                <Button animated='fade' onClick={openModal}>
                  <Button.Content visible>
                    +++
                  </Button.Content>
                  <Button.Content hidden>ADD</Button.Content>
                  
                </Button>

                <Add 
                  open={open} 
                  setOpen={setOpen} 
                  getData={getData}
                />                
              </div>
            </Container>

            {(success)? (
              <Container fixed style={{marginTop:'50px'}}>
                <div>
                  <Message color='green'>{success}</Message>
                </div>
              </Container>
            ):''}


            <Container fixed style={{marginTop:'10px'}}> 
                <Grid relaxed columns={3}>
                    {data.map((outreach,i) => 
                        <Grid.Column key={i}>
                            <Outreach                                
                                outreach={outreach}
                                handleDelete={handleDelete}
                            />
                        </Grid.Column>
                    )}   
                </Grid>
            </Container>
        </div>

    )
}