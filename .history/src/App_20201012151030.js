import React from "react";
import "./App.css";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";

function Map() {
  const location = [
    {
      name: 'ShopQuick',
      location: {
        lat: 41.3954,
        long: 2.162
      }
    }
  ];

  return (
    <div>
      <GoogleMap defaultZoom={16}
        defaultCenter={{ lat: 30.5105, lng: -90.47736 }}
        >
         {
           location.map(item => {
             return (<Marker key= />)
           })
         }
      </GoogleMap>
        
      
    </div>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{width:'50vw', height:'50vh'}}>
      <h2> You can find our store here! </h2>
      <WrappedMap
        googleMapURL ={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAGavg7NZ7dx1eShdjQZlU7QhRIgam_oxg`}
        loadingElement ={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}

