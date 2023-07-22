import React from 'react';
import Card from "react-bootstrap/Card";

const TennisUser = ({ user }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Zip Code: {user.zip_code}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Email: {user.email}</Card.Subtitle>
        <Card.Text>
          Preferences: {user.preferences}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TennisUser;


// const TennisUser = ({ user }) => {
//     // Render the details of a single user
//     return (
//       <div>
//         <h2>Name:{user.name}</h2>
//         <p>Email: {user.email}</p>
//         <p>Tennis Level: {user.tennis_level}</p>
//         <p>Zip Code: {user.zip_code}</p>
//         <p>Preferences: {user.preferences}</p>
//         <hr />
//       </div>
//     );
//   };

// export default TennisUser;