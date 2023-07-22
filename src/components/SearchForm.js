import React, { useState } from "react";
import { PropTypes } from 'prop-types';

const INITIAL_SEARCH_DATA = {
    zipCode: "",
    tennislevel: "",
};
  
const SearchForm = ({ onSearch }) => {
  const [searchFormData, setSearchFormData] = useState(INITIAL_SEARCH_DATA);

  const handleChange = (event) => {
    const newFormData = {
      ...searchFormData,
      [event.target.name]: event.target.value,
    };
    console.log(event.target.value);
    setSearchFormData(newFormData);
    // const { name, value } = event.target;
    // setSearchFormData((prevData) => ({
    //     ...prevData,
    //     [name]: value,
    // }));
    // console.log(value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`${searchFormData.zip_code} searchformdata in handlesubmit`);
    onSearch(searchFormData);
    // setSearchFormData(INITIAL_SEARCH_DATA);
    // const formData = {};

    // if (searchFormData.zipCode.trim() !== "") {
    //   formData.zipCode = searchFormData.zipCode;
    // }

    // if (searchFormData.tennisLevel.trim() !== "") {
    //   formData.tennisLevel = searchFormData.tennisLevel;
    // }

    // // Check if both zip code and tennis level are empty.
    // // If both are empty, we will not perform the search.
    // if (Object.keys(formData).length > 0) {
    //     console.log(`${formData.name}formdata in handlesubmit`)
    //   addForm(formData);
    // } else {
    //   console.log("Please enter either zip code or tennis level.");
    // }
  };

  // This is gatherin number by number what's in the forms:
  // const handleChange = (event) => {
  //     const newSearchFormdData = {
  //         ...SearchFormData,
  //         [event.target.zipCode]: event.target.value,
  //         [event.target.tennisLevel]: event.target.value
  //     };
  //     console.log(event.target);
  //     setSearchFormData(newSearchFormdData);
  // };

  // THis is submitting what is in the form:
  // const handleSubmit = (event) => {
  //     event.preventDefault();
  // this comes from app--> use to be addBoard --> addFormData --> takes the input

  // addForm(searchFormData);
  // value to reset the state in the App funcion
  //turns the form again back to "":
  // setSearchFormData(INITIAL_BOARD_DATA);

  return (
    <form onSubmit={handleSubmit} className="new-board-form__form">
      <React.Fragment>
        <label htmlFor="zip_code">Zip Code</label>
        <input
          required
          type="number"
          id="zip_code"
          name="zipCode"
          value={searchFormData.zipCode}
          onChange={handleChange}
        />
        <label htmlFor="tennis_level">Tennis Level</label>
        <input
          // required
          type="number"
          id="tennis_level"
          name="tennisLevel"
          value={searchFormData.tennisLevel}
          onChange={handleChange}
        />
        <input className="submit_board" type="submit" value="submit" />

        {/* <button type="submit">Search now!</button> */}
      </React.Fragment>
    </form>
  );
};

SearchForm.propTypes = {
    addForm: PropTypes.func.isRequired,
};

export default SearchForm;





// const SearchBar = () => {
//     const [searchZip, setSearchZip] = useState("");
//     const [searchLevel, setSearchLevel] = useState("");
//     const [searchResult, setSearchResults] = useState([]);
//     const [showNoMatch, setShowNoMatch] = useState(false);
//     const zip_codes = [
//         { zip_code: 98072, tennis_level: 3.5 },
//         { zip_code: 98072, tennis_level: 4.0 },
//         { zip_code: 98034, tennis_level: 3.0 },
//         { zip_code: 98033, tennis_level: 4.5 },
//         { zip_code: 98003, tennis_level: 3.5 }
//       ];
    
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//     if (name === "zip_code") {
//         setSearchZip(value);
//     } else if (name === "tennis_level") {
//       setSearchLevel((value));
//     }
//     };
    
//     const handleSearchSubmit = (e) => {
//         e.preventDefault();
//         const filteredCodes = zip_codes.filter((zip) => {
//             const zipCodeMatch = searchZip!== "" ? zip.zip_code.toString().includes(searchZip) :true ;
//             const levelMatch = searchLevel !== "" ? zip.tennis_level === parseFloat(searchLevel) : true;
//             return zipCodeMatch && levelMatch;
//         });

//         if (filteredCodes.length > 0) {
//             setSearchResults(filteredCodes);
//             setShowNoMatch(false);
//           } else {
//             setShowNoMatch(true);
//           }
//     };


// return (
//         <div>
//             <form onSubmit={handleSearchSubmit}>
//                 <input
//                     type="search"
//                     name ="zip_code"
//                     placeholder="Search by Zip Code"
//                     onChange={handleChange}
//                     value={searchZip}
//                 />
//                 <input
//                     type="number"
//                     name="tennis_level"
//                     placeholder="Search by Tennis Level"
//                     onChange={handleChange}
//                     value={searchLevel}
//                 />
//                 <button tyep="submit">Search</button>
//             </form>
//                 {showNoMatch ? (<p>No Match</p>)
//                 : (
//             <table>
//                 <tr>
//                     <th>Zip Code or </th>
//                     <th>Tennis Level</th>
//                 </tr>
//                 {searchResult.map((zip, index) => (
//                     <div>
//                         <tr key={index}>
//                             <td>{zip.zip_code}</td>
//                             <td>{zip.tennis_level}</td>
//                         </tr>
//                     </div>
//                 ))}
//             </table>
//                  )}
//         </div >
//     );
// };



