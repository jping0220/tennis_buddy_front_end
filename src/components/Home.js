import React from 'react';
import SearchForm from './SearchForm';
import TennisUserList from './TennisUserList';

const Home = ({ onSearch, searchResult }) => {
    return (
        <div>
            <h1>Find Your Partner</h1>
            <SearchForm onSearch={onSearch}  searchResult={searchResult} />
            <TennisUserList  searchResult={searchResult}/>
        </div>
    )
}   

export default Home;
