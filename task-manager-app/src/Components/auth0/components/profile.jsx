import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div style={{ padding: "5px 0" }}>logged in as: {user.name}</div>
    )
  );
};

export default Profile;