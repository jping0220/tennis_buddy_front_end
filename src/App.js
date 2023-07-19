import React from "react";
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Home } from './Home';
import { LogIn } from './LogIn';
import { NoMatch } from './NoMatch';
import { TennisUsesr } from "./components/TennisUser";
import { Profile } from './components/Profile';
import { SignUp } from './components/SignUp';
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";




const App =() => {
  // const user = [{
  //   id: 1,
  //   name: 'Ping',
  //   email: 'jping@gmail.com',
  //   tennis_level: 3.5,
  //   zip_code: '12345',
  //   preference: 'Singles and night time',
  // },
  // {
  //   id: 2,
  //   name: 'Laura',
  //   email: 'Laura@gmail.com',
  //   tennis_level: 3.0,
  //   zip_code: '54321',
  //   preference: 'Weekends in the morning',
  // }];

    return (
      <React.Fragment>
        <div  className="jumbotron">
          <img src="./assets/tennisPlayer Cropped.jpg" alt="tennis player background pic" />
        </div>
        <NavigationBar />
        <Layout>
          <Router>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='log_in' element={<LogIn />} />
              <Route path='sign_up' element={<SignUp />} />
              <Route path='profile' element={<Profile />} />
              <Route path='*' element={<NoMatch />} />
              <Route path='players' element={<TennisUsesr/>} />
            </Routes>
          </Router>
        </Layout>
      </React.Fragment>
    );

  };

export default App;

{/* <h1>Tennis User Management</h1>
{user.map((user) => (<TennisUser key={user.id} user={user} />))} */}
