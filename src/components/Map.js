import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
import { useMemo } from "react";
import React from "react";
import { useState } from "react";



export const MapDisplay = ({ searchResult }) => {
  // MAP DISPLAY:
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY_2,
  });


  const [center, setCenter] = useState({ lat: 47.608013, lng: -122.335167 });
  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState({});
  const [clickedMarkerIndex, setClickedMarkerIndex] = useState(null);


  const getCoordinates = async (zipCode,name,tennis_level,email,preferences) => {
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY_2;
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${apiKey}`
      );
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      const multiplier = .05;
      const randomLat = (Math.random() - 0.5) * multiplier;
      const randomLong = (Math.random() - .5) * multiplier;
      const latitude =
        data.results[0]?.geometry?.location?.lat + randomLat;
      const longitude =
        data.results[0]?.geometry?.location?.lng + randomLong;
      
      return {latitude,longitude, name, tennis_level,email,preferences};
    
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      return { latitude: null, longitude: null };
    }
  };
  


  const fetchCoordinates = async () => {
    const promises = searchResult.map((result) =>
      getCoordinates(result.zip_code,result.name,result.tennis_level,result.email,result.preferences)
    );
    
    const coordinates = await Promise.all(promises);
    console.log(coordinates);
    return coordinates;
  };

 
  const [latLngList, setLatLngList] = React.useState([]);
  console.log("checking:",latLngList);

  React.useEffect(() => {
    fetchCoordinates().then((coordinates) => setLatLngList(coordinates));
  }, [searchResult]);


  useMemo(() => {
    if (latLngList.length > 0) {
      setCenter({ lat: latLngList[0]?.latitude, lng: latLngList[0]?.longitude });
    }
  }, [latLngList]);



  const handleMarkerClick = (id, lat, lng, name, tennis_level, email, preferences) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, name, tennis_level,email, preferences });
    setClickedMarkerIndex(id);
    setIsOpen(true);
  };



  return (
     !isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
          onClick={() => setIsOpen(false)}
        >
          {latLngList.map((position, index) => (
            <Marker
              key={index}
              position={{ lat: position.latitude, lng: position.longitude }}
              onClick={() => {
                handleMarkerClick(
                  index,
                  position.latitude,
                  position.longitude,
                  position.name,
                  position.tennis_level,
                  position.email,
                  position.preferences
                );
              }}
            />
          ))}
          {isOpen && infoWindowData?.id !== null && (
            <InfoWindow
              position={{
                lat: latLngList[clickedMarkerIndex]?.latitude,
                lng: latLngList[clickedMarkerIndex]?.longitude,
              }}
              onCloseClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="map-info">
                <h4>{infoWindowData.name}</h4>
                <p>tennis level: {infoWindowData.tennis_level}</p>
                <p>email: {infoWindowData.email}</p>
                <p>preferences: {infoWindowData.preferences}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )
  );
}