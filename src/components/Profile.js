import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import EditForm from "./EditForm";


const Profile = ({ userData, onEditSubmit, onDelete, showSuccessMessage }) => {
  console.log("userData in Profile:",userData)
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [showEditForm, setShowEditForm] = useState(false);

  
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!userData) {
    return <div>No User Data Available</div>
  }
  
  const handleEditSubmit = (updateData) => {
    onEditSubmit(updateData);
  };
  
  const handleDelete = () => {
    onDelete();
  };


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

        {/* Show edit form if user clicked on edit button */}
        {showEditForm ? (
          <EditForm
            initialData={userData}
            onEditSubmit={handleEditSubmit}
          />
        ) : (
          <button onClick={() => setShowEditForm(true)}>Edit</button>
        )}

        <button onClick={handleDelete}>Delete</button>
        
        {showSuccessMessage && <div>Changes were made successfully.</div>}
        
      </div>
    )
  );
};

export default Profile;
