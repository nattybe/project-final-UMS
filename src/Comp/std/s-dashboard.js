import React, { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function StudentDashboard(props) {
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
  const avatorMaker=()=>{
    if(loggerInfo){
      const id=loggerInfo.S_ID
      const name=(loggerInfo.S_FIRSTNAME+" "+loggerInfo.S_LASTNAME)
      const address=(loggerInfo.S_CITY+", "+loggerInfo.S_SUBCITY)
      const phone=loggerInfo.S_PHONENO_1
      return(
        <div className="stud-boxer boxers bg-info border-3 border-dark border d-flex">
            <div className="avatar-photo">
              <img src="./avatar.jpg" alt="" />
              <section>ID: {id}</section>
            </div>
            <div className="avatar-info">
              <p>Name: {name}</p>
              <p>Address: {address}</p>
              <p>Phone No: {phone}</p>
            </div>
          </div>
      )
    }else{
      return(
        <div className="stud-boxer boxers bg-info border-3 border-dark border d-flex">
            <div className="avatar-photo">
              <img src="./avatar.jpg" alt="" />
              <section>ID: </section>
            </div>
            <div className="avatar-info">
              <p>Name: </p>
              <p>Address: </p>
              <p>Phone No: </p>
            </div>
          </div>
      )
    }
  }
  return (
    <div className="border comp-body-container registrar-dashboard d-flex">
      <div className="stud-avatar-boxes avatar-boxes d-flex">
        <div className="divers">
          {avatorMaker()}
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
        {/* <div className="tabled">
            <h3>Grade</h3>
            <table className="table border">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Code</th>
                  <th scope="col">Score</th>
                  <th scope="col">Cr/Hr</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div> */}
      </div>
      <div className="info-boxes-box d-flex"></div>
    </div>
  );
}
