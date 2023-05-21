import React, { Component } from "react";
import Header from "../Comp/header";
import { Nav, Tab } from "react-bootstrap";
import LibrarianViewResource from "../Comp/librarian/l-viewresource";
import LibrarianAddResource from "../Comp/librarian/l-addresource";
import ProgramCreateCourse from "../Comp/program/create-course";
import ProgramViewCourse from "../Comp/program/pViewCourse";
import InstructorNotify from "../Comp/instructor/i-Notify";
import ProgramDashboard from "../Comp/program/p-dashboeard";
import OfferingCourse from "../Comp/program/offeringCourse";
import AssignInstructor from "../Comp/program/assignInstructor";
import UploadSchedule from "../Comp/program/uploadSchedule";

class ProgramOfficePage extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard">
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="side-buttons">
                <Nav.Link
                  eventKey="dashboard"
                  className="side-buttons border border-2 border-dark"
                >
                  Dashboard
                </Nav.Link>
              </Nav.Item>
              
              {/* <Nav.Item className="side-buttons">
                <Nav.Link
                  eventKey="CreateCourse"
                  className="side-buttons border border-2 border-dark"
                >
                  Create Course
                </Nav.Link>
              </Nav.Item> */}
              {/* <Nav.Item className="side-buttons">
                <Nav.Link
                  eventKey="OfferingCourses"
                  className="side-buttons border border-2 border-dark"
                >
                  Offering Course
                </Nav.Link>
              </Nav.Item> */}
              {/* <Nav.Item className="side-buttons">
                <Nav.Link
                  eventKey="AssignInstructor"
                  className="side-buttons border border-2 border-dark"
                >
                  Assign Instructor
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item className="side-buttons">
                <Nav.Link
                  eventKey="uploadSchedule"
                  className="side-buttons border border-2 border-dark"
                >
                  Upload Schedule
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item className="side-buttons">
                <Nav.Link
                  eventKey="ViewCourse"
                  className="side-buttons border border-2 border-dark"
                >
                  View Course
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item className="side-buttons">
                <Nav.Link
                  eventKey="Notify"
                  className="side-buttons border border-2 border-dark"
                >
                  Notify
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="dashboard">
                <ProgramDashboard />
              </Tab.Pane>
              <Tab.Pane eventKey="uploadSchedule">
                <UploadSchedule />
              </Tab.Pane>
              <Tab.Pane eventKey="CreateCourse">
                <ProgramCreateCourse />
              </Tab.Pane>
              <Tab.Pane eventKey="OfferingCourses">
                <OfferingCourse />
              </Tab.Pane>
              <Tab.Pane eventKey="ViewCourse">
                <ProgramViewCourse />
              </Tab.Pane>
              <Tab.Pane eventKey="Notify">
                <InstructorNotify />
              </Tab.Pane>
              <Tab.Pane eventKey="AssignInstructor">
                <AssignInstructor />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    );
  }
}

export default ProgramOfficePage;
