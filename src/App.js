import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskDisplayer from "./Components/Tasks";
import { UserProvider } from "./Components/UserProvider";

function App() {
  return (
    <div>
      <UserProvider>
        <Header />
        <TaskDisplayer />
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
