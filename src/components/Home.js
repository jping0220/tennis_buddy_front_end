import React from 'react';
import SearchForm from './SearchForm';
import TennisUserList from './TennisUserList';
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useMemo } from "react";


export const Home = ({ onSearch, searchResult, matchFound }) => {

    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey:process.env.REACT_APP_GOOGLE_API_KEY_2,
    });
    const center = useMemo(() => ({ lat: 47.608013, lng: -122.335167 }), []);
    
    return (
        <div className='home-container'>
            <h2>Search tennis players near you.</h2>
            <SearchForm onSearch={onSearch} searchResult={searchResult} />
            {matchFound ? (
                <TennisUserList searchResult={searchResult} />) : (
                <p className='no-match-message'>No Match Player Was Found</p>
            )}

        {/* below code for showing google map */}
        <div className="App">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                mapContainerClassName="map-container"
                center={center}
                zoom={10}
                />
            )}
        </div>
            

        </div>
    );
};

