import React, { Component } from "react";
import { Nav, Tab } from "react-bootstrap";
import StudentResource from "../Comp/std/s-resource";
import StudentContact from "../Comp/std/s-contact";
import Header from "../Comp/header";
import StudentSchedule from "../Comp/std/s-schedule";
import StudentList from "../Comp/instructor/i-StudentList";
import InstructorNotify from "../Comp/instructor/i-Notify";
import InstructorGrade from "../Comp/instructor/i-grade";
import InstructorDashboard from "../Comp/instructor/i-dashboard";
import Schedule from "../Comp/instructor/schedule";

export default class InstructorPage extends Component {
  render() {
    return (
      <div>
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
                  Student List
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="side-buttons">
                <Nav.Link
                  eventKey="seventh"
                  className="side-buttons border border-2 border-dark"
                >
                  Notify
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <InstructorDashboard />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <InstructorGrade />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Schedule />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <StudentResource />
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <StudentContact />
              </Tab.Pane>
              <Tab.Pane eventKey="sixth">
                <StudentList />
              </Tab.Pane>
              <Tab.Pane eventKey="seventh">
                <InstructorNotify />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    );
  }
}
