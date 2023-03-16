import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Button from "react-bootstrap/esm/Button";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      authorizationParams: {
        redirect_uri: "http://localhost:3000/",
      },
    });
  };

  return !isAuthenticated && <Button onClick={handleLogin}>Log In</Button>;
};

export default LoginButton;
