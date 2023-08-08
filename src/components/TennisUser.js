import React from 'react';
import Card from "react-bootstrap/Card";
import { useAuth0 } from "@auth0/auth0-react";

const TennisUser = ({ user }) => {
  const { isAuthenticated } = useAuth0();

  // if (!isAuthenticated) {
  //   return (
  //   <div>
  //     <Card className='tennis-user-card'>
  //     <Card.Body className='user-info'>
  //       <Card.Title className="user-info-name">Name: 🎾</Card.Title>
  //       <Card.Subtitle className="user-info-email">Email: 🎾</Card.Subtitle>
  //       <Card.Subtitle className="user-info-zip-code">Zip Code: {user.zip_code}</Card.Subtitle>
  //       <Card.Subtitle className="user-info-skill-level">Tennis Level: {user.tennis_level}</Card.Subtitle>
  //       <Card.Text className="user-info-preferences">
  //         Preferences: {user.preferences}
  //       </Card.Text>
  //           <div className='contact-info'>log in for contact info</div>
  //       </Card.Body>
  //       </Card>
        
  //   </div>
  //   )
  // }

  return (
    // isAuthenticated && (
      <Card className='tennis-user-card'>
      <Card.Body className='user-info'>
        <Card.Title className="user-info-name">Name: {user.name}</Card.Title>
        <Card.Subtitle className="user-info-zip-code">Zip Code: {user.zip_code}</Card.Subtitle>
        <Card.Subtitle className="user-info-email">Email: {user.email}</Card.Subtitle>
        <Card.Subtitle className="user-info-skill-level">Tennis Level: {user.tennis_level}</Card.Subtitle>
        <Card.Text className="user-info-preferences">
          Preferences: {user.preferences}
        </Card.Text>
      </Card.Body>
    </Card>
    )
    // );
};

export default TennisUser;
