import React from 'react';
import TennisUserDetails from './TennisUserDetails';


const TennisUserList = ({ searchResults }) => {
    return (
      <div>
        <h1>Tennis User Management</h1>
        {searchResults.length > 0 ? (
          searchResults.map((user) => (
            <TennisUserDetails key={user.id} user={user} />
          ))
        ) : (
          <p>No matching users found.</p>
        )}
      </div>
    );
  };

export default TennisUserList;