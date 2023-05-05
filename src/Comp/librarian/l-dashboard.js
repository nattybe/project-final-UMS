import React, { Component } from "react";

export default class LibrarianDashboard extends Component {
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
      <h3>DashBoard</h3>
        <div className="avatar-boxes d-flex">
          <div className="boxers bg-info border-3 border-dark border d-flex">
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
          <div className="info-boxes">
            <section>Total Employees</section>
            <h2>{state.TE}</h2>
          </div>
        </div>
        <div className="info-boxes-box d-flex">
          <div className="info-boxes">
            <section>Total Resources</section>
            <h2>{state.TR}</h2>
          </div>
          <div className="info-boxes">
            <section>Total Instructors</section>
            <h2>{state.TI}</h2>
          </div>
          <div className="info-boxes">
            <section>Total Students</section>
            <h2>{state.TS}</h2>
          </div>
        </div>
      </div>
    );
  }
}
