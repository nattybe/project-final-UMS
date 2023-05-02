import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";

class InstructorNotify extends Component {
  render() {
    return (
      <Container className="comp-body-container border">
        <h3>Post Notification</h3>
        <div className="row">
          <div className="notify-title">
            Title: <input type="text" placeholder="Title of the post" />
          </div>
        </div>
        <div className="row">
          <div className="notify-description">
            Description: <input type="text" placeholder="Description" />
          </div>
        </div>
        <div className="buttons">
          Post For: 
          <select name="notify-for" id="notify-for">
            <option value="Department">Department</option>
          </select>
          <Button> Post</Button>
        </div>
      </Container>
    );
  }
}

export default InstructorNotify;
