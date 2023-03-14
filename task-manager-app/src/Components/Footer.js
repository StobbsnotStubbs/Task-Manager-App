import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import AboutModal from "./AboutModal";

function Footer() {
  return (
    <Navbar
      fixed="bottom"
      bg="dark"
      variant="dark"
    >
      <Container>
        <AboutModal />
      </Container>
    </Navbar>
  );
}

export default Footer;
