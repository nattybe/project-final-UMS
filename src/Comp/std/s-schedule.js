import React, { Component } from "react";
import bootstrap, { Table } from "react-bootstrap";
class StudentSchedule extends Component {
  render() {
    return (
      <div className="container comp-body-container border">
      <h3>Grade Summary</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>1 Se</th>
              <th>2 Se</th>
              <th>3 Se</th>
              <th>4 Se</th>
              <th>5 Se</th>
              <th>6 Se</th>
              <th>7 Se</th>
              <th>8 Se</th>
              <th>9 Se</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mon</td>
            </tr>
            <tr>
              <td>Tue</td>
            </tr>
            <tr>
              <td>Wed</td>
            </tr>
            <tr>
              <td>Thr</td>
            </tr>
            <tr>
              <td>Fri</td>
            </tr>
            <tr>
              <td>Sat</td>
            </tr>
            <tr>
              <td>Sun</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default StudentSchedule;
