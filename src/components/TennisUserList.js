import React from 'react';
import TennisUser from './TennisUser';


const TennisUserList = ({ searchResult }) => {
  console.log(searchResult)
  if (!searchResult || searchResult.length === 0) {
    return <p>No matching users found.</p>;
  }
    return (
      <div>
        <h1>Players</h1>
        {searchResult.map((user) => (
          <TennisUser key={user.tennis_user_id} user={user} />
        ))}
      </div>
    );
  };

export default TennisUserList;