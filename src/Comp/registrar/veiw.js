import { getValue } from "@testing-library/user-event/dist/utils";
import React, { Component, useState } from "react";
import { Button, Container, Dropdown, Table } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import EditUser from "./editUser";

function ViewStudent() {
  // const SingleStd=()=>{
  //   return(

  //   )
  // }
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
  const EditGrade = () => {
    return (
      <div className="comp-body-container">
        <Table bordered striped>
          <thead>
            <tr>
              <th>Student Name</th>

              <td>Some One</td>
            </tr>
            <tr>
              <th>CGPA</th>
              <td>3.4</td>
            </tr>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Grade (100%)</th>
              <th>Letter Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CC012</td>
              <td>Internet Programing</td>
              <td>
                <input type="number" name="" id="" value={87} />
              </td>
              <td>A</td>
            </tr>
            <tr>
              <td>CC012</td>
              <td>Internet Programing</td>
              <td>
                <input type="number" name="" id="" value={87} />
              </td>
              <td>A</td>
            </tr>
            <tr>
              <td>CC012</td>
              <td>Internet Programing</td>
              <td>
                <input type="number" name="" id="" value={87} />
              </td>
              <td>A</td>
            </tr>
            <tr>
              <td>CC012</td>
              <td>Internet Programing</td>
              <td>
                <input type="number" name="" id="" value={87} />
              </td>
              <td>A</td>
            </tr>
            <tr>
              <td>CC012</td>
              <td>Internet Programing</td>
              <td>
                <input type="number" name="" id="" value={87} />
              </td>
              <td>A</td>
            </tr>
            <tr>
              <td>CC012</td>
              <td>Internet Programing</td>
              <td>
                <input type="number" name="" id="" value={87} />
              </td>
              <td>A</td>
            </tr>
            <tr>
              <td>CC012</td>
              <td>Internet Programing</td>
              <td>
                <input type="number" name="" id="" value={87} />
              </td>
              <td>A</td>
            </tr>
            <tr>
              <td>CC012</td>
              <td>Internet Programing</td>
              <td>
                <input type="number" name="" id="" value={87} />
              </td>
              <td>A</td>
            </tr>
          </tbody>
        </Table>
        <div className="buttons">
          <Button variant="danger">Cancel</Button>
          <Button variant="success">Save</Button>
        </div>
      </div>
    );
  };
  // const DeleteStd=()=>{

  // }
  const editStd = () => {
    const diag = document.getElementById("EditDiag");
    diag.close();
    diag.showModal();
  };
  const editStdGrade = () => {
    const diag = document.getElementById("EditStdGradeDiag");
    diag.close();
    diag.showModal();
  };
  const delteStd = () => {
    const diag = document.getElementById("DeleteStdDiag");
    diag.close();
    diag.showModal();
  };

  const closeHandler = (diagId) => {
    const diag = document.getElementById(diagId);
    diag.close();
  };
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
                <dialog id="EditDiag" className="diag-parax">
                  <div className="diag-header">
                    <div className="diag-title">Edit Student</div>
                    <span
                      role="button"
                      onClick={() => closeHandler("EditDiag")}
                      className="diag-close"
                    >
                      X
                    </span>
                  </div>
                  <div className="diag-body">
                    <EditUser user={std} />
                  </div>
                </dialog>
                <dialog id="EditStdGradeDiag" className="diag-parax">
                  <div className="diag-header">
                    <div className="diag-title">Edit Student Grade</div>
                    <span
                      role="button"
                      onClick={() => closeHandler("EditStdGradeDiag")}
                      className="diag-close"
                    >
                      X
                    </span>
                  </div>
                  <div className="diag-body">
                    <EditGrade />
                  </div>
                </dialog>
                <dialog id="DeleteStdDiag" className="diag-parax">
                  <div className="diag-header">
                    <div className="diag-title">Delete Student</div>
                    <span
                      role="button"
                      onClick={() => closeHandler("DeleteStdDiag")}
                      className="diag-close"
                    >
                      X
                    </span>
                  </div>
                  <div className="diag-body">
                    <section>
                      Are you sure you want to delete this student?
                    </section>
                    <section>Id:</section>
                    <section>Name:</section>
                    <section>Section:</section>
                    <section>Department:</section>
                  </div>
                  <div className="buttons">
                    <Button>Cancel</Button>
                    <Button variant="danger">Delete</Button>
                  </div>
                </dialog>
                <img src="avatar.jpg" sizes="10px" alt="" />
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
                  <Button
                    className="m-2"
                    onClick={() => editStd()}
                    variant="warning"
                  >
                    Edit
                  </Button>
                  <Button className="m-2" onClick={() => editStdGrade()}>
                    Edit Grade
                  </Button>
                </div>
                <div className="m-1">
                  <Button
                    className="m-2"
                    variant="danger"
                    onClick={() => {
                      delteStd();
                    }}
                  >
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

export default ViewStudent;
