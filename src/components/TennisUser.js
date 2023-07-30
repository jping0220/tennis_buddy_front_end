import React from 'react';
import Card from "react-bootstrap/Card";

const TennisUser = ({ user }) => {
  return (
    <Card className='tennis-user-card' style={{ width: "30rem" }}>
      <Card.Body>
        <Card.Title className="user-info-name">Name: {user.name}</Card.Title>
        <Card.Subtitle className="user-info-zip-code">Zip Code: {user.zip_code}</Card.Subtitle>
        <Card.Subtitle className="user-info-email">Email: {user.email}</Card.Subtitle>
        <Card.Subtitle className="user-info-skill-level">Tennis Level: {user.tennis_level}</Card.Subtitle>
        <Card.Text className="user-info-preferences">
          Preferences: {user.preferences}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TennisUser;
