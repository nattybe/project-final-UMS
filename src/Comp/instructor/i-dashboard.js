import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class InstructorDashboard extends Component {
  render() {
    const state = {
      Id: "UU7431R",
      Name: "James Bond",
      Address: "Addiss ababa,ethiopia",
      PhoneNo: "0987654321",
      TE: 321,
      TR: 342,
      TI: 21,
      TS: 534,
    };
    return (
      <div className="border comp-body-container registrar-dashboard d-flex">
        <div className="stud-avatar-boxes avatar-boxes d-flex">
          <div className="divers">
            <div className="stud-boxer boxers bg-info border-3 border-dark border d-flex">
              <div className="avatar-photo">
                <img src="./logo192.png" alt="" />
                <section>ID: {state.Id}</section>
              </div>
              <div className="avatar-info">
                <p>Name: {state.Name}</p>
                <p>Address: {state.Address}</p>
                <p>Phone No: {state.PhoneNo}</p>
              </div>
            </div>
            <div className="tabled">
              <h3>Today's Plan</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Time</th>
                    <th scope="col">Task</th>
                    <th scope="col">Room</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">2</th>
                    <td>IP</td>
                    <td>34</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>DB</td>
                    <td>Lab 5</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>DBMS</td>
                    <td>Lab 8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="tabled">
            <h3>Section list</h3>
            <table className="table border">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  {/* <th scope="col">Score</th>
                  <th scope="col">Cr/Hr</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>CCS1R1N6/12</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>CCS1R1N1/12</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>CCS1R1N2/12</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>CCS1R1N3/12</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>CCS1R1N4/12</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>CCS1R1N5/12</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>CCS1R1N6/12</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>CCS1R1N7/12</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>CCS1R1N8/12</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
        <div className="info-boxes-box d-flex"></div>
      </div>
    );
  }
}
