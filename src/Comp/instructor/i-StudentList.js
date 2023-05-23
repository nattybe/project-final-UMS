import React, { Component, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

export default function StudentList() {
  //  const [addGradeshow,setaddGradeshow]=useState();
  const setaddGradeshow = () => {
    let gradeShow = document.getElementsByClassName("grade-input");
    gradeShow.forEach(element => {
      element.style.display = "block";
    });
  };

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
        <Button onClick={() => setaddGradeshow("hidden")} className="mt-3 mb-1">
          Add Grade
        </Button>
        <Button className="mt-3 mb-1">Print section student list</Button>
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
          <tr>
            <td>1</td>
            <td colSpan="1">UU79706</td>
            <td>Natnael Belihu</td>
            <td>
              <input type="number" className="grade-input" id="helloitem" />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td colSpan="1">UU79706</td>
            <td>Natnael Belihu</td>
            <td>
              <input type="number" className="grade-input" id="helloitem" />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td colSpan="1">UU79706</td>
            <td>Natnael Belihu</td>
            <td>
              <input type="number" className="grade-input" id="helloitem" />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <Button>Submit</Button>
        </tfoot>
      </Table>
    </Container>
  );
}
