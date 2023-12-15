import React from "react";
import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import Spinner from "react-bootstrap/Spinner";

const style = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 1.2981667122583471,
  lng: 103.84413395977903,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  // eslint-disable-next-line
  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <div className="map-container mb-3">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={style}
          center={center}
          zoom={20}
          onLoad={onLoad}
          onUnmount={onUnmount}
        />
      ) : (
        <Spinner className="my-3" animation="border" />
      )}
    </div>
  );
};

export default Map;
