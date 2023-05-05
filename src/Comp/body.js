import React, { Component } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
class Body extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <div className="col-md-4 m-auto shadow">
          <div className="image">
            <img src="./LogoUU.png" alt="" />
          </div>
          <h3>Login</h3>
          <form>
            <div className="form-group">
              <label htmlFor="loginas">Login As</label>
              <select className="form-control" name="loginas" id="loginas">
                <option value="">...</option>
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
              <label htmlFor="email">Email address</label>
              <input
                type="text"
                name="ID"
                className="form-control"
                id="ID"
                aria-describedby="ID"
                placeholder="Enter Your ID"
              />
              <small id="emailHelp" className="form-text text-muted">
                {/* Email that you have used while registration. */}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="checkbox"
                className="form-check-input"
                id="remember"
              />
              <label className="form-check-label" htmlFor="remember">
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary float-right">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Body;
