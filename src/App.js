import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { LogIn } from './components/LogIn';
import { NoMatch } from './components/NoMatch';
import  TennisUserList from './components/TennisUserList';
import { Profile } from './components/Profile';
import { SignUp } from './components/SignUp';
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import tennisPlayer from "./assets/tennisPlayer.jpg";
import SearchForm from "./components/SearchForm";
import axios from "axios";




const App = () => {
  const API = "http://localhost:5000";
  const [searchResult, setSearchResults] = useState([])
  
  
  const handleSearch = (formData) => {
    console.log(formData)
    axios
      .get(`${API}/search`, { params: formData })
   
      .then((response) => {
        console.log("API Response:", response.data);
        setSearchResults(response.data)
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
              <Route path="/" element={<Home handleSearch={handleSearch}/>} />
              <Route path="log_in" element={<LogIn />} />
              <Route path="sign_up" element={<SignUp />} />
              <Route path="profile" element={<Profile />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Router>
          <SearchForm addForm={handleSearch} />
          <TennisUserList searchResult={searchResult} />
        </Layout>
      </React.Fragment>
    );

  };

export default App;

