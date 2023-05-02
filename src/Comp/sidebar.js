import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import SideButtons from "./sideButtons";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className="side-bar shadow" id="basic-navbar-nav">
        <div className="head">
          <h1>head</h1>
          <Navbar.Toggle aria-controls="sideBar" />
        </div>
        <div className="body" id="sideBar">
        <SideButtons name="Dashboard" link="dashboard"/>
        <SideButtons name="Grade" link="#grade"/>
        <SideButtons name="Resource" link="resource"/>
        <SideButtons name="Contact" link="contact"/>
        <SideButtons name="Current Course" link="currentcourse"/>
        </div>
      </div>
    );
  }
}

export default SideBar;
