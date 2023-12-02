import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Maps = () => {
  const mapStyles = {
    height: '200px',
    width: '100%'
  };

  const defaultCenter = {
    lat: -3.745,
    lng: -38.523
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDO61hgXfLyxZ2AEEn7CMOaP7rO-SF_hrQ">
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={defaultCenter}
        zoom={10}
      ></GoogleMap>
    </LoadScript>
  );
};

export default Maps;
