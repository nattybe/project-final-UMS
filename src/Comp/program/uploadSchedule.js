import React from "react";
import { Button, Table } from "react-bootstrap";

function UploadSchedule() {
  const fakeschedule = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
  const fakeRoom = [1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <div className="comp-body-container">
      <h3>Upload Schedule</h3>
      <div>
        <div>
          <div className="border filter-Section m-2 ps-2">
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
              <Button className="h-75" variant="success">
                Assign
              </Button>
            </div>
          </div>
          <Table
            striped
            bordered
            responsive
            hover
            className="schedule-maker-table"
          >
            <thead>
              <tr>
                <th colSpan={3}>
                  Choose Week Date:
                  <select className="ms-1" name="" id="">
                    <option value="">Monday</option>
                    <option value="">Tuesday</option>
                    <option value="">Wednesday</option>
                    <option value="">Thursday</option>
                    <option value="">Friday</option>
                    <option value="">Saturday</option>
                    <option value="">Sunday</option>
                  </select>
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>#</th>
                <th colSpan={10}>Period</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>
                  <section>Room</section>
                </th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                <th>10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                {fakeschedule.map((sch) => {
                  return (
                    <td className="bg-primary schedule-items">
                      <div className="info-but">
                        <div className="infos">
                          <section>Section</section>
                          <section>Course</section>
                        </div>
                        <Button>Remove</Button>
                      </div>
                    </td>
                  );
                })}
              </tr><tr>
                <td>1</td>
                {fakeschedule.map((sch) => {
                  return (
                    <td className="bg-primary schedule-items">
                      <div className="info-but">
                        <div className="infos">
                          <section>Section</section>
                          <section>Course</section>
                        </div>
                        <Button>Remove</Button>
                      </div>
                    </td>
                  );
                })}
              </tr><tr>
                <td>1</td>
                {fakeschedule.map((sch) => {
                  return (
                    <td className="bg-primary schedule-items">
                      <div className="info-but">
                        <div className="infos">
                          <section>Section</section>
                          <section>Course</section>
                        </div>
                        <Button>Remove</Button>
                      </div>
                    </td>
                  );
                })}
              </tr><tr>
                <td>1</td>
                {fakeschedule.map((sch) => {
                  return (
                    <td className="bg-primary schedule-items">
                      <div className="info-but">
                        <div className="infos">
                          <section>Section</section>
                          <section>Course</section>
                        </div>
                        <Button>Remove</Button>
                      </div>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default UploadSchedule;
