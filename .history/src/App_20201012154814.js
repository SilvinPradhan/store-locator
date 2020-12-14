import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100vh"};
  
  const defaultCenter = {
    lat: 30.510500, lng: -90.477360
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyAGavg7NZ7dx1eShdjQZlU7QhRIgam_oxg'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MapContainer;