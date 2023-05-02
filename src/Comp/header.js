import React, { Component, useState } from "react";
import { Button, Dropdown, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const state = { loggedIn: false };
  const log = {
    name: "Natnael",
    role: "wh",
  };
  // const [Name,setName]=useState('Natty');
  // const [Role,setRole]=useState('role');

  const logout = () => {
    state.loggedIn = false;
    log.name = "";

    alert("LogOut " + state.loggedIn);
  };
  const loginForm = () => {
    this.render();
  };
  const logger = () => {
    if (state.loggedIn) {
      return (
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {log.name}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    } else {
      return (
        <Button onClick={loginForm} variant="outline-dark">
          Login
        </Button>
      );
    }
  };
  return (
    <Navbar bg="primary" sticky="top" variant="light" expand="lg">
      <div className="nav-links">
        <Navbar.Brand href="/">
          <img
            src="logoUU.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="UULogo"
          />
        </Navbar.Brand>
        <Nav.Link href="#home">
          <i class="fas fa-home fa-lg  "></i>
        </Nav.Link>
      </div>
      <div className="nav-links">
        <Nav.Link href="#home">
          <i class="fas fa-comments fa-lg  " />
        </Nav.Link>
        <Nav.Link href="#link">
          <i class="fas fa-bell fa-lg  " />
        </Nav.Link>

        {logger()}
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  );
}

export default Header;
