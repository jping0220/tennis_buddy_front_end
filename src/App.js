import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { LogIn } from './components/LogIn';
import { NoMatch } from './components/NoMatch';
// import  TennisUserList from './components/TennisUserList';
import { Profile } from './components/Profile';
import { SignUp } from './components/SignUp';
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import tennisPlayer from "./assets/tennisPlayer.jpg";
// import SearchForm from "./components/SearchForm";
import axios from "axios";




const App = () => {
  const API = "https://tennis-buddy-back-end.onrender.com";
  const [searchResult, setSearchResults] = useState([])
  const [matchFound, setMatchFound] = useState(true);
  // { params: formData }
  // const back_params = {
  //   zip_code: formData.zipCode,
  //   tennis_level: formData.tennisLevel,
  //  }
  const handleSearch = (formData) => {
  //   console.log(`${formData.zipCode}formdata`);
  //   axios
  //     .get(`${API}/search`, { params: {formData} })

  //     .then((response) => {
  //       console.log("API Response:", response.data);
  //       setSearchResults(response.data);
  // })
      axios
        .get(`${API}/search`, { params: formData })
        .then((response) => {
          console.log("API Response:", response.data);
          setSearchResults(response.data);
          setMatchFound(response.data.length > 0);
        })

        .catch((error) => console.error("Error fetching data:", error));
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
              <Route path="/" element={<Home onSearch={handleSearch} searchResult={searchResult} />} />
              <Route path="log_in" element={<LogIn />} />
              <Route path="sign_up" element={<SignUp />} />
              <Route path="profile" element={<Profile />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Router>
        </Layout>
      </React.Fragment>
    );

  };

export default App;

