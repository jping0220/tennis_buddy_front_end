import React from 'react';
import SearchForm from './SearchForm';
import TennisUserList from './TennisUserList';
import { MapDisplay } from './Map';



export const Home = ({ onSearch, searchResult, matchFound, isAuthenticated }) => {
    console.log("isAuthenticated:", isAuthenticated);
    return (
        <div className='home-container'>
            <h2>Search tennis players near you.</h2>
            <SearchForm onSearch={onSearch} searchResult={searchResult} />
            {matchFound ? (
                <TennisUserList searchResult={searchResult} />) : (
                <p className='no-match-message'>No Match Player Was Found!</p>
            )}

            {/* below code for showing google map */}
            {isAuthenticated && <MapDisplay searchResult={searchResult}></MapDisplay>}
            

        </div>
    );
};

