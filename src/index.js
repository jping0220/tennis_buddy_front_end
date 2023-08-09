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
);

reportWebVitals();
