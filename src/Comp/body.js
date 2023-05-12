import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Redirect } from "react-router-dom";
function Body() {
  const [Res, setRes] = useState({ nothing: "to see here" });
  const [loginas, setloginas] = useState("student");
  const [ID, setID] = useState();
  const [password, setPassword] = useState();
  const [url, seturl] = useState();
  const [publishedYear, setpublishedYear] = useState();
  const [author, setauthor] = useState();
  const loginsubmit = async (e) => {
    e.preventDefault();
    seturl(
      "http://localhost/proje/login.php?loginas=" +
        loginas +
        "&ID=" +
        ID +
        "&password=" +
        password
    );
    if (url) {
      handleShow();
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      setRes(data);
    } catch (error) {
      console.log(error.message);
      console.log(error.stack);
    }
    console.log(Res);
    console.log("Login");
    if (Res[0].S_ID === "UU79706R") {
      console.log("Please enter");
      console.log(Res[0].S_SUBCITY)
      console.log(Res.status.received)
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="main">
      <div className="col-md-4 m-auto shadow">
        <div className="image">
          <img src="./LogoUU.png" alt="" />
        </div>
        <h3>Login</h3>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{loginas}</p>
            <p>{ID}</p>
            <p>{password}</p>
            <p>{url}</p>
          </Modal.Body>
        </Modal>
        <form method="get">
          <div className="form-group">
            <label htmlFor="loginas" value="dummy">
              Login As
            </label>
            <select
              className="loginasselect"
              onChange={(e) => {
                setloginas(e.target.value);
                // console.log(loginas);
              }}
              name="loginas"
              id="loginas"
            >
              {/* <option value="...">...</option> */}
              <option value="student">Student</option>
              <option value="instructor">instructor</option>
              <option value="librarian">librarian</option>
              <option value="registrar">Registrar</option>
              <option value="programOfficer">Program officer</option>
            </select>

            <small id="emailHelp" className="form-text text-muted">
              {/* Email that you have used while registration. */}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="email">ID</label>
            <input
              type="text"
              name="ID"
              className="form-control"
              id="ID"
              aria-describedby="ID"
              placeholder="Enter Your ID"
              onChange={(e) => {
                setID(e.target.value);
                // console.log(ID);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Your Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
                // console.log(password);
              }}
            />
          </div>
          {/* <div className="form-check">
            <input
              type="checkbox"
              name="checkbox"
              className="form-check-input"
              id="remember"
            />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div> */}
          <button
            type="submit"
            onClick={(e) => {
              loginsubmit(e);
            }}
            className="btn btn-primary float-right"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Body;
