import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";


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
            required
          />
        </Form.Group>
  
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
  
        <Form.Group controlId="zip_code">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            type="text"
            name="zip_code"
            value={formData.zip_code}
            onChange={handleChange}
            required
          />
        </Form.Group>
  
        <Form.Group controlId="tennis_level">
          <Form.Label>Tennis Level</Form.Label>
          <Form.Control
            as="select"
            name="tennis_level"
            value={formData.tennis_level}
            onChange={handleChange}
            required
          >
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
            required
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