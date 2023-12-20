import React from "react";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const Maps = () => {
  const position = {
    lat: 1.2981667122583471,
    lng: 103.84413395977903,
  };
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <div className="map-container mb-3">
        <Map
          zoom={20}
          center={position}
          mapId={process.env.REACT_APP_GOOGLE_MAPS_ID}
        >
          <AdvancedMarker
            position={position}
            onClick={() => setOpen(true)}
          ></AdvancedMarker>

          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <h6>Tomo Japanese Language School</h6>
              <p>@ Singapore Shopping Centre</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
};

export default Maps;
