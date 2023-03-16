import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Button
        onClick={async () => {
          await logout({
            returnTo: "http://localhost:3000/",
          });
        }}
      >
        Log Out
      </Button>
    )
  );
};

export default LogoutButton;
