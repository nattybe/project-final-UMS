import React from "react";
import { Button } from "react-bootstrap";

function OfferingCourse() {
  const books = [
    { title: "IP by me", category: "3", link: "programming" },
    { title: "DB by me", category: "2", link: "DB" },
    { title: "CS by me", category: "1", link: "CSS" },
    { title: "BY by me", category: "3", link: "UH" },
  ];
  return (
    <div className="comp-body-container">
      <h1 className="text-center">Offering Course</h1>
      <div className="oc-body">
        <div className="row mt-3">
          <div className="col d-flex flex-column">
            <label htmlFor="year">Year</label>
            <input className="oc-input" id="year" type="number" />
          </div>
          <div className="col d-flex flex-column">
            <label htmlFor="semester">semester</label>
            <input className="oc-input" id="semester" max={3} type="number" />
          </div>
          <div className="col d-flex flex-column">
            <label htmlFor="Department">Department</label>
            <select className="oc-input" id="Department" >
                <option value="Computer Science">Computer Science</option>
            </select>
          </div>
          <div className="col d-flex flex-column align-items-end">
            <label className="me-4" htmlFor="CoHr">
              Total Cr/Co hr
            </label>
            <input disabled className="oc-input" id="CoHr" type="number" />
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
          <div className="row m-2"><Button>Add Course</Button></div>
        </div>
          
          
          <div className="d-flex flex-row justify-content-around mt-5">
            <Button variant="danger">Cancel</Button>
            <div/>
            <div/>
            <Button variant="success">Create</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferingCourse;
