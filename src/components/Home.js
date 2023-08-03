import React from 'react';
import SearchForm from './SearchForm';
import TennisUserList from './TennisUserList';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";


export const Home = ({ onSearch, searchResult, matchFound }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey:process.env.REACT_GOOGLE_API_KEY_2,
      });
    const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
    
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

