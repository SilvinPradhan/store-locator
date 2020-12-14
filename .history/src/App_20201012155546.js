import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapContainer = () => {
  const locations = [
    {
      name: "Location 1",
      location: {
        lat: 41.3954,
        lng: 2.162,
      },
    },
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
              div
            )
          })
        }
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
