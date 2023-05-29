import React from "react";
import { Nav, Tab } from "react-bootstrap";
import RegistrarDashboard from "../Comp/registrar/dashboard";
import RegisterStudent from "../Comp/registrar/register";
import ViewStudent from "../Comp/registrar/veiw";
import InstructorNotify from "../Comp/instructor/i-Notify";
import AddUser from "../Comp/registrar/addUser";
import ViewUser from "../Comp/registrar/viewUser";
import CreateSection from "../Comp/registrar/createsection";
import CreateDepartment from "../Comp/registrar/createDepartment";
import ViewDepartment from "../Comp/registrar/viewDepartment";
import { Navigate } from "react-router-dom";

function RegistrarPage() {
  const loginas="student"
  if(loginas !=="student"){
    // alert('You can\'t access this page')
  return <Navigate to="/" />;
  }
  return (
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
              Register student
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="side-buttons">
            <Nav.Link
              eventKey="third"
              className="side-buttons border border-2 border-dark"
            >
              View Students
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="side-buttons">
            <Nav.Link
              eventKey="addUsers"
              className="side-buttons border border-2 border-dark"
            >
              Add User
            </Nav.Link>
          </Nav.Item>
          {/* 
          <Nav.Item className="side-buttons">
            <Nav.Link
              eventKey="createDepartment"
              className="side-buttons border border-2 border-dark"
            >
              Create Department
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="side-buttons">
            <Nav.Link
              eventKey="departments"
              className="side-buttons border border-2 border-dark"
            >
              Departments
            </Nav.Link>
          </Nav.Item> */}
          <Nav.Item className="side-buttons">
            <Nav.Link
              eventKey="CreateSection"
              className="side-buttons border border-2 border-dark"
            >
              Create Section
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="side-buttons">
            <Nav.Link
              eventKey="viewUsers"
              className="side-buttons border border-2 border-dark"
            >
              View User
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="side-buttons">
            <Nav.Link
              eventKey="fourth"
              className="side-buttons border border-2 border-dark"
            >
              Notify
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <RegistrarDashboard />
          </Tab.Pane>
          <Tab.Pane eventKey="createDepartment">
            <CreateDepartment />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <RegisterStudent />
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            <ViewStudent />
          </Tab.Pane>

          <Tab.Pane eventKey="CreateSection">
            <CreateSection />
          </Tab.Pane>
          <Tab.Pane eventKey="departments">
            <ViewDepartment />
          </Tab.Pane>

          <Tab.Pane eventKey="fourth">
            <InstructorNotify />
          </Tab.Pane>
          <Tab.Pane eventKey="viewUsers">
            <ViewUser />
          </Tab.Pane>
          <Tab.Pane eventKey="addUsers">
            <AddUser />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default RegistrarPage;
