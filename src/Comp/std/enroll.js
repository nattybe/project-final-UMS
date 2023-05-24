import React from "react";
import { Table } from "react-bootstrap";

function Enroll() {
  return (
    <div className="comp-body-container">
      <h3>Enroll for the coming semester</h3>
      <div className="enroll">
        <div className="d-flex p-2">
          <div className="">
            <section>
              Year: <span>2</span>
            </section>
          </div>
          <div className="">
            <section>
              Semester: <span>1</span>
            </section>
          </div>
          <div className="">
            <section>
              payment Code: <span>16754</span>
            </section>
          </div>
        </div>
        <Table striped hover bordered>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Cr/Co. hrs</th>
              <th>Module</th>
              <th>Lab</th>
              <th>Field Practice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>h123</td>
              <td>Internet Programing</td>
              <td>3/4</td>
              <td>Non</td>
              <td>120</td>
              <td>Non</td>
            </tr>
            <tr>
              <td>h123</td>
              <td>Internet Programing</td>
              <td>3/4</td>
              <td>Non</td>
              <td>120</td>
              <td>Non</td>
            </tr>
            <tr>
              <td>h123</td>
              <td>Internet Programing</td>
              <td>3/4</td>
              <td>Non</td>
              <td>120</td>
              <td>Non</td>
            </tr>
            <tr>
              <td>h123</td>
              <td>Internet Programing</td>
              <td>3/4</td>
              <td>Non</td>
              <td>120</td>
              <td>Non</td>
            </tr>
          </tbody>
        </Table>
        <div className="d-flex m-3">
          <Table striped hover bordered>
          <tbody>

          <tr>
              <th>Name: </th>
              <td>John Smilga</td>
            </tr>
            <tr>
              <th>Section: </th>
              <td>CCS1R1N6</td>
            </tr>
            <tr>
              <th>Department: </th>
              <td>Computer Science</td>
            </tr>
            <tr>
              <th>Field of Study: </th>
              <td>Computer Science</td>
            </tr>
          </tbody>
          </Table>
          <Table striped hover bordered>
            <tbody>
              <tr>
                <th>Total Cr/Co Hr.</th>
                <td>16/20</td>
              </tr>
              <tr>
                <th>Tuition Fee</th>
                <td>300</td>
              </tr>
              <tr>
                <th>Module Fee</th>
                <td>300</td>
              </tr>
              <tr>
                <th>Lab Fee</th>
                <td>300</td>
              </tr>
              <tr>
                <th>Service Fee</th>
                <td>300</td>
              </tr>
              <tr>
                <th>Research Fee</th>
                <td>300</td>
              </tr>
              <tr>
                <th>Field-practice Fee</th>
                <td>300</td>
              </tr>
              <tr>
                <th>Penalty Fee</th>
                <td>300</td>
              </tr>
              <tr>
                <th>Penalty Fee</th>
                <td>300</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Grand Total</th>
                <td>300</td>
              </tr>
            </tfoot>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Enroll;
