import React,{useEffect,useState} from 'react';
import {Map,GoogleApiWrapper,Marker,InfoWindow} from 'google-maps-react';
import CollectionSiteService from '../../services/collectionSites'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';

const mapStyles = {
    width:'67.6%',
    height:'650px',
};
const service = new CollectionSiteService();

const ChartTitle = () => (
    <Grid container spacing={3} alignItems='center' justify='center'>
        <Grid item xs={12}   style={{paddingBottom:'20px',paddingTop:'50px'}}>
            <Typography variant='h5' align='center'>RICE BLAST PATHOGEN COLLECTIONS IN AFRICA<hr style={{maxWidth:'10%'}} /></Typography> 
        </Grid>
    </Grid>
) 
export function MapContainer(props){

    const [data,setData] = useState([]);

    React.useEffect(() => {
        getSites();
    },[]);

    const getSites = () => {
        service.getCollectionSitesHome().then(response => {
            setData(response.data);
            // setLoad(false);
        }).catch(errors => console.log(errors)); 
    };


    return(
        <div>
            <ChartTitle />
            <Paper elevation={3} className='about-us' style={{height:'700px'}}>
                <Map 
                    google={props.google}
                    zoom={2}
                    style={mapStyles}
                    initialCenter={{lat:12.137752,lng:15.054325}}
                >
                    {data.map((site,index) => (                
                        <Marker
                            key={index}
                            title={site.name}
                            name={site.name}
                            position={{lat: site.latitude, lng: site.longitude}} 
                        />  
                    ))}
                </Map>
            </Paper>
        </div>


    )
}

export default GoogleApiWrapper({
    apiKey:'AIzaSyBdih0s_v8Tr0TePf4Xz8DPqAv2oCjbTXI'
})(MapContainer); 