import { createContext, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loginWithRedirect, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthContextProvider, useAuth };
