import React from 'react';
import {Icon,Grid,Message,List,Popup,
  Card,Button,Segment} from 'semantic-ui-react';
import Container from '@material-ui/core/Container';
import Add from './Add';
import NewslettersService from '../../../services/newsletter';

import {fileDownload} from '../../../services/downloads';

const service = new NewslettersService();



function OneNewsletter({newsletter,handleDownload,handleDelete,handleEdit}){

  
  return (
    <List celled relaxed>
      <List.Item>
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column width={12}>
              <Segment>
                <List.Content>
                  <List.Header as='a'> {newsletter.title}</List.Header>
                  <List.Description as='a'>{newsletter.date}</List.Description>
                  <List.Description as='strong'>{newsletter.description}</List.Description>
                </List.Content>
              </Segment>
            </Grid.Column>

            <Grid.Column width={2}>
              <Segment>

                <Button animated='fade' onClick={() => handleDownload(newsletter.newsletter)}>
                  <Button.Content visible>
                  <List.Icon name='download' size='large' verticalAlign='middle' color='green' />
                  </Button.Content>
                  <Button.Content hidden>Download</Button.Content>
                </Button>
              </Segment>
            </Grid.Column>

            <Grid.Column width={2}>
              <Segment>
                <Popup 
                  trigger={
                    <Button animated='fade' onClick={() => handleDelete(newsletter.pk)}>
                      <Button.Content visible>
                      <List.Icon name='trash alternate outline' size='large' verticalAlign='middle' color='red' />
                      </Button.Content>
                      <Button.Content hidden>Delete</Button.Content>
                    </Button>
                  }
                  content="Are you sure you want to delete this newsletter?"
                  basic                  
                />

              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </List.Item>
    </List>
  )
}


export default function NewslettersMain(props){
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
    const handleEdit = (e, props) => {
      console.log(props)
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

                {data.map((newsletter,i) => 
                  <OneNewsletter
                    key={i}
                    newsletter={newsletter}
                    handleDownload={handleDownload}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                )}    

              <div>
              </div>
            </Container>
        </div>

    )
}