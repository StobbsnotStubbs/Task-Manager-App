import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskDisplayer from "./Components/Tasks";
import { UserProvider } from "./Components/UserProvider";
import { useEffect, useState } from "react";
import { initAuth0 } from "./Components/auth0/components/initAuth0";
import LogoutButton from "./Components/auth0/components/logout";

function App() {
  const [auth0, setAuth0] = useState(null);

  useEffect(() => {
    const initializeAuth0 = async () => {
      const auth0Instance = await initAuth0();
      setAuth0(auth0Instance);
    };
    initializeAuth0();
  }, []);

  return (
    <div>
      <UserProvider auth0={auth0}>
        <Header />
        <TaskDisplayer />
        <Footer />
        <LogoutButton auth0={auth0} />
      </UserProvider>
    </div>
  );
}

export default App;
