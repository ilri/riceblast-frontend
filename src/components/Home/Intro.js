import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AboutImage from '../../assets/Rice.jpeg';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel'
import Home1 from '../../assets/home1.jpeg';
import Home2 from '../../assets/home2.jpg';
import Home3 from '../../assets/home3.jpg';

import Image from 'material-ui-image';




const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
    },
    media: {
      height: 440,
    },
    carousel:{
      height:'100%',
      width:'100%'
    },

    image:{
      position:'relative',
      zIndex:1
    },
    overlay:{
      position:'relative',
      zIndex:2,
      maxHeight:'300px',

    }
});

const images = [Home1,Home2,Home3]

export default function Intro(){
    const classes = useStyles();
    return(
        <div>
            <Grid container spacing={1}>
              <Grid item xs={12} >

              <Carousel 
                className={classes.carousel}
                indicators={false}
                timeout={400}
                interval={6000}
              >
                {
                    images.map( (image, i) => <CaroselImage key={i} image={image} /> )
                }
              </Carousel>
              </Grid>




              <Grid item xs={12}></Grid>
              <Grid item xs={2}></Grid>
              {/* <Grid item xs={8}> */}
                {/* <Typography component="div" style={{ backgroundColor: 'white', }} > */}
                    {/* <Card className={classes.root}> */}
                      {/* <CardActionArea> */}
                        {/* <CardMedia 
                          // className={classes.media}
                          // image={AboutImage}
                          // title="Rice Blast Project"
                        // />*/}
                        {/* <CardContent> */}
                          {/* <Typography gutterBottom variant="h5" component="h2"> */}
                            {/* Rice Blast Project */}
                          {/* </Typography> */}
                          {/* <Typography variant="body2" color="textSecondary" component="p"> */}
                            {/* Durable rice blast resistance for Africa is an international collaborative project which aims to  */}
                            {/* determine and breed appropriate rice blast resistance genes into adoption to African rice germplasm... */}
                          {/* </Typography> */}
                        {/* </CardContent> */}
                      {/* </CardActionArea> */}
                      {/* <CardActions> */}
                        {/* <Link to='/about'> */}
                          {/* <Button size="small" color="primary"> */}
                            {/* Read More */}
                          {/* </Button> */}
                        {/* </Link> */}
                      {/* </CardActions> */}
                    {/* </Card> */}
                {/* </Typography> */}
              {/* </Grid> */}
              <Grid item xs={2}></Grid>

            </Grid>
        </div>
    )
}

function CaroselImage({image}){
  const classes = useStyles();

  return(
    <div >
      {/* <img src={image} height='500' width='100%' /> */}
      <div className={classes.image}>

      <Image
        src={image}
        imageStyle={{width: '100%', height: 'inherit'}}
        disableSpinner
        aspectRatio={(16/9)}
        color='red'
      />
      </div>
      
      <Grid container spacing={3} justify='cemter' alignItems='center'>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <div className={classes.overlay}>
            <h1 style={{fontSize:'50px'}}>RAYMOND</h1>
          </div>
        </Grid>
        <Grid item xs={3} ></Grid>  
      </Grid>


    </div>
  )
}