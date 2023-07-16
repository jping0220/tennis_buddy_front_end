import React from 'react';

const TennisUser = ({ user }) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>ID: {user.id}</p>
            <p>Email: {user.email}</p>
            <p>Tennis Level: {user.tennis_level}</p>
            <p>Zip Code: {user.zip_code}</p>
            <p>Preference: {user.preference}</p>
        
        </div>
    );
};

export default TennisUser;