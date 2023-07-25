import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Profile = ({ userData }) => {
  // console.log("userData in Profile:",userData.zip_code)
  const { user, isAuthenticated, isLoading,} = useAuth0();

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }
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
            {/* <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p> */}
            <p>Zip Code: {userData.zip_code}</p>
            <p>Tennis Level: {userData.tennis_level}</p>
            <p>Preferences: {userData.preferences}</p>
          </React.Fragment>
        )}
        
      </div>
    )
  );
};

export default Profile;
