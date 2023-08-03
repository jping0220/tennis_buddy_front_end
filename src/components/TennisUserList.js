import React from 'react';
import TennisUser from './TennisUser';
import { Marker } from '@react-google-maps/api';




const TennisUserList = ({ searchResult }) => {
  
    return (
      <div className ="tennis-user-list-container">
        {searchResult.map((user) => (
          
          <TennisUser key={user.tennis_user_id} user={user} />
          
        ))}

      </div>
    );
  
  };

export default TennisUserList;