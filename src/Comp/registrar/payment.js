import React from "react";
import { Button, Table } from "react-bootstrap";

function Payment() {
  return (
    <div className="comp-body-container p-2">
      <h3>Payment</h3>
      <div className="d-flex form-control">
        <div>
          <section>Payment status</section>
          <select name="" id="">
            <option value="">All</option>
            <option value="">Paid</option>
            <option value="">Unpaid</option>
          </select>
        </div>
        {/* <Button></Button>
        <Button variant="danger">hello</Button> */}
      </div>
      <Table bordered striped className="mt-3">
        <thead>
          <tr>
            <th scope="col">ID</th>
            {/* <th scope="col"><a href="mailto:Nas@gmail.com">mail</a></th> */}
            <th scope="col">Name</th>
            <th scope="col">Sex</th>
            <th scope="col">Department</th>
            <th scope="col">Section</th>
            <th scope="col">Payment number</th>
            {/* <th scope="col">Department</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123</td>
            <td>Gelila Dangacehw</td>
            <td>F</td>
            <td>Computer Science</td>
            <td>N6</td>
            <td>2341423</td>
            {/* <td>Department</td> */}
          </tr>
          <tr>
            <td>421</td>
            <td>Fanuel Aysheshim</td>
            <td>M</td>
            <td>Computer Science</td>
            <td>N6</td>
            <td>1344126</td>
            {/* <td>Department</td> */}
          </tr>
          <tr>
            <td>311</td>
            <td>Fikir Addis</td>
            <td>F</td>
            <td>Marketing Managment</td>
            <td>N1</td>
            <td>893808</td>
            {/* <td>Department</td> */}
          </tr>
          <tr>
            <td>642</td>
            <td>Elsa Birhanu</td>
            <td>F</td>
            <td>Architecture</td>
            <td>N3</td>
            <td>24531</td>
            {/* <td>Department</td> */}
          </tr>
          <tr>
            <td>6743</td>
            <td>Beza Dangachew</td>
            <td>F</td>
            <td>Civil Enginering</td>
            <td>N1</td>
            <td>24253</td>
            {/* <td>Department</td> */}
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Payment;
