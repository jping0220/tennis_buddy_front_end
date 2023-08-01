import React from "react";
import NewUserForm from "./NewUserForm";


export const SignUp = ({ onListing, showForm, errorMessage }) => {

    return (
      <div>
        {showForm ? (
          <NewUserForm onListing={onListing} />
        ) : (
          <p className="success-message">Welcome! You are part of the community!</p>
        )}
        {errorMessage && <div className="error-message">Caution: {errorMessage}</div>}
      </div>
    );
};

