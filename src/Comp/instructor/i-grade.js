import React, { Component } from "react";
import { Button, Container, Table } from "react-bootstrap";

export default class InstructorGrade extends Component {
  render() {
    return (
      <Container className="border comp-body-container">
        <h3>Student List</h3>
        <div className="section-choose">
          <div className="m-1">
            <section>choose section</section>
            <select
              name="choose-section"
              onSelected={() => {
                alert("selected");
              }}
              id="choose-section"
            >
              <option value="CCS1R1N6/12">CCS1R1N6/12</option>
              <option value="CCS1R1N6/13">CCS1R1N6/13</option>
              <option value="CCS1R1N6/14">CCS1R1N6/14</option>
              <option value="CCS1R1N6/15">CCS1R1N6/15</option>
              <option value="CCS1R1N6/16">CCS1R1N6/16</option>
            </select>
          </div>

          <Button>Print</Button>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Student ID</th>
              <th>Student Name</th>
              <th colSpan={9}>{""} </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td colSpan="1">UU79706</td>
              <td>Natnael Belihu</td>
              <td colSpan={4}></td>
            </tr>
            <tr>
              <td>1</td>
              <td colSpan="1">UU79706</td>
              <td>Natnael Belihu</td>
            </tr>
            <tr>
              <td>1</td>
              <td colSpan="1">UU79706</td>
              <td>Natnael Belihu</td>
            </tr>
            <tr>
              <td>1</td>
              <td colSpan="1">UU79706</td>
              <td>Natnael Belihu</td>
            </tr>
            <tr>
              <td>1</td>
              <td colSpan="1">UU79706</td>
              <td>Natnael Belihu</td>
            </tr>
            <tr>
              <td>1</td>
              <td colSpan="1">UU79706</td>
              <td>Natnael Belihu</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}
