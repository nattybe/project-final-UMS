import React from 'react'
import { Nav, Tab } from 'react-bootstrap'
import DepartmentDashboard from '../Comp/department/depDashboard'
import ProgramCreateCourse from '../Comp/department/create-course'
import OfferingCourse from '../Comp/department/offeringCourse'
import ProgramViewCourse from '../Comp/department/pViewCourse'
import InstructorNotify from '../Comp/instructor/i-Notify'
import AssignInstructor from '../Comp/department/assignInstructor'
import ViewGrades from '../Comp/department/depViewGrades'
import EditOfferingCourse from '../Comp/department/editOfferingCourse'

function DepartmentPage() {
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
              <Nav.Item className="side-buttons">
                <Nav.Link
                  eventKey="CreateCourse"
                  className="side-buttons border border-2 border-dark"
                >
                  Create Course
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="side-buttons">
                <Nav.Link
                  eventKey="OfferingCourses"
                  className="side-buttons border border-2 border-dark"
                >
                  Create Offering Course
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="side-buttons">
                <Nav.Link
                  eventKey="view-oc"
                  className="side-buttons border border-2 border-dark"
                >
                  Edit Offering Course
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="side-buttons">
                <Nav.Link
                  eventKey="AssignInstructor"
                  className="side-buttons border border-2 border-dark"
                >
                  Assign Instructor
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item className="side-buttons">
                <Nav.Link
                  eventKey="uploadSchedule"
                  className="side-buttons border border-2 border-dark"
                >
                  Upload Schedule
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item className="side-buttons">
                <Nav.Link
                  eventKey="ViewCourse"
                  className="side-buttons border border-2 border-dark"
                >
                  View Course
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="side-buttons">
                <Nav.Link
                  eventKey="view-grades"
                  className="side-buttons border border-2 border-dark"
                >
                  Grades
                </Nav.Link>
              </Nav.Item>
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
                <DepartmentDashboard />
              </Tab.Pane>
              {/* <Tab.Pane eventKey="uploadSchedule">
                <LibrarianAddResource />
              </Tab.Pane> */}
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
              <Tab.Pane eventKey="view-grades">
                <ViewGrades />
              </Tab.Pane>
              <Tab.Pane eventKey="view-oc">
                <EditOfferingCourse />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
  )
}

export default DepartmentPage