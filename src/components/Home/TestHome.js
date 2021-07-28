import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Home1 from '../../assets/home1.jpeg';
import Home2 from '../../assets/home2.jpg';
import Home3 from '../../assets/home3.jpg';

import triangle from '../../assets/images/triangle.png';
 
import './Home.css';
import Grid from '@material-ui/core/Grid';

import  {NavLink}  from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Appbar from '../Appbar/Appbar';
import Statistics from './Statistics'
import Contributors from "./Contributors";
import Donors from "./Donors";
import Partnerships from "./Partnerships";
import GoogleApiWrapper from "./HomeGoogleMaps";


function CarouselOverlay(props){

  return(
    <div className='carousel-overlay'>      
      <Grid container spacing={2}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} style={{height:'100%'}}>
          <h1 className='logo-brand'>DURABLE RICEBLAST FOR <br />SUB-SAHARAN AFRICA</h1>          
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} style={{paddingTop:'200px'}} alignItems='center'>
          <div>
          <Button size='large' color='inherit' fullWidth style={{border:'2px solid white'}}> 
              <NavLink to='/about' style={{color:'white', fontSize:'25px'}}>READ MORE</NavLink>
          </Button>          
          </div>          
        </Grid>
        <Grid item xs={4}></Grid>

        <Grid item xs={4}></Grid>
        <Grid item xs={4} style={{paddingTop:'100px'}} alignItems='center'> 
          <div>
            <Button size='large' color='inherit' fullWidth style={{border:'2px solid white'}}> 
              <NavLink to='/login' style={{color:'white',fontSize:'25px'}}>LOGIN</NavLink>
            </Button>
          </div>          
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>



      {/* <img src={triangle} alt='triangle' className='triangle' onClick={props.navigateDown} style={{cursor:'pointer'}} /> */}
    </div>
  )
}




export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      navVisible:false,
    };
    this.myRef = React.createRef();
    this.handleNavigate = this.handleNavigate.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  } alignItems='center'
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    const pageHeight = window.pageYOffset;
    console.log(pageHeight);
    if(pageHeight > 450){
      this.setState({navVisible:true});
    }else{
      this.setState({navVisible:false});
    }
  }

  handleNavigate(){
    //Scroll to this.myRef
    window.scrollTo(0, this.myRef.current.offsetTop);
  }


  render() {


    return (
      <div>


      {/* <Slide direction="up" in={this.state.navVisible} mountOnEnter unmountOnExit>
      </Slide> */}
      {this.state.navVisible ? (
       <Appbar props={this.props} />
      ):''}


      <Grid container spacing={3}>

        <Grid item xs={12} style={{height:1050}}>
          <div>
            <CarouselOverlay navigateDown={this.handleNavigate} />

            <Carousel
              animation='slide'
              dynamicHeight={true}
              showArrows={false}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              transitionTime={800}
              interval={5000}
            >
              <img src={Home1} alt='intro' height={1000} />
              <img src={Home2} alt='intro2'height={1000} />
              <img src={Home3} alt='intro2'height={1000} />

            </Carousel>
          </div>
        </Grid>

        <Grid item xs={2}></Grid>
        <Grid xs={8}>
            <GoogleApiWrapper />
        </Grid>
        <Grid xs={2}></Grid>

{/*
        <Grid item xs={12}>
          <div className='dest' >
            <DestinationList />
          </div>
        </Grid> */}

        <Grid item xs={12} style={{marginTop: 50}}>
          <Partnerships />
        </Grid>
        <Grid item xs={12} style={{marginTop: 50}}>
          <Donors />
        </Grid>

      </Grid>


      </div>
    );
  }

}
