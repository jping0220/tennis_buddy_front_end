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

  // const markers = [
  //   { address: "data info from backend"},
  // ];

// use a function to iterate over the searchResdult and for each zip code, call the APi to get lat and long.
  // Once the coordinates are fetched,
  //they are stored in the latLngList state, which can be used to render the map and markers.
  const fetchCoordinates = async () => {
    const promises = searchResult.map((result) =>
      getCoordinates(result.zip_code,result.name,result.tennis_level)
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



  const getCoordinates = async (zipCode,name,tennis_level) => {
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
      
      return {latitude,longitude, name, tennis_level};
    
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      return { latitude: null, longitude: null };
    }
  };
  
  


  // handle markers:
  // const onMapLoad = (map) => {
  //   setMapRef(map);
  //   const bounds = new google.maps.LatLngBounds();
  //   markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
  //   map.fitBounds(bounds);
  // };



  const handleMarkerClick = (id, lat, lng, name, tennis_level) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, name, tennis_level });
    setClickedMarkerIndex(id);
    setIsOpen(true);
  };

 


  return (
    <div className="App">
      {console.log('isOpen:', isOpen, 'clickedMarkerIndex:', clickedMarkerIndex)}
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
          // onLoad={onMapLoad}
          onClick={() => setIsOpen(false)}
        >
            {latLngList.map((position, index) => (
              <Marker
                key={index}
                position={{ lat: position.latitude, lng: position.longitude }}
                onClick={() => {
                  handleMarkerClick(index, position.latitude, position.longitude, position.name, position.tennis_level);
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
              <div>
                  <h3>{infoWindowData.name},{infoWindowData.tennis_level}</h3>
              </div>
              </InfoWindow>
              )}   
          {/* <Marker position={{ lat: 47.608013, lng: -122.335167 }}></Marker> */}
        </GoogleMap>
      )}
    </div>
  );
}