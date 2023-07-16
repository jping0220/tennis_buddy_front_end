import React from "react";
import TennisUser from "./components/TennisUser";

function App() {
  const user = [{
    id: 1,
    name: 'Ping',
    email: 'jping@gmail.com',
    tennis_level: 3.5,
    zip_code: '12345',
    preference: 'Singles and night time',
  },
  {
    id: 2,
    name: 'Laura',
    email: 'Laura@gmail.com',
    tennis_level: 3.0,
    zip_code: '54321',
    preference: 'Weekends in the morning',
    }];
  

    return (
      <div>
        <h1>Tennis User Management</h1>
        {user.map((user) => (<TennisUser key={user.id} user={user} />))}
      </div>
    );
  };

export default App;
