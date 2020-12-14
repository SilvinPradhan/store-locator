import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 30.510500, lng: 2.1734
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyAGavg7NZ7dx1eShdjQZlU7QhRIgam_oxg'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MapContainer;