import React from 'react';
import SearchForm from './SearchForm';
import TennisUserList from './TennisUserList';


export const Home = ({ onSearch, searchResult, matchFound }) => {
    return (
        <div className='home-container'>
            <h2>Search tennis players near you.</h2>
            <SearchForm onSearch={onSearch} searchResult={searchResult} />
            {matchFound ? (
                <TennisUserList searchResult={searchResult} />) : (
                <p className='no-match-message'>No Match Player Was Found</p>
            )}
        </div>
    );
};

