import React from "react";
import { Button, Table } from "react-bootstrap";

function UploadSchedule() {
  return (
    <div className="comp-body-container">
      <h3>Upload Schedule</h3>
      <div>
        <div>
          <div className="border m-2 ps-2">
            <h5>filter Section</h5>
            <div className="d-flex">
              <div className="inp">
                <section>Department</section>
                <select name="" id="">
                  <option value="">Computer Science</option>
                </select>
              </div>
              <div className="inp">
                <section>Year</section>
                <select name="" id="">
                  <option value="">2012</option>
                </select>
              </div>
              <Button className="h-75">Filter</Button>

            </div>
          </div>

          <div className="section-selector">
            <div className="d-flex border m-2">
              <div className="inp">
                <section>Sections</section>
                <select name="" id="">
                  <option value="">CCS1R1N6</option>
                </select>
              </div>
              <div className="inp">
                <section>Course</section>
                <select name="" id="">
                  <option value="">IP</option>
                  <option value="">database</option>
                </select>
              </div>
              <div className="inp">
                <section>Time</section>
                <select name="" id="">
                  <option value="">Mon 1,2</option>
                </select>
              </div>
              <div className="inp">
                <section>Room</section>
                <select name="" id="">
                  <option value="">Room 3</option>
                  {/* <option value="">database</option> */}
                </select>
              </div>
              <Button className="h-75" variant="success">Assign</Button>
            </div>
          </div>
          <Table striped bordered hover className="schedule-maker-table">
            <thead>
              <tr>
                <th>Room</th>
                <th>Mon</th>
                <th>Tues</th>
                <th>Wed</th>
                <th>Thr</th>
                <th>Fri</th>
                <th>Sat</th>
                <th>Sun</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-primary">1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default UploadSchedule;
