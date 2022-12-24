import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { Navbar, Nav, NavLink, Container, Button } from "react-bootstrap";
import Logo from "./images/logo.svg";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" fixed="top" className="mt-5">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="logo" src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            data-bs-target="#basic-navbar-nav"
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="justify-content-end">
              <NavLink as={Link} to="/features">
                Features
              </NavLink>
              <NavLink as={Link} to="/team">
                Team
              </NavLink>
              <NavLink as={Link} to="/signin">
                Sign In
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
