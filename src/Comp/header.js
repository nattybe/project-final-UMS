import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  Modal,
  Nav,
  Navbar,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, Navigate, Outlet } from "react-router-dom";
import Profile from "./profile";

function Header() {
  const [notification, setNotification] = useState([
    {
      SentBy: "user",
      Title: "The note",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      SentBy: "user",
      Title: "The note",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      SentBy: "user",
      Title: "The note",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      SentBy: "user",
      Title: "The note",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      SentBy: "user",
      Title: "The note",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      SentBy: "user",
      Title: "The note",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loggerInfo, setLoggerInfo] = useState();

  const getLogger = () => {
    let logger = JSON.parse(window.sessionStorage.getItem("logger"));
    console.log("logger => GetLogger " + logger);
    setLoggerInfo(logger);
  };

  useEffect(() => {
    if (loggerInfo) {
      // alert(loggerInfo.S_ID);
      console.log(loggerInfo);
    } else {
      getLogger();
    }
  }, [loggerInfo]);

  const logout = () => {
    window.sessionStorage.removeItem("logger");
    // <a href="/home" id="LinkLogin"></a>
    // documnet.getElementById("LinkLogin").click();
    window.open("/", "_self");
  };
  const loginer = () => {
    // che.append(<Profile/>)
    const che = document.getElementById("loginer");
    che.showModal();
  };
  const closer = () => {
    const che = document.getElementById("loginer");
    che.close();
  };
  const logger = () => {
    if (loggerInfo) {
      return (
        <>
          <Nav.Link href="/">
            <Link className="nav-link" to="/messages">
              <i class="fas fa-comments fa-lg" />
            </Link>
          </Nav.Link>
          <Nav.Link role="button" onClick={handleShow}>
            <i class="fas fa-bell fa-lg" />
          </Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {loggerInfo.S_FIRSTNAME + " " + loggerInfo.S_LASTNAME}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      );
    } else {
      return (
        <Link
          className="btn btn-primary float-right border border-dark"
          to="/login"
        >
          Login
        </Link>
      );
    }
  };
  return (
    <>
      <Navbar bg="primary" sticky="top" variant="light" expand="lg">
        <div className="nav-links">
          <Navbar.Brand>
            <Link to="/">
              <img
                src="logoUU.png"
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="UULogo"
              />
            </Link>
          </Navbar.Brand>
          <Nav.Link href="/">
            <i class="fas fa-home fa-lg" />
          </Nav.Link>
          <dialog id="loginer" className="diag">
          <div><Button className="" onClick={closer}>X</Button></div>
            <Profile />
          </dialog>
          {/* <Button onClick={loginer}>Showdiag</Button> */}
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              Navigate
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item role="list">
                <Link to="/profile">Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item role="list">
                <Link to="/login">login</Link>
              </Dropdown.Item>
              <Dropdown.Item role="list">
                <Link to="/messages">messages</Link>
              </Dropdown.Item>
              <Dropdown.Item role="list">
                <Link to="/student">student</Link>
              </Dropdown.Item>
              <Dropdown.Item role="list">
                <Link to="/instructor">instructor</Link>
              </Dropdown.Item>
              <Dropdown.Item role="list">
                <Link to="/librarian">librarian</Link>
              </Dropdown.Item>
              <Dropdown.Item role="list">
                <Link to="/registrar">registrar</Link>
              </Dropdown.Item>
              <Dropdown.Item role="list">
                <Link to="/programoffice">programoffice</Link>
              </Dropdown.Item>
              <Dropdown.Item role="list">
                <Link to="/department">department</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="nav-links">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header className="bg-primary" closeButton>
              <Modal.Title>Notification</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container className="view-notify-body-cont">
                {notification.map((notification) => {
                  return (
                    <div className="view-notify-item border border-dark p-1 mt-2">
                      <h5>Title: {notification.Title}</h5>
                      <section>Description: {notification.Description}</section>
                    </div>
                  );
                })}
              </Container>
            </Modal.Body>
          </Modal>
          {logger()}
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Header;
