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
            <label htmlFor="">Description: </label><textarea name="" id="" placeholder="Detail information" cols="60" rows="7"></textarea>
          </div>
        </div>
        <div className="buttons">
          <div className="d-flex flex-column">
            <label htmlFor="">Post For</label>
            <select name="notify-for" id="notify-for">
              <option value="Department">Department</option>
            </select>
          </div>

          <Button> Post</Button>
        </div>
      </Container>
    );
  }
}

export default InstructorNotify;
