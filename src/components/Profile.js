import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import EditForm from "./EditForm";
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';




export const Profile = ({
  userData,
  onEditSubmit,
  onDelete
}) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [showEditForm, setShowEditForm] = useState(false);
  // const [showSuccessPatch, setShowSuccessPatch] = useState(false);
  const handleClose = () => setShowEditForm(false);
  const handleShow = () => setShowEditForm(true);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!userData) {
    return (
      <div className="no-personal-profile-msg">
        <h3>No Personal Profile Available</h3>
        <p>
          <Link to="/sign_up">
            <Button className="tennis-search-button" variant="primary">
            <span role='img' aria-label="search-icon">🎾 </span>
              Click here to sign up</Button>
          </Link>
        </p>
      </div>
    );
  }


  const handleEditSubmit = async (updateData) => {
    onEditSubmit(updateData);
    setShowEditForm(false);
    // setShowSuccessPatch(true);
  };

  const handleDelete = () => {
    onDelete();
  
  };



  return (
    isAuthenticated && (
      <div className="profile-container">
        <img src={user.picture} alt={user.name} className="email-image" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>

        {userData && (
          <React.Fragment>
            <div className="profile-info">
              <p><strong>Name:</strong>  {userData.user.name}</p>
              <p><strong>Email:</strong> {userData.user.email}</p>
              <p><strong>Zip Code:</strong> {userData.user.zip_code}</p>
              <p><strong>Tennis Level:</strong> {userData.user.tennis_level}</p>
              <p><strong>Preferences:</strong> {userData.user.preferences}</p>
            </div>
          </React.Fragment>
        )}

        <div className="profile-button-container">
          <button onClick={handleShow} className="edit-btn">Edit</button>
          <button onClick={handleDelete} className="delete-btn">Delete</button>
        </div>

        {/* {showSuccessPatch && (
          <div>
            <h3>Changes were made successfully.</h3>
          </div>
        )} */}

        <Modal show={showEditForm} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditForm initialData={userData.user} onEditSubmit={handleEditSubmit} />
          </Modal.Body>
        </Modal>
        
    </div>    
    )
  );
};
