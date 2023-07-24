import React from "react";
import NewUserForm from "./NewUserForm";

const SignUp = ({ onListing }) => {
    // console.log(onListing)
    return (
    <div>
        <h2>new user to sign up with personal info</h2>
        {<NewUserForm onListing={onListing} />}
    </div>
    );
};

export default SignUp;