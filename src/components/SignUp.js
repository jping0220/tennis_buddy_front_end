import React from "react";
import NewUserForm from "./NewUserForm";
// import { useNavigate } from "react-router-dom";

const SignUp = ({ onListing, showForm, errorMessage }) => {
    // const navigate = useNavigate();
    // const handleListing = async (formProfileData) => {
    //     try {
    //       await onListing(formProfileData);
    //       navigate("/profile"); // Redirect to the profile page after form submission
    //     } catch (error) {
    //       // Handle error if necessary
    //     }
    //   };


    return (
      <div>
        <h2>new user to sign up with personal info</h2>
        {showForm ? (
          <NewUserForm onListing={onListing} />
        ) : (
          <p>Succesfully submitted form</p>
        )}
        {errorMessage && <div>Caution: {errorMessage}</div>}
      </div>
    );
};

export default SignUp;
