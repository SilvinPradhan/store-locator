import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const MapContainer = () => {
  const locations = [
    {
      name: "ShopQuick",
      location: {
        lat: 30.5105,
        lng: -90.47736,
      },
    },
  ];

  const [selected, setSelected] = useState({});

  const onSelect = (item) => {
    setSelected(item);
  };

  const mapStyles = {
    height: "100vh",
    width: "100vh",
  };

  const defaultCenter = {
    lat: 30.51096,
    lng: -90.4752,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAGavg7NZ7dx1eShdjQZlU7QhRIgam_oxg">
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
        {locations.map((item) => {
          return (
            <Marker
              key={item.name}
              position={item.location}
              onClick={() => onSelect(item)}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p style={}>{selected.name}</p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
