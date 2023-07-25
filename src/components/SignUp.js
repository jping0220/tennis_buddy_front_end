import React from "react";
import NewUserForm from "./NewUserForm";

const SignUp = ({ onListing , showForm}) => {
    // console.log(onListing)
    return (
    <div>
            <h2>new user to sign up with personal info</h2>
        {showForm ? (
            <NewUserForm onListing={onListing} />
            ): (
            <p>unable to display message!</p>
            )}
    </div>
    );
};

export default SignUp;
