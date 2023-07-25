import React, { useState } from "react";
import { PropTypes } from 'prop-types';
import { Form, Button } from "react-bootstrap";

const INITIAL_SEARCH_DATA = {
    zip_code: "",
    tennis_level: "",
};
  

const tennisLevels = [
    { value: "", label: "Select a level" },
    { value: "1.0", label: "1.0 - Novice" },
    { value: "1.5", label: "1.5 - Advance Novice" },
    { value: "2.0", label: "2.0 - Beginner" },
    { value: "2.5", label: "2.5 - Advance Beginner" },
    { value: "3.0", label: "3.0 - Intermediate" },
    { value: "3.5", label: "3.5 - Advance Intermediate" },
    { value: "4.0", label: "4.0 - Competitor" },
    { value: "4.5", label: "4.5 - Advance Competitor" },
    { value: "5.0", label: "5.0 - Expert" },
    { value: "5.5", label: "5.5 - Advance Expert" },
    { value: "6.0", label: "6.0 - Tournament Player" },
    { value: "7.0", label: "7.0 - Professional Player" },
  ];



const SearchForm = ({ onSearch }) => {
    const [searchFormData, setSearchFormData] = useState(INITIAL_SEARCH_DATA);
    

    const handleChange = (event) => {

        const { name, value } = event.target;
        setSearchFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(value)
  };
    

  const handleSubmit = (event) => {
      event.preventDefault();
      const formData = {};

      
      if (searchFormData.zip_code.trim() !== "") {
          formData.zip_code = searchFormData.zip_code;
      }
      if (searchFormData.tennis_level.trim() !== "") {
          formData.tennis_level = searchFormData.tennis_level;
      }
    
    if (Object.keys(formData).length > 0) {
        onSearch(formData);
        
    }

  };
    
    
  return (
    <Form onSubmit={handleSubmit} className="new-board-form__form">
      <Form.Group controlId="zip_code">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control
          required
          type="number"
          name="zip_code"
          value={searchFormData.zip_code}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="tennis_level">
        <Form.Label>Tennis Level</Form.Label>
        <Form.Control
          as="select"
          name="tennis_level"
          value={searchFormData.tennis_level}
          onChange={handleChange}
        >
          {tennisLevels.map((level) => (
            <option key={level.value} value={level.value}>
              {level.label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};


SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchForm;








