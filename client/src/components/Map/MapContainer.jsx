import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useParams } from 'react-router-dom';

function MapContainer(props) {
  const {toyAddress}=useParams()
  const [address, setAddress] = useState(toyAddress); // Replace with your desired address
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    // Use the Geocoding service to convert the address into coordinates
    const geocoder = new props.google.maps.Geocoder();

    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const location = results[0].geometry.location;
        setCenter({
          lat: location.lat(),
          lng: location.lng(),
        });
      } else {
        console.error('Geocode was not successful for the following reason: ' + status);
      }
    });
  }, [address, props.google.maps.Geocoder]);

  return (
    <Map
      google={props.google}
      zoom={14}
      initialCenter={center}
      center={center}
    >
      <Marker position={center} />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: '',
})(MapContainer);
