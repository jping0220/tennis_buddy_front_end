import React, { useState } from "react";


const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResult, setSearchResults] = useState([]);
    const zip_codes = [
        {zip_code: 98072 },
        {zip_code: 98072 },
        {zip_code: 98034 },
        {zip_code: 98033 },
        {zip_code: 98003 }];
    
    const handleChange = (e) => {
        const inputValue = e.target.value;
        setSearchInput(inputValue);

        const filteredCodes = zip_codes.filter((zip) =>
            zip.zip_code.toString().includes(inputValue)
        );
        setSearchResults(filteredCodes);
    };


    const handleSearchSubmit = (e) => {
        e.preventDefault();
        
        const filteredCodes = zip_codes.filter((zip) =>
            zip.zip_code.toString().includes(searchInput)
        );
        setSearchResults(filteredCodes);
    }

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="search"
                    placeholder="Search here"
                    onChange={handleChange}
                    value={searchInput}
                />
                <button tyep="submit">Search</button>
            </form>
            <table>
                <tr>
                    <th>Zip Code</th>
                </tr>
                {searchResult.map((zip, index) => (
                    <div>
                        <tr key={index}>
                            <td>{zip.zip_code}</td>
                        </tr>
                    </div>
                ))}
            </table>
        </div >
    );
};

export default SearchBar;

