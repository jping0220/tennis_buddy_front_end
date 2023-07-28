import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import EditForm from "./EditForm";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Profile = ({
  userData,
  onEditSubmit,
  onDelete,
  successDelete,
}) => {
  console.log("userData in Profile....:", userData);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [showEditForm, setShowEditForm] = useState(false);
  const [showSuccessPatch, setShowSuccessPatch] = useState(false);
  const[changesMade, setChangesMade] = useState(false);

  useEffect(() => {
    if (changesMade) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [changesMade]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!userData) {
    return (
      <div>
        {successDelete && (
          <div>
            <h3>Success! The item has been deleted.</h3>
          </div>
        )}
        <h3>No Personal Profile Available</h3>
        <p>
          <Link to="/sign_up">
            <Button variant="primary">Click here to sign up</Button>
          </Link>
        </p>
      </div>
    );
  }
 

  const handleEditSubmit = async (updateData) => {
    onEditSubmit(updateData);
    setShowSuccessPatch(true);
    setShowEditForm(false);
    setChangesMade(true);

  };

  const handleDelete = () => {
    onDelete();
    setChangesMade(true);
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
            <p>Email: {userData.user.email}</p>
            <p>Zip Code: {userData.user.zip_code}</p>
            <p>Tennis Level: {userData.user.tennis_level}</p>
            <p>Preferences: {userData.user.preferences}</p>
          </React.Fragment>
        )}

        {showEditForm ? (
          <EditForm initialData={userData.user} onEditSubmit={handleEditSubmit} />
        ) : (
          <button onClick={() => setShowEditForm(true)}>Edit</button>
        )}

        <button onClick={handleDelete}>Delete</button>
        
        {showSuccessPatch && (
          <div>
            <h3>Changes were made successfully.</h3>
          </div>
        )}
      </div>
    )
  );
};

export default Profile;
