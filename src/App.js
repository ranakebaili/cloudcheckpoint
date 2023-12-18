import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  // styles
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  // default center of the map
  const defaultCenter = {
    lat: 36.84374676031908,
    lng: 10.169387250050555,
  };

  return (
    //API key
    <LoadScript googleMapsApiKey="AIzaSyDNhjrMIn7LKvMDFORX8cw3dyym4zHkwRg">
      <GoogleMap
        mapContainerStyle={mapStyles}  
        zoom={16}                      
        center={defaultCenter}          
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
