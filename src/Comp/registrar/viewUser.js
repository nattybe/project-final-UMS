import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

function ViewUser() {
  const [students, setStudents] = useState([
    {
      id: "UU79706R",
      Name: "Natnael belihu yilma",
      Age: 25,
      Sex: "male",
      address: "Addiss ababa ethiopia",
      Department: "Computer Science",
    },
    {
      id: "UU79706R",
      Name: "Natnael belihu yilma",
      Age: 25,
      Sex: "male",
      address: "Addiss ababa ethiopia",
      Department: "Computer Science",
    },
    {
      id: "UU79706R",
      Name: "Natnael belihu yilma",
      Age: 25,
      Sex: "male",
      address: "Addiss ababa ethiopia",
      Department: "Computer Science",
    },
    {
      id: "UU79706R",
      Name: "Natnael belihu yilma",
      Age: 25,
      Sex: "male",
      address: "Addiss ababa ethiopia",
      Department: "Computer Science",
    },
  ]);
  const std = [
    {
      id: "UU79706R",
      Name: "Natty belihu yilma",
      Age: 25,
      Sex: "male",
      address: "Addiss ababa ethiopia",
      Department: "Computer Science",
    },
  ];
  const editHandler = () => {
    const diag = document.getElementById("EditDiag");
    diag.close();
    diag.showModal();
  };
  const closeHandler = (diagId) => {
    const diag = document.getElementById(diagId);
    diag.close();
  };
  return (
    <Container className="border comp-body-container">
      <h3>Users</h3>
      <dialog id="EditDiag" className="diag-parax">
        <div className="diag-header">
          <div className="diag-title">hello</div>
          <span
            role="button"
            onClick={() => closeHandler("EditDiag")}
            className="diag-close"
          >
            X
          </span>
        </div>
        <div className="diag-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quis, ut quos nihil omnis qui enim ex eius a, mollitia, aliquam consequatur quisquam libero minima ab labore cumque asperiores nam!</div>
      </dialog>
      <div className="flex search-box">
        <h4>Search By</h4>
        <select name="SearchBy" id="SearchBy">
          <option value="ID">ID</option>
          <option value="Name">Name</option>
          <option value="Section">Section</option>
          <option value="Department">Department</option>
        </select>
        <input
          type="search"
          name="searchStudent"
          id="searchStudent"
          placeholder="Search Student"
        ></input>
        <button
          onClick={() => {
            alert("Searched");
          }}
        >
          <i className="fas fa-search" />
        </button>
      </div>
      <div className="">
        {students.map((student) => {
          return (
            <div className="item student-item border shadow bg-light m-1 mt-4">
              <div className="text-center">
                <img src="./logo512.png" sizes="10px" alt="" />
                <section>ID: {student.id}</section>
              </div>
              <div className="mt-3">
                <p>Name: {student.Name}</p>
                <p>
                  Age: {student.Age}&nbsp;&nbsp;&nbsp; Sex: {student.Sex}
                </p>
                <p>Address: {student.address}</p>
                <p>Authority: {student.Department}</p>
              </div>
              <div></div>
              <div></div>
              <div className="p-2">
                <div className="m-1">
                  <Button
                    className="m-2"
                    onClick={editHandler}
                    variant="warning"
                  >
                    Edit
                  </Button>
                  {/* <Button className="m-2">View gpa</Button> */}
                </div>
                <div className="m-1">
                  <Button className="m-2" variant="danger">
                    Delete
                  </Button>
                  <Button
                    className="m-2 bg-success"
                    onClick={() => {
                      setStudents(std);
                    }}
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
export default ViewUser;
