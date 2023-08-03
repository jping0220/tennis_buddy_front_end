import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useMemo } from "react";

export const MapDisplay = ({ searchResult }) => {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY_2,
  });
  const center = useMemo(() => ({ lat: 47.608013, lng: -122.335167 }), []);
    
  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: 47.608013, lng: -122.335167 }}></Marker>
        </GoogleMap>
      )}
    </div>
  );
}