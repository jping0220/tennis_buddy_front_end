import React from 'react';
import TennisUser from './TennisUser';


const TennisUserList = ({ searchResult}) => {
    return (
      <div className ="tennis-user-list-container">
        {searchResult.map((user) => (
          <TennisUser key={user.tennis_user_id} user={user} />
        ))}
      </div>
    );
  };

export default TennisUserList;