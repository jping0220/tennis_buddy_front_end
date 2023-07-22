import React from 'react';

const TennisUserDetails = ({ user }) => {
    // Render the details of a single user
    return (
      <div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Tennis Level: {user.tennis_level}</p>
        <p>Zip Code: {user.zip_code}</p>
        <p>Preferences: {user.preferences}</p>
        <hr />
      </div>
    );
  };

export default TennisUserDetails;
