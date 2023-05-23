import { getValue } from "@testing-library/user-event/dist/utils";
import React, { Component, useState } from "react";
import { Button, Container, Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

function ViewStudent() {
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
  return (
    <Container className="border comp-body-container">
      <h3>Students</h3>
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
                <p>Department: {student.Department}</p>
              </div>
              <div></div>
              <div></div>
              <div className="p-2">
                <div className="m-1">
                  <Button className="m-2" variant="warning">
                    Edit
                  </Button>
                  <Button className="m-2">Edit Grade</Button>
                </div>
                <div className="m-1">
                  <Button className="m-2" variant="danger">
                    Delete
                  </Button>
                  <Button className="m-2 bg-success" 
                  onClick={()=>{setStudents(std)}}
                  >Contact</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default ViewStudent;
