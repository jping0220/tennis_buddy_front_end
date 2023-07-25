import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";


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

const EditForm = ({ initialData, onEditSubmit }) => {
    const [formData, setFormData] = useState(initialData);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onEditSubmit(formData);
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
         
          />
        </Form.Group>
  
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
        
          />
        </Form.Group>
  
        <Form.Group controlId="zip_code">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            type="text"
            name="zip_code"
            value={formData.zip_code}
            onChange={handleChange}
          
          />
        </Form.Group>
  
        <Form.Group controlId="tennis_level">
          <Form.Label>Tennis Level</Form.Label>
          <Form.Control
            as="select"
            name="tennis_level"
            value={formData.tennis_level}
            onChange={handleChange}
         
          >
            {tennisLevels.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
            {/* Your options for tennis levels */}
          </Form.Control>
        </Form.Group>
  
        <Form.Group controlId="preferences">
          <Form.Label>Preference</Form.Label>
          <Form.Control
            type="text"
            name="preferences"
            value={formData.preferences}
            onChange={handleChange}
       
          />
        </Form.Group>
  
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    );
  };
  
  EditForm.propTypes = {
    initialData: PropTypes.object.isRequired,
    onEditSubmit: PropTypes.func.isRequired,
  };
  
  export default EditForm;