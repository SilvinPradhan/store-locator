import React, { useState } from "react";
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 30.510500,
        lng:-90.477360
      },
    },
  ];

  const [selected, setSelected] =useState({});

  const onSelect = item => {
    setSelected(item);
  }

  const mapStyles = {
    height: "100vh",
    width: "100vh",
  };

  const defaultCenter = {
    lat: 30.510960, lng: -90.475200
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAGavg7NZ7dx1eShdjQZlU7QhRIgam_oxg">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      >
        {
          locations.map(item => {
            return (
              <Marker key={item.name} position={item.location} onClick={() => onSelect(item)}/>
            )
          })
        }
        {
          selected.location && (
            InfoWindow position=
          )
        }
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
