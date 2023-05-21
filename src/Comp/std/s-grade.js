import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";

export default class StudentGrade extends Component {
  render() {
    return (
      <Container className="border comp-body-container">
        <h3>Grade Summary</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Cr.Hr.</th>
              <th>Co.Hr.</th>
              <th>Year</th>
              <th>Semester</th>
              <th>Grade Point</th>
              <th>Letter Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>CS14</td>
              <td>Internet Programming</td>
              <td>4</td>
              <td>6</td>
              <td>2</td>
              <td>2</td>
              <td>87</td>
              <td>A</td>
            </tr>
            <tr>
              <td>2</td>
              <td>CS31</td>
              <td>Computer security</td>
              <td>4</td>
              <td>3</td>
              <td>4</td>
              <td>2</td>
              <td>69</td>
              <td>C</td>
            </tr>
            <tr>
              <td>3</td>
              <td>CS81</td>
              <td>Fundamental Database</td>
              <td>4</td>
              <td>6</td>
              <td>2</td>
              <td>2</td>
              <td>84</td>
              <td>A</td>
            </tr>
            <tr>
              <td>1</td>
              <td>CS14</td>
              <td>Internet Programming</td>
              <td>4</td>
              <td>6</td>
              <td>2</td>
              <td>2</td>
              <td>87</td>
              <td>A</td>
            </tr>
          </tbody>
          <tfoot>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total Cr.hr: 16</td>
            <td>Total Co.hr: 21</td>
            <td>CGPA: 4</td>
          </tfoot>
        </Table>
      </Container>
    );
  }
}
