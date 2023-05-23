import React from "react";
import { Button, Table } from "react-bootstrap";

function ViewGrades() {
  const fakeGrades = [
    {
      name: "Natnael Belihu",
      StudentId: 3112,
      Grade: 78,
    },
    {
      name: "Gelila Dangachew",
      StudentId: 5671,
      Grade: 89,
    },
    {
      name: "Fanuel Aysheshm",
      StudentId: 4351,
      Grade: 82,
    },
    {
      name: "Hawi  Tegene",
      StudentId: 43567,
      Grade: 86,
    },
    {
      name: "Kaleab Getu",
      StudentId: 5342,
      Grade: 96,
    },
  ];
  return (
    <div className="comp-body-container">
      <h3>View Grades</h3>
      <div className="view-grade">
        <div className="chooser d-flex">
          <div className="m-1">
            <section>Choose Section</section>
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
          <div className="m-1">
            <section>Choose Course</section>
            <select
              name="choose-section"
              onSelected={() => {
                alert("selected");
              }}
              id="choose-section"
            >
              <option value="security_course_code">Security</option>
            </select>
          </div>
          <Button className="h-75">Get Grade</Button>
          <div></div>
          <div></div>
          <Button className="h-75" variant="success">
            Approve
          </Button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Grade %</th>
            </tr>
          </thead>
          <tbody>
            {fakeGrades.map((grade) => {
              return (
                <tr>
                  <td>{}</td>
                  <td>{grade.StudentId}</td>
                  <td>{grade.name}</td>
                  <td>{grade.Grade}</td>
                </tr>
              );
            })}
            {/* <tr>
              <td>1</td>
              <td colSpan="1">UU79706</td>
              <td>Natnael Belihu</td>
              <td>12</td>
            </tr> */}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ViewGrades;
