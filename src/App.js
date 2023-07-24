import React, {useState} from "react";
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
// this function is not ready:
  async function callPostRequest(formProfileData) {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.post(
        "https://tennis-buddy-back-end.onrender.com/users/me",
        {
          headers: { authorization: `Bearer ${token}` },
          params: {// here the params: formProfileData,
            name: formProfileData.name,
            email: formProfileData.email,
            zip_code: formProfileData.zip_code,
            tennis_level: formProfileData.tennis_level,
            preferences: formProfileData.preferences          
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  

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
                path="sign_up" element={<SignUp isAuthenticated={isAuthenticated}   onListing={callPostRequest} />}
              />
              <Route path="profile" element={<Profile />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Router>
          <h3>User is {isAuthenticated ? "Logged in" : "Not logged in"}</h3>
        </Layout>
      </React.Fragment>
    );

  };

export default App;

