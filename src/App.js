import React, {useEffect, useState, useCallback} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import tennisPlayer from "./assets/tennisPlayer.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { LoginRedirect } from "./components/LogInRedirect";
import { LogoutRedirect } from "./components/LogoutRedirect";


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
  // these are for the new_form state (after post):
  const [showForm, setShowForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  // these are the editform state
  const [showSuccessPatch, setShowSuccessPatch] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showSuccessDelete, setShowSuccessDelete] = useState(false);




// search query by two or one param
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


// post new user
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
      setShowForm(false);
    } catch (error) {
      setShowForm(true);
      console.log(error.message);
      if (error.response) {
        // The request was made, and the server responded with a status code other than 2xx
        console.error("Server Error:", error.response.data);
        setErrorMessage(error.response.data.msg); // Assuming the server returns an error message in the response data
      } else if (error.request) {
        // The request was made, but no response was received (e.g., server is down)
        console.error("No Response:", error.request);
        setErrorMessage("No response from the server");
      } else {
        // Something else happened in making the request that triggered an error
        console.error("Error:", error.message);
        setErrorMessage("An error occurred while making the request");
      }    
    }
  }


// get user
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
  

// Patch/Edit user information
  const handleEditSubmit = async (updatedData) => {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.patch("https://tennis-buddy-back-end.onrender.com/users/me",
      {
          name: updatedData.name,
          email: updatedData.email,
          zip_code: updatedData.zip_code,
          tennis_level: updatedData.tennis_level,
          preferences: updatedData.preferences          
        },
      {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log("Updated form data:", response.data);
      setShowSuccessPatch(true);
      setShowEditForm(false);
      // Optionally, can update the local userData state with the response data
      // setUserData(response.data);
    } catch (error) {
      console.error("Error updating user data:", error);
      setShowSuccessPatch(false);
    }
  };
// Delete profile
  const handleDelete = async () => {
    try {
      const token = await getAccessTokenSilently();
      await axios.delete("https://tennis-buddy-back-end.onrender.com/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("User data deleted successfully.");
      setShowSuccessDelete(true)
      setUserData(null);
    } catch (error) {
      console.error("Error deleting user data:", error);
      setShowSuccessDelete(false);
      // if (error.response) {
      //   // The request was made, and the server responded with a status code other than 2xx
      //   console.error("Server Error:", error.response.data);
      //   setErrorMessage(error.response.data.msg); // Assuming the server returns an error message in the response data
      // } else if (error.request) {
      //   // The request was made, but no response was received (e.g., server is down)
      //   console.error("No Response:", error.request);
      //   setErrorMessage("No response from the server");
      // } else {
      //   // Something else happened in making the request that triggered an error
      //   console.error("Error:", error.message);
      //   setErrorMessage("An error occurred while making the request");
      // }    
    }
  };


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
            <Route path="log_in" element={<LoginRedirect />} />
            <Route path="log_out" element={<LogoutRedirect />} />

            <Route
              path="sign_up"
              element={
                <SignUp
                  onListing={callPostRequest}
                  showForm={showForm}
                  errorMessage={errorMessage}
                />
              }
            />

            <Route
              path="profile"
              element={
                <Profile
                  onDelete={handleDelete}
                  userData={userData}
                  onEditSubmit={handleEditSubmit}
                  showEditForm={showEditForm}
                  showSuccessPatch={showSuccessPatch}
                  showSuccessDelete={showSuccessDelete}
                />
              }
            />
          </Routes>
        </Router>
      </Layout>
    </React.Fragment>
  );

  };

export default App;

