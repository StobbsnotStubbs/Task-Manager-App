import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain="leoktay.eu.auth0.com"
    clientId="BUJgIkrtValN60dVOBz7jmHQCgufYYoM"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById("root")
);
