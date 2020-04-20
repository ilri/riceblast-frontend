import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -0.7, lng: 34.3244 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -0.7, lng: 34.3244 }} />}
  </GoogleMap>
))

export default function SiteMap({lat,lng}){
  return(
    <MyMapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      lat={lat}
      lng={lng}
    />
  )
}