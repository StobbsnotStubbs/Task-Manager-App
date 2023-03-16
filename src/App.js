import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskDisplayer from "./Components/Tasks";
import { UserProvider } from "./Components/UserProvider";
import { useEffect, useState } from "react";
import { initAuth0 } from "./Components/auth0/components/initAuth0";
import { useAuth0 } from "@auth0/auth0-react";

async function App() {
  const [auth0, setAuth0] = useState(null);
  const { isAuthenticated } = useAuth0();
  useEffect(() => {
    const initialiseAuth0 = async () => {
      const auth0Instance = await initAuth0();
      setAuth0(auth0Instance);
    };
    initialiseAuth0();
  }, []);
  return (
    <div>
      <UserProvider auth0={auth0}>
        {isAuthenticated ? (
          <div>
            <Header />
            <TaskDisplayer />
            <Footer />
          </div>
        ) : (
          <div>
            <Header />
            <div
              style={{
                textAlign: "center",
              }}
            >
              Please log in
            </div>
            <Footer />
          </div>
        )}
      </UserProvider>
    </div>
  );
}

export default App;
