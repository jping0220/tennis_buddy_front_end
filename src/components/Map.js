import { User } from "@auth0/auth0-react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useMemo } from "react";
import React from "react";
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


  // FUnction to fetch lat and long FIX THE API KEY:
  // const getCoordinates = (address) => {
  //   const apiKey = "YOUR_GOOGLE_API_KEY"; // Replace with your actual API key
  //   return fetch(
  //     `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const latitude = data.results[1];
  //       console.log(data.results[1]);
  //       const longitude = data.results?.geometry?.location?.lng || null;

  //       console.log(data.results);
  //       return { latitude, longitude };
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching coordinates:", error);
  //       return { latitude: null, longitude: null };
  //     });
  // };


  const getCoordinates = async (address) => {
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY_2;
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`
      );
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      const latitude = data.results[0]?.geometry?.location?.lat || null;
      const longitude = data.results[0]?.geometry?.location?.lng || null;
      
      return {latitude,longitude};
    
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      return { latitude: null, longitude: null };
    }
  };
  
  


  // use a function to iterate over the searchResdult and for each zip code, call the APi to get lat and long.
  // Once the coordinates are fetched,
  //they are stored in the latLngList state, which can be used to render the map and markers.
  const fetchCoordinates = async () => {
    const promises = searchResult.map((result) =>
      getCoordinates(result.zip_code)
    );
    
    const coordinates = await Promise.all(promises);

    // console.log(`we are printing the coordinates: ${coordinates[0]}`)
    // coordinates.forEach((coord) => {
    //   console.log("Latitude:", coord.latitude, "Longitude:", coord.longitude);
    // });
    return coordinates;
  };

  //cordinates = [{lat, long}]
  const [latLngList, setLatLngList] = React.useState([]);
  console.log("checking:",latLngList);

  React.useEffect(() => {
    fetchCoordinates().then((coordinates) => setLatLngList(coordinates));
  }, [searchResult]);


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
          {latLngList.map((position, index) => (
            <Marker
              key={index}
              position={{ lat: position.latitude, lng: position.longitude }}
            />
          ))}
          <Marker position={{ lat: 47.608013, lng: -122.335167 }}></Marker>
        </GoogleMap>
      )}
    </div>
  );
}