import React from "react";
import TennisUser from "./components/TennisUser";

function App() {
  const user = {
    id: 1,
    name: 'Ping',
    email: 'jping@gmail.com',
    tennis_level: '3.5',
    zip_code: '12345',
    preference: 'Singles and night time',
  };
    return (
      <div>
        <h1>Tennis User Management</h1>
        <TennisUser user={user} />
      </div>
    );
  };

export default App;
