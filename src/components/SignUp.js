import React from "react";
import NewUserForm from "./NewUserForm";

const SignUp = ({ isAuthenticated, onListing }) => {
    return (
    <div>
        <h2>new user to sign up with personal info</h2>
        {isAuthenticated && <NewUserForm onSubmit={onListing} />}
    </div>
    );
};

export default SignUp;