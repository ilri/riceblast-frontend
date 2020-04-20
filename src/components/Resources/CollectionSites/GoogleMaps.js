import React,{useEffect,useState} from 'react';
import {Map,GoogleApiWrapper,Marker,InfoWindow} from 'google-maps-react';


const mapStyles = {
    width:'100%',
    height:'200px',
};

export function MapContainer(props){
    const [state,setState] = useState({
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    });

    const onMarkerClick = (props,marker,e) => {
        setState({...state, selectedPlace:props, activeMarker:marker, showingInfoWindow:true})
    };

    const onClose = (props) => {
        if(state.showingInfoWindow){
            setState({...state, 
                showingInfoWindow:false,
                activeMarker:null,
            });
        }
    };

    return(
        <Map 
            google={props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{
                lat:props.lat,
                lng:props.lng,
            }}
        >
            <Marker
              onClick={onMarkerClick}
              name={props.name}
            />
            <InfoWindow
              marker={state.activeMarker}
              visible={state.showingInfoWindow}
              onClose={onClose}
            >
              <div>
                <h4>{state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey:'AIzaSyBdih0s_v8Tr0TePf4Xz8DPqAv2oCjbTXI'
})(MapContainer); 