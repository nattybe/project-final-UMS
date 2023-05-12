import { Button } from "react-bootstrap";
import React from "react";

function AssignInstructor() {
  const course = [
    { id: "1", name: "Internet Programming" },
    { id: "2", name: "Course2" },
    { id: "3", name: "Course3" },
    { id: "4", name: "Course4" },
  ];
  const cour = [];
  const coursehe = () => {
    if (typeof course !== "undefined") {
      course.map((cou) => {
        cour.push(<option value={cou.id}>{cou.name}</option>);
      });
    }
  };
  coursehe();
  return (
    <div className="comp-body-container border d-flex flex-column align-items-center assign-instructor">
      <h3>Assign Instructor</h3>
      <div className="filter d-flex flex-row">
        <div className="filter-by d-flex flex-column">
          <label htmlFor="">filter section by year</label>
          <select name="" id="" className="">
            <option value=""></option>
            <option value="">2012</option>
            <option value="">2013</option>
            <option value="">2014</option>
            <option value="">2015</option>
            <option value="">2016</option>
          </select>
        </div>
        <div className="filterer d-flex flex-column">
          <label htmlFor="">filter section by department</label>
          <select name="" id="" className="">
            <option value=""></option>
            <option value="">Computer Science</option>
            <option value="">Marketing Management</option>
            <option value="">Mechanical Engineering</option>
          </select>
        </div>
        <div className="buttons ms-3 d-block">
        <Button>filter</Button>
        </div>
      </div>
      <div className="as-sections mt-5 col">
        <label htmlFor="Department">Choose Sections</label>
        <select className="oc-input" id="Department">
          <option value="">CCS1R1N6/12</option>
        </select>
      </div>
      <div className="as-course mt-5">
        <label htmlFor="Department mt-5">Choose Course</label>
        <select className="oc-input" id="Department">
          {/* <option value="id"></option> */}
          {cour}
        </select>
      </div>
      <div className="as-instructor mt-5">
        <label htmlFor="Department">Choose Instructor</label>
        <select className="oc-input" id="Department">
          <option value="Computer Science">Computer Science</option>
        </select>
      </div>
      <div className="buttons d-flex">
        <Button variant="danger" type="reset">
          Cancel
        </Button>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default AssignInstructor;
