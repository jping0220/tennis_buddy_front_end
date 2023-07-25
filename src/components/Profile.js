import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Profile = ({ userData }) => {
  // console.log("userData in Profile:",userData.user.name)
  const { user, isAuthenticated } = useAuth0();
  
  
  if (!userData) {
    return <div>Loading...</div>
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>

        {userData && (
          <React.Fragment>
            <p>Name: {userData.user.name}</p>
            {/* <p>Email: {userData.email}</p> */}
            <p>Zip Code: {userData.user.zip_code}</p>
            <p>Tennis Level: {userData.user.tennis_level}</p>
            <p>Preferences: {userData.user.preferences}</p>
          </React.Fragment>
        )}
        
      </div>
    )
  );
};

export default Profile;
