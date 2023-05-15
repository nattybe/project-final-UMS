import React, { Component } from "react";
import Header from "../Comp/header";
import { Nav, Tab } from "react-bootstrap";
import LibrarianDashboard from "../Comp/librarian/l-dashboard";
import LibrarianViewResource from "../Comp/librarian/l-viewresource";
import LibrarianAddResource from "../Comp/librarian/l-addresource";

class LibrairanPage extends Component {
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
                  eventKey="second"
                  className="side-buttons border border-2 border-dark"
                >
                  Add Resource
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="side-buttons">
                <Nav.Link
                  eventKey="third"
                  className="side-buttons border border-2 border-dark"
                >
                  View Resource
                </Nav.Link>
              </Nav.Item>
              
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
              <LibrarianDashboard />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <LibrarianAddResource />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <LibrarianViewResource />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    );
  }
}

export default LibrairanPage;
