import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 41.3954,
        lng: 2.162 
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 41.3917,
        lng: 2.1649
      },
    },
    {
      name: "Location 3",
      location: { 
        lat: 41.3773,
        lng: 2.1585
      },
    },
    {
      name: "Location 4",
      location: { 
        lat: 41.3797,
        lng: 2.1682
      },
    },
    {
      name: "Location 5",
      location: { 
        lat: 41.4055,
        lng: 2.1915
      },
    }
  ];

  const mapStyles = {
    height: "100vh",
    width: "100vh",
  };

  const defaultCenter = {
    lat: 30.5105,
    lng: -90.47736,
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
              <Marker key={item.name} position={item.location} />
            )
          })
        }
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
