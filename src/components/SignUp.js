import React from "react";
import NewUserForm from "./NewUserForm";


export const SignUp = ({ onListing, showForm, errorMessage }) => {

    return (
      <div>
        {/* <h2>new user to sign up with personal info</h2> */}
        {showForm ? (
          <NewUserForm onListing={onListing} />
        ) : (
          <p className="success-message">Welcome! You are part of the community!</p>
        )}
        {errorMessage && <div className="error-message">Caution: {errorMessage}</div>}
      </div>
    );
};

// export default SignUp;
