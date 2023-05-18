import React, { Component, useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import StudentDashboard from "../Comp/std/s-dashboard";
import StudentGrade from "../Comp/std/s-grade";
import StudentSchedule from "../Comp/std/s-schedule";
import StudentResource from "../Comp/std/s-resource";
import StudentContact from "../Comp/std/s-contact";
import StudentCurrentCourse from "../Comp/std/s-currentcourse";
function StudentPage() {
  
  const [loggerInfo, setLoggerInfo] = useState();

  const getLogger = () => {
    let logger = JSON.parse(window.sessionStorage.getItem("logger"));
    console.log("logger => GetLogger " + logger);
    setLoggerInfo(logger);
  };

  useEffect(() => {
    if (loggerInfo) {
      // alert("from"+loggerInfo.S_ID);
      // console.log(loggerInfo);
    } else {
      getLogger();
    }
  }, [loggerInfo]);
  return (
    <React.StrictMode>
      <div className="main">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills" className="flex-column">
            <Nav.Item className="side-buttons">
              <Nav.Link
                eventKey="first"
                className="side-buttons border border-2 border-dark"
              >
                Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="side-buttons">
              <Nav.Link
                eventKey="second"
                className="side-buttons border border-2 border-dark"
              >
                Grade
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="side-buttons">
              <Nav.Link
                eventKey="third"
                className="side-buttons border border-2 border-dark"
              >
                Schedule
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="side-buttons">
              <Nav.Link
                eventKey="fourth"
                className="side-buttons border border-2 border-dark"
              >
                Resource
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="side-buttons">
              <Nav.Link
                eventKey="fifth"
                className="side-buttons border border-2 border-dark"
              >
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="side-buttons">
              <Nav.Link
                eventKey="sixth"
                className="side-buttons border border-2 border-dark"
              >
                Current Course
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <StudentDashboard />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <StudentGrade />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <StudentSchedule />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <StudentResource />
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
              <StudentContact />
            </Tab.Pane>
            <Tab.Pane eventKey="sixth">
              <StudentCurrentCourse />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </React.StrictMode>
  );
}

export default StudentPage;
