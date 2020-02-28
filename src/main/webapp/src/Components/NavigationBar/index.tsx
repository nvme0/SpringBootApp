import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/green-energy.svg";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src={logo}
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Spring-Powered React Frontend
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/api">Api</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
