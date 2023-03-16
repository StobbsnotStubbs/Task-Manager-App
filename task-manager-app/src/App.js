import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskDisplayer from "./Components/Tasks";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthContextProvider } from "./Context";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <AuthContextProvider>
      {isAuthenticated ? (
        <div>
          <Header />
          <TaskDisplayer />
          <Footer />
        </div>
      ) : (
        <div>
          <Header />
          <div>Please log in</div>
          <Footer />
        </div>
      )}
    </AuthContextProvider>
  );
}

export default App;
