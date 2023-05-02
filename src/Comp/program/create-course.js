import React from "react";
import { Button, Container } from "react-bootstrap";

function ProgramCreateCourse() {
  return (
    <Container className="border comp-body-container p-3">
      <h3>Create Course</h3>
      <form action="">
        <div className="PCC-itmes">
          <section>Course Code:</section>
          <input type="text" />
        </div>
        <div className="PCC-itmes">
          <section>Course Title:</section>
          <input type="text" />
        </div>
        <div className="PCC-itmes">
          <section>Credit Hour:</section>
          <input type="text" />
        </div>
        <div className="description react-com">
          <section>Description:</section>
          <input type="text" placeholder="About the course" />
        </div>
        <div className="col buttons">
          <Button variant="danger" type="reset">
            Cancel
          </Button>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </Container>
  );
}

export default ProgramCreateCourse;
