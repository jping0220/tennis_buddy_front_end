import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-6y0ycamcr4u3vu7z.us.auth0.com"
    clientId="pebRl8jK8ubXsLZh56Rf78BffIeGIIJ8"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://tennis_buddy",
    }}
    scope="email"
  >
    <App />
  </Auth0Provider>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
