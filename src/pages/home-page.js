import React, { Component } from "react";
import { Container} from "react-bootstrap";
import Header from "../Comp/header";
import Body from "../Comp/body";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default HomePage;