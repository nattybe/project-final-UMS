import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class SideButtons extends Component {
  state = {hey:"hello"};
  render() {
    return (
      <a href={this.props.link} className="sb-items btn btn-primary shadow border border-dark">
        {this.props.name}
      </a>
    );
  }
}

export default SideButtons;
