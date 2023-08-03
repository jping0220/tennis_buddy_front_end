import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
import { useMemo } from "react";
import React from "react";
import { useState } from "react";

// The searchResult prop should be an array of objects, 
// each containing a latitude and longitude property for each marker 
// you want to display on the map. 

// https://maps.googleapis.com/maps/api/geocode/json?address=98029&key=AIzaSyDEOIDOOW9FnOSJaGSonLlNeSBHijucsvM

export const MapDisplay = ({ searchResult }) => {
  // console.log(`here we are in maps: ${searchResult[0].name}`)
  // MAP DISPLAY:
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY_2,
  });
  const center = useMemo(() => ({ lat: 47.608013, lng: -122.335167 }), []);

  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState({});
  const [clickedMarkerIndex, setClickedMarkerIndex] = useState(null);



// use a function to iterate over the searchResdult and for each zip code, call the APi to get lat and long.
  // Once the coordinates are fetched,
  //they are stored in the latLngList state, which can be used to render the map and markers.
  const fetchCoordinates = async () => {
    const promises = searchResult.map((result) =>
      getCoordinates(result.zip_code,result.name,result.tennis_level,result.email,result.preferences)
    );
    
    const coordinates = await Promise.all(promises);

    return coordinates;
  };

  //cordinates = [{lat, long}]
  const [latLngList, setLatLngList] = React.useState([]);
  console.log("checking:",latLngList);

  React.useEffect(() => {
    fetchCoordinates().then((coordinates) => setLatLngList(coordinates));
  }, [searchResult]);



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
      const latitude = data.results[0]?.geometry?.location?.lat || null;
      const longitude = data.results[0]?.geometry?.location?.lng || null;
      
      return {latitude,longitude, name, tennis_level,email,preferences};
    
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      return { latitude: null, longitude: null };
    }
  };
  
  

  const handleMarkerClick = (id, lat, lng, name, tennis_level, email, preferences) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, name, tennis_level,email, preferences });
    setClickedMarkerIndex(id);
    setIsOpen(true);
  };

 

  return (
    <div className="App">
      {/* {console.log('isOpen:', isOpen, 'clickedMarkerIndex:', clickedMarkerIndex)} */}
      {!isLoaded ? (
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
                  handleMarkerClick(index, position.latitude, position.longitude, position.name, position.tennis_level, position.email, position.preferences);
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
          <Marker position={{ lat: 47.608013, lng: -122.335167 }}></Marker>
        </GoogleMap>
      )}
    </div>
  );
}