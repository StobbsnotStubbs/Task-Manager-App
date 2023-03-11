import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskDisplayer from "./Components/Tasks";

function App() {
  return (
    <div>
      <Header />
      <TaskDisplayer />
      <Footer />
    </div>
  );
}

export default App;
