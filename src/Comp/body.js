import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AlertBy } from "./defFuncs";
import { Navigate } from "react-router-dom";
function Body() {
  const [Res, setRes] = useState({ nothing: "to see here" });
  const [loginas, setloginas] = useState("student");
  const [ID, setID] = useState();
  const [password, setPassword] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loginFetch = async (url, loginFd) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: loginFd,
      });
      const data = await response.json();
      setRes(data);
      console.log("res " + (await response.json()));
    } catch (error) {
      console.log(error.message);
      console.log(error.stack);
    } finally {
      alert("The Finally!");
      // handleClose();
    }
  };
  useEffect(() => {
    // console.log(Res);
    if (Res.status === "success") {
      alert(Res.status);
      let dataf = Res.data[0];
      const logginas = { loginas: Res.loginas };
      dataf = Object.assign(dataf, logginas);
      window.sessionStorage.setItem("logger", JSON.stringify(dataf));
      // window.open("/", "_self");
      switch (logginas.loginas) {
        case "department":
          window.open("/department", "_self");
          break;
        case "instructors":
          window.open("/instructor", "_self");
          break;
        case "students":
          window.open("/student", "_self");
          break;
        case "registrars":
          window.open("/registrar", "_self");
          break;
        case "librarian":
          window.open("/librarian", "_self");
          break;
        case "program_officers":
          window.open("/programoffice", "_self");
          break;
        default:
          break;
      }
    } else {
      // alert("hello world!");
    }
  }, [Res]);
  const loginsubmit = (e) => {
    e.preventDefault();
    let loginFd = new FormData();
    const url = "http://localhost/proje/login.php";
    if (loginas && password && ID) {
      loginFd.append("loginas", loginas);
      loginFd.append("ID", ID);
      loginFd.append("password", password);
      loginFetch(url, loginFd);
    }
    if (typeof Res !== "undefined") {
      if (Res.status === "success") {
        // alert(Res.data[0].S_SUBCITY);
      }
    } else {
      // AlertBy();
      alert("login failed" + loginFd.get("ID"));
    }
    // seturl();
    // if (url) {
    //   handleShow();
    // }
  };
  return (
    <div className="main">
      <div className="col-md-4 m-auto shadow">
        <div className="image">
          <img src="./LogoUU.png" alt="" />
        </div>
        <h3>Login</h3>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Reset Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form method="get reset-password-form">
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
                <label htmlFor="password">Enter your old password</label>
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
              <div className="form-group">
                <label htmlFor="password">Enter Your new Password</label>
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
              <div className="form-group">
                <label htmlFor="password">Confirm Your new Password</label>
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
              <div className="buttons">
                <Button variant="danger">Cancel</Button>
                <button
                  type="submit"
                  onClick={(e) => {
                    loginsubmit(e);
                  }}
                  className="btn btn-primary float-right"
                >
                  Reset
                </button>
              </div>
            </form>
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
              <option value="students">Student</option>
              <option value="instructors">instructor</option>
              <option value="librarian">librarian</option>
              <option value="registrars">Registrar</option>
              <option value="program_officers">Program officer</option>
              <option value="department">Department head</option>
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
          <a href="#" onClick={handleShow}>
            forget password?
          </a>
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
