import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Button from "react-bootstrap/esm/Button";
const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  const handleLogout = () => {
    localStorage.removeItem("token");
    logout({ returnTo: window.location.origin });
  };
  return isAuthenticated && <Button onClick={handleLogout}>Log Out</Button>;
};

export default LogoutButton;
