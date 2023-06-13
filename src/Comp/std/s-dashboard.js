import React, { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { baseUrl } from "../../globalConst";
export default function StudentDashboard(props) {
  const [theReturnOfTheRender, setTheReturnOfTheRender] = useState();

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
      const photo = baseUrl + "student-photo/" + loggerInfo.photo;

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
                <img src={photo} alt="" />
                <section>ID: {id}</section>
              </div>
              <div className="avatar-info">
                <p>Name: {name}</p>
                <p>Address: {address}</p>
                <p>Phone No: {phone}</p>
              </div>
            </div>
            <div className="info-boxes">
              <section>Email</section>
              <h4>{loggerInfo.email}</h4>
            </div>
          </div>
          <div className="info-boxes-box d-flex">
            <div className="info-boxes">
              <section>CGPA</section>
              <h2>{loggerInfo.CGPA}</h2>
            </div>
            <div className="info-boxes">
              <section>Nationality</section>
              <h2>{loggerInfo.Nationality}</h2>
            </div>
            {/* <div className="info-boxes">
              <section></section>
              <h2>{state.TS}</h2>
            </div> */}
          </div>
        </div>
      );
    }else{
      return(
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
      )
    }
  };
  const state = {
    Id: "UU7431R",
    Name: "James Bond",
    Address: "Addiss ababa,ethiopia",
    PhoneNo: "0987654321",
    department: "Computer Science",
    TR: 342,
    TI: 21,
    TS: 534,
  };
  return dashboardMaker();
}

