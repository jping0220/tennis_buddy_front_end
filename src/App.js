import React, {useEffect, useState, useCallback} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import { LogIn } from './components/LogIn';
import { NoMatch } from './components/NoMatch';
// import  TennisUserList from './components/TennisUserList';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import tennisPlayer from "./assets/tennisPlayer.jpg";
// import NewUserForm from "./components/NewUserForm";
// import SearchForm from "./components/SearchForm";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";






const App = () => {
    const {
      loginWithPopup,
      loginWithRedirect,
      logout,
      user,
      isAuthenticated,
      getAccessTokenSilently,
    } = useAuth0();

  const API = "https://tennis-buddy-back-end.onrender.com";
  const [searchResult, setSearchResults] = useState([])
  const [matchFound, setMatchFound] = useState(true);
  const [userData, setUserData] = useState(null);


  const handleSearch = (formData) => {
      axios
        .get(`${API}/search`, { params: formData })
        .then((response) => {
          console.log("API Response:", response.data);
          setSearchResults(response.data);
          setMatchFound(response.data.length > 0);
        })

        .catch((error) => { console.error("Error fetching data:", error);
          setMatchFound(false);
        });
  };


  async function callPostRequest(formProfileData) {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.post(
        "https://tennis-buddy-back-end.onrender.com/users/me",
        {
            name: formProfileData.name,
            email: formProfileData.email,
            zip_code: formProfileData.zip_code,
            tennis_level: formProfileData.tennis_level,
            preferences: formProfileData.preferences          
          },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }


  const getUserData = useCallback(async () => {
    try {
      const token = await getAccessTokenSilently(); 
      const response = await axios.get(
        "https://tennis-buddy-back-end.onrender.com/users/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
      
      return null;
    }
  }, [getAccessTokenSilently]);
  

  useEffect(() => {
    if (isAuthenticated) {
      getUserData().then((data) => {
        setUserData(data); 
      });
    }
    // console.log("userData in App useEffect:", userData);
  }, [isAuthenticated, getUserData]);
  

  return (
      <React.Fragment>
        <div className="pic">
          <img
            src={tennisPlayer}
            alt="tennis player background pic"
            height={200}
            width={300}
          />
        </div>
        <NavigationBar />

        <Layout>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    onSearch={handleSearch}
                    searchResult={searchResult}
                    matchFound={matchFound}
                  />
                }
              />
              <Route path="log_in" />
              {/* element={} */}
              <Route
                path="sign_up" element={<SignUp  onListing={callPostRequest} />}
              />
              <Route path="profile" element={<Profile userData={userData} />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Router>
          <h3>User is {isAuthenticated ? "Logged in" : "Not logged in"}</h3>
        </Layout>
      </React.Fragment>
    );

  };

export default App;

