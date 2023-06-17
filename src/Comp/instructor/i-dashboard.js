import React, { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { baseUrl } from "../../globalConst";

export default function InstructorDashboard() {
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
  const [loggerInfo, setLoggerInfo] = useState();

  const getLogger = () => {
    let logger = JSON.parse(window.sessionStorage.getItem("logger"));
    console.log("logger => GetLogger " + logger);
    setLoggerInfo(logger);
  };

  useEffect(() => {
    if (loggerInfo) {
      console.log(loggerInfo);
    } else {
      getLogger();
    }
  }, [loggerInfo]);
  const dashboardMaker = () => {
    if (loggerInfo) {
      const id = loggerInfo.id;
      const name = loggerInfo.fname + " " + loggerInfo.lname;
      const address = loggerInfo.city + ", " + loggerInfo.subcity;
      const phone = loggerInfo.phone_no1;
      const photo = baseUrl + "user-photo/" + loggerInfo.photo;
      const oldReturn = [
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
        </div>,
      ];
      return (
        <div className="border comp-body-container registrar-dashboard d-flex">
          <h3>DashBoard</h3>
          <div className="stud-avatar-boxes avatar-boxes d-flex">
            {/* <div className="boxers bg-info border-3 border-dark border d-flex">
              <div className="avatar-photo">
                <img src="./logo192.png" alt="" />
                <section>ID: {loggerInfo.id}</section>
              </div>
              <div className="avatar-info">
                <p>Name: {loggerInfo.fname + " " + loggerInfo.lname}</p>
                <p>Authority: {loggerInfo.position}</p>
                <p>Phone No: {loggerInfo.email}</p>
              </div>
            </div> */}

            <div className="stud-boxer boxers bg-info border-3 border-dark border d-flex">
              <div className="avatar-photo">
                <img src={photo} alt="" />
                <section>ID: {id}</section>
              </div>
              <div className="avatar-info">
                <p>Name: {name}</p>
                <p>Address: {address}</p>
                <p>Phone No: {phone}</p>
              </div>
            </div>
            <div>
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
            
            {/* <div className="info-boxes">
              <section>Email</section>
              <h4>{loggerInfo.email}</h4>
            </div> */}
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
          {/* <div className="info-boxes-box d-flex">
            <div className="info-boxes">
              <section>CGPA</section>
              <h2>{loggerInfo.CGPA}</h2>
            </div>
            <div className="info-boxes">
              <section>Nationality</section>
              <h2>{loggerInfo.Nationality}</h2>
            </div>
            <div className="info-boxes">
                <section></section>
                <h2>{state.TS}</h2>
              </div>
          </div> */}
        </div>
      );
    } else {
      return (
        <div className="border comp-body-container registrar-dashboard d-flex">
          <h3>DashBoard</h3>
          <div className="avatar-boxes d-flex">
            {/* <div className="boxers bg-info border-3 border-dark border d-flex">
            <div className="avatar-photo">
              <img src="./logo192.png" alt="" />
              <section>ID: {loggerInfo.id}</section>
            </div>
            <div className="avatar-info">
              <p>Name: {loggerInfo.fname+" "+loggerInfo.lname}</p>
              <p>Authority: {loggerInfo.position}</p>
              <p>Phone No: {loggerInfo.email}</p>
            </div>
          </div> */}

            <div className="stud-boxer boxers bg-info border-3 border-dark border d-flex">
              <div className="avatar-photo">
                <img src="./avatar.jpg" alt="" />
                <section>ID:---- </section>
              </div>
              <div className="avatar-info">
                <p>Name:--------- --------- </p>
                <p>Address:-------- </p>
                <p>Phone No:---------- </p>
              </div>
            </div>
            <div className="info-boxes">
              <section>Department</section>
              <h4>{state.department}</h4>
            </div>
          </div>
          <div className="info-boxes-box d-flex">
            <div className="info-boxes">
              <section>Degrees</section>
              <h2>{state.TR}</h2>
            </div>
            <div className="info-boxes">
              <section>Total Instructors</section>
              <h2>{state.TI}</h2>
            </div>
            <div className="info-boxes">
              <section>Total Courses</section>
              <h2>{state.TS}</h2>
            </div>
          </div>
        </div>
      );
    }
  };
  return dashboardMaker();
}
