import React, { Component } from "react";
import { Container} from "react-bootstrap";
import Header from "../Comp/header";
import Body from "../Comp/body";

class LoginPage extends Component {
  state = {
    hello: false,
    hi: "true",
  };
  render() {
    window.sessionStorage.setItem("login", JSON.stringify(this.state));
    return (
      <div>
        <Body/>
      </div>
    );
  }
}

export default LoginPage;