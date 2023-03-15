import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <Auth0Provider
    domain="leoktay.eu.auth0.com"
    clientId="BUJgIkrtValN60dVOBz7jmHQCgufYYoM"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
