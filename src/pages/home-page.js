import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "../Comp/header";
import Body from "../Comp/body";
import {Link} from 'react-router-dom';

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul className="d-flex">
          <ul className="m-3"><Link className="btn btn-primary float-right border border-dark" to="/login">Login</Link></ul>
          <ul className="m-3"><Link className="btn btn-primary float-right border border-dark" to="/student">Student</Link></ul>
          <ul className="m-3"><Link className="btn btn-primary float-right border border-dark" to="/instructor">Instructor</Link></ul>
          <ul className="m-3"><Link className="btn btn-primary float-right border border-dark" to="/library">Library</Link></ul>
          <ul className="m-3"><Link className="btn btn-primary float-right border border-dark" to="/programoffice">Program Office</Link></ul>
        </ul>
      </div>
    );
  }
}

export default HomePage;
