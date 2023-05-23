import React from "react";
import { Button } from "react-bootstrap";

function EditOfferingCourse(props) {
  const books = [
    { title: "IP by me", category: "3", link: "programming" },
    { title: "DB by me", category: "2", link: "DB" },
    { title: "CS by me", category: "1", link: "CSS" },
    { title: "BY by me", category: "3", link: "UH" },
  ];
  return (
    <div className="comp-body-container">
      <h3>View Offer Course</h3>
      <div className="edit-offering-course ps-3 pe-3">
        <div className="row mt-3">
          <div className="col d-flex flex-column">
            <label htmlFor="Department">Department</label>
            <select className="oc-input" id="Department" disabled>
              <option value="Computer Science">Computer Science</option>
            </select>
          </div>
          <div className="col d-flex flex-column">
            <label htmlFor="Department">Year</label>
            <select className="oc-input" id="Department">
              <option value="Computer Science">2012</option>
            </select>
          </div>
          <div className="col d-flex flex-column">
            <label htmlFor="Department">Semister</label>
            <select className="oc-input" id="Department">
              <option value="Computer Science">1st</option>
            </select>
          </div>
          <div className="col d-flex flex-column align-items-end">
            <label className="me-4" htmlFor="CoHr">
              Total Cr/Co hr
            </label>
            <input disabled className="oc-input" id="CoHr" type="number" />
          </div>
          <div className="col align-items-end d-flex">
            <Button variant="secondary">Get Offering Course</Button>
          </div>
        </div>
      </div>
      <div className="m-5 mt-1 pt-3 align-items-center d-flex flex-column">
        <div className="p-4 align-items-center d-flex flex-column border">
          {books.map((book) => {
            return (
              <div className="item border row bg-light m-1">
                <div className="col d-flex">
                  <i className="fas fa-book fa-lg  col" />
                  <div className="col">
                    <div>
                      Course Tittle:
                      <section>{book.title}</section>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      Credit Hour:
                      <section>{book.category}</section>
                    </div>
                  </div>
                  <div className="col">
                    Contact Hour:
                    <section>{book.link}</section>
                  </div>
                </div>
                <div className="col download">
                  <Button variant="danger">Remove</Button>
                </div>
              </div>
            );
          })}
          <div className="row m-2">
            <Button>Add Course</Button>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-around mt-5">
          <Button variant="danger">Cancel</Button>
          <div />
          <div />
          <Button variant="success">Save</Button>
        </div>
      </div>
    </div>
  );
}

export default EditOfferingCourse;
