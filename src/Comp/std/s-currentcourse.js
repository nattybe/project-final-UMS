import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
export default class StudentCurrentCourse extends Component {
  render() {
    const courses = [
      { Code: "123", Title: "IP", Department: "CSS", Status: "____" },
      { Code: "CS4312", Title: "DB", Department: "MGMT", Status: "____" },
      { Code: "123", Title: "IP", Department: "CSS", Status: "____" },
      { Code: "CS4312", Title: "DB", Department: "MGMT", Status: "____" },
      { Code: "123", Title: "IP", Department: "CSS", Status: "____" },
      { Code: "CS4312", Title: "DB", Department: "MGMT", Status: "____" },
    ];
    return (
      <Container className="border comp-body-container">
        <h3>Current Courses</h3>
        {/* <div className="flex search-box">
          <h4>Search By</h4>
          <select name="SearchBy" id="SearchBy">
            <option value="Code">Code</option>
            <option value="Title">Title</option>
            <option value="Department">Department</option>
          </select>
          <input
            type="search"
            name="search-resource"
            id="search"
            placeholder="Search"
          />
          <button>
            <i className="fas fa-search" />
          </button>
        </div> */}
        <div className="flex ">
          {courses.map((course) => {
            return (
              <div className="item border row bg-light m-1">
                <div className="col d-flex">
                  <i className="fas fa-book fa-lg  col" />
                  <div className="col">
                    <div>Code: {course.Code}</div>
                    <div>Title: {course.Title}</div>
                  </div>
                  <div className="col">
                    <div>Department: {course.Department}</div>
                    <div>Status: {course.Status}</div>
                  </div>
                </div>
                {/* <div className="col download">
                  <a href={"#" + book.link}>
                    {" "}
                    <i className="fas fa-download" />
                  </a>
                </div> */}
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}
