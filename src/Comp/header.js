import React, { useEffect, useState } from "react";
import {
  Accordion,
  Button,
  Container,
  Dropdown,
  Modal,
  Nav,
  Navbar,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import Profile from "./profile";
import { baseUrl } from "../globalConst";
// import dasdea from "./body";
function Header() {
  // const [notification, setNotification] = useState([
  //   {
  //     SentBy: "Department",
  //     Title: "Dear Students",
  //     Description:
  //       "Welcome to the Department of Students. You will receive a list of students and their parents to receive",
  //   },
  //   {
  //     SentBy: "Student Union",
  //     Title: "For Graduation Candidates",
  //     Description: "please pay your year book fees  in the given time",
  //   },
  // ]);
  const [show, setShow] = useState(false);
  const [loggerInfo, setLoggerInfo] = useState();
  const [notifications, setNotifications] = useState({ status: "not yet" });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getLogger = () => {
    let logger = JSON.parse(window.sessionStorage.getItem("logger"));
    console.log("logger => GetLogger " + logger);
    setLoggerInfo(logger);
  };
  // getLogger()
  useEffect(() => {
    if (loggerInfo) {
      // alert(loggerInfo.S_ID);
      console.log(loggerInfo);
    } else {
      getLogger();
    }
  }, [loggerInfo]);
  const navigator=useNavigate();
  const logout = () => {
    window.sessionStorage.removeItem("logger");
    // <a href="/home" id="LinkLogin"></a>
    // documnet.getElementById("LinkLogin").click();
    // window.open("/", "_self");
    navigator("/")
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
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {loggerInfo.fname + " " + loggerInfo.lname}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="ms-0 ps-0"><Link to="/profile" className="ms-0 ps-0"/> Profile</Dropdown.Item>
              <Dropdown.Item className="ms-2 ps-3" onClick={logout}>Logout</Dropdown.Item>
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
  const getNotification = async () => {
    // let resa;
    const fd = new FormData();
    fd.append("getNotifications", true);
    // console.warn("getSections started " + stdProgram);
    let dep = await fetch(baseUrl + "Notify.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
      },
      body: fd,
    });
    // console.warn(await dep.json());
    // console.log(dep.formData());
    dep = await dep.json();
    setNotifications(dep);
    // console.warn(notifications);
    // setOriginalSection(dep.data);
    //   if (typeof resa !== "undefined") {
    //     console.log("from resa.status " + sections.status);
    //     console.log("from resa " + sections);
    //   } else {
    //     // console.warn('undefiend: '+deps);
    //     // console.log(sections);
    //   }
  };
  const notificationFiller = () => {
    let depOptions = [];
    if (notifications.status === "success") {
      notifications.data.map((notification) => {
        depOptions.push(
          <div className="view-notify-item border border-dark p-1 mt-2">
            <Accordion.Item eventKey={notification.N_ID}>
              <Accordion.Header>
                <p>{notification.N_Title}</p>
                {/* <p className="text-end">hello</p> */}
              </Accordion.Header>
              <Accordion.Body>{notification.N_Content}</Accordion.Body>
              
            </Accordion.Item>
          </div>
        );
      });
      return depOptions;
    } else {
      return (
        <>
          <h1>No New Notifications</h1>
        </>
      );
    }
  };
  useEffect(() => {
    getNotification();
  }, []);
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
            <div>
              <Button className="" onClick={closer}>
                X
              </Button>
            </div>
            <Profile />
          </dialog>
          {/* <Button onClick={loginer}>Showdiag</Button> */}
          {/* <Dropdown> 
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
          </Dropdown> */}
        </div>
        <div className="nav-links">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header className="bg-primary" closeButton>
              <Modal.Title>Notification</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container className="view-notify-body-cont">
                <Accordion defaultActiveKey="0">
                  {notificationFiller()}
                </Accordion>
              </Container>
            </Modal.Body>
          </Modal>
          <Nav.Link role="button" onClick={handleShow}>
            <i class="fas fa-bell fa-lg" />
          </Nav.Link>
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
