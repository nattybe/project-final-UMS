import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { baseUrl } from "../../globalConst";
import { useEffect } from "react";

function Payment() {
  const [res, setRes] = useState({ status: "not yet" });
  const [first, setFirst] = useState();
  const getPayment = async (e) => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append(
      "GetPayment",
      document.getElementById("paymentStatus").value
    );
    let dep = await fetch(baseUrl + "getPayment.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    let depa = await dep.json();
    console.warn(depa);
    setRes(depa);
  };
  useEffect(() => {
    getPayment();
  }, [first]);
  const paymentFiiler = () => {
    if (res.status === "success") {
      const tempRows = [];
      res.data.map((payments) => {
        tempRows.push(
          <tr>
            <td>{payments.id}</td>
            <td>{payments.fname+" "+payments.lname}</td>
            <td>{payments.sex}</td>
            <td>{payments.D_Name}</td>
            <td>{payments.Se_Name}</td>
            <td>{payments.P_Id}</td>
            {/* <td>Department</td> */}
          </tr>
        );
      });
      return tempRows
    }
  };
  return (
    <div className="comp-body-container p-2">
      <h3>Payment</h3>
      <div className="d-flex form-control">
        <div>
          <section>Payment status</section>
          <select
            name=""
            id="paymentStatus"
            onChange={(e) => setFirst(e.target.value)}
          >
            <option value="all">All</option>
            <option value="1">Paid</option>
            <option value="0">Unpaid</option>
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
        {paymentFiiler()}
        </tbody>
      </Table>
    </div>
  );
}

export default Payment;
