import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class StudentDashboard extends Component {
  render() {
    return (
      <Container flex className="s-dashboards border">
        <div className="dashboard-ta col border">
          <div className="dashboard-avatar border border-2">
            <img src="../Logo.svg" alt="" />
            {/* <div>
            <p>ID: 000000</p>
            <p>Name: Someone</p>
            <p>Address: Some</p>
            <p>Phone No: 0000</p>
            </div> */}
          </div>
          <div className="dashboard-avatar border border-2">
            <img src="../Logo.svg" alt="" />
            {/* <div>
            <p>ID: 000000</p>
            <p>Name: Someone</p>
            <p>Address: Some</p>
            <p>Phone No: 000</p>
            </div> */}
          </div>
          {/* <div className="dashboard-task">task</div> */}
        </div>
        <div className="side-this row">{"->"}</div>
        {/* <div className="dashboard-grade">grade</div> */}
      </Container>
    );
  }
}
