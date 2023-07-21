import React, { useState } from "react";


const SearchBar = () => {
    const [searchZip, setSearchZip] = useState("");
    const [searchLevel, setSearchLevel] = useState("");
    const [searchResult, setSearchResults] = useState([]);
    const [showNoMatch, setShowNoMatch] = useState(false);
    const zip_codes = [
        { zip_code: 98072, tennis_level: 3.5 },
        { zip_code: 98072, tennis_level: 4.0 },
        { zip_code: 98034, tennis_level: 3.0 },
        { zip_code: 98033, tennis_level: 4.5 },
        { zip_code: 98003, tennis_level: 3.5 }
      ];
    
    const handleChange = (e) => {
        const { name, value } = e.target;
    if (name === "zip_code") {
        setSearchZip(value);
    } else if (name === "tennis_level") {
      setSearchLevel((value));
    }
    };
    
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const filteredCodes = zip_codes.filter((zip) => {
            const zipCodeMatch = searchZip!== "" ? zip.zip_code.toString().includes(searchZip) :true ;
            const levelMatch = searchLevel !== "" ? zip.tennis_level === parseFloat(searchLevel) : true;
            return zipCodeMatch && levelMatch;
        });

        if (filteredCodes.length > 0) {
            setSearchResults(filteredCodes);
            setShowNoMatch(false);
          } else {
            setShowNoMatch(true);
          }
    };


    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="search"
                    name ="zip_code"
                    placeholder="Search by Zip Code"
                    onChange={handleChange}
                    value={searchZip}
                />
                <input
                    type="number"
                    name="tennis_level"
                    placeholder="Search by Tennis Level"
                    onChange={handleChange}
                    value={searchLevel}
                />
                <button tyep="submit">Search</button>
            </form>
                {showNoMatch ? (<p>No Match</p>)
                : (
            <table>
                <tr>
                    <th>Zip Code or </th>
                    <th>Tennis Level</th>
                </tr>
                {searchResult.map((zip, index) => (
                    <div>
                        <tr key={index}>
                            <td>{zip.zip_code}</td>
                            <td>{zip.tennis_level}</td>
                        </tr>
                    </div>
                ))}
            </table>
                 )}
        </div >
    );
};

export default SearchBar;

