import React from "react";
import { Button, Container } from "react-bootstrap";

function ProgramCreateCourse() {
  return (
    <Container className="border comp-body-container d-flex flex-column p-3 align-items-center">
      <h3>Create Course</h3>
      <form action="">
        <div className="col d-flex mt-4">
          <div className="PCC-itmes">
            <section>Course Code:</section>
            <input type="text" />
          </div>
          <div className="PCC-itmes ms-3">
            <section>Course Code:</section>
            <input type="text" />
          </div>
        </div>
        <div className="col d-flex  mt-4">
          <div className="PCC-itmes">
            <section>Course Title:</section>
            <input type="text" />
          </div>
          <div className="PCC-itmes  ms-3">
            <section>Credit Hour:</section>
            <input type="text" />
          </div>
        </div>

        <div className="description react-com mt-4">
          <section>Description:</section>
          <textarea
            rows={5}
            cols={50}
            type="text"
            placeholder="About the course"
          />
        </div>
        <div className="col buttons">
          <Button variant="danger" type="reset">
            Cancel
          </Button>
          <Button type="submit">Create</Button>
        </div>
      </form>
    </Container>
  );
}

export default ProgramCreateCourse;
