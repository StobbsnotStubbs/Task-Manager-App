import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import AddModalButton from "./AddButton";
import LoginButton from "./auth0/components/login";
import Profile from "./auth0/components/profile";
import LogoutButton from "./auth0/components/logout";
//change signed in as

function Header() {
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
            <AddModalButton></AddModalButton>
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
