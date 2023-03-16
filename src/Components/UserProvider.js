import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function useUserUpdate() {
  return useContext(UserUpdateContext);
}

export function UserProvider({ children }) {
  const { isAuthenticated, isLoading, user, loginWithRedirect, logout } =
    useAuth0();
  const [auth0User, setAuth0User] = useState(null);

  useEffect(() => {
    if (isAuthenticated && user) {
      setAuth0User(user);
    } else {
      setAuth0User(null);
    }
  }, [isAuthenticated, user]);

  function updateUser(newUser) {
    setAuth0User(newUser);
  }

  function handleLogin() {
    loginWithRedirect();
  }

  function handleLogout() {
    logout({ returnTo: window.location.origin });
  }

  const value = {
    user: auth0User,
    isAuthenticated,
    isLoading,
    login: handleLogin,
    logout: handleLogout,
  };

  return (
    <UserContext.Provider value={value}>
      <UserUpdateContext.Provider value={updateUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}
