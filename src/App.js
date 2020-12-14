import React, { useState } from "react";
import './App.css';
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
      address: "801 Pecan St",
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
    margin: '25px auto',
    height: "50vh",
    width: "50vw",
  };

  const defaultCenter = {
    lat: 30.511379,
    lng: -90.476982,
  };

  return (
    <div className='container'>
      <h3> Store Locator using React Google Maps </h3>
      <LoadScript googleMapsApiKey="AIzaSyAGavg7NZ7dx1eShdjQZlU7QhRIgam_oxg">
      <GoogleMap mapContainerStyle={mapStyles} zoom={16} center={defaultCenter}>
        {locations.map((item) => {
          return (
            <Marker
              key={item.name}
              position={item.location}
              onClick={() => onSelect(item)}
              icon={{
                url: "./online-store.svg",
              }}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <div>
              <h2 style={{ fontSize: "15px", fontWeight: "bold" }}>
                {selected.name}
              </h2>
              <p>{selected.address}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
    </div>
    
  );
};

export default MapContainer;
