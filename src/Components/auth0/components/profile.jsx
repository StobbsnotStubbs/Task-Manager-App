import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { addUserToDb } from "./addUserToDb";
import { useUserUpdate } from "../../UserProvider";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const updateUser = useUserUpdate();

  useEffect(() => {
    if (user && isAuthenticated) {
      const { name: userName } = user;
      console.log(user);
      addUserToDb(userName);
      updateUser(userName);
    }
  }, [isAuthenticated, user, updateUser]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated && <div style={{ padding: "5px 0" }}>logged in as: {user.name}</div>;
};

export default Profile;
