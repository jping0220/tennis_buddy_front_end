import React from 'react';
import SearchForm from './SearchForm';
import TennisUserList from './TennisUserList';

const Home = ({ onSearch, searchResult, matchFound }) => {
    return (
        <div>
            <h1>Find Your Partner</h1>
            <SearchForm onSearch={onSearch} searchResult={searchResult} />
            {matchFound ? (
                <TennisUserList searchResult={searchResult} />) : (
                <p>No Match Found</p>
            )}
        </div>
    );
};

export default Home;
