import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import AddModalButton from "./AddButton";
import LoginButton from "./auth0/components/login";
import Profile from "./auth0/components/profile";
import LogoutButton from "./auth0/components/logout";
import { useAuth0 } from "@auth0/auth0-react";
//change signed in as

function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <Navbar
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">Task-Manager</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{ paddingRight: "10px" }}>
            {isAuthenticated && <AddModalButton />}
          </Navbar.Text>
          <Navbar.Text style={{ display: "flex", gap: "10px" }}>
            <LoginButton />
            <Profile />
            <LogoutButton />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
