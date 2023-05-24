import React from "react";
import { Button } from "react-bootstrap";

function CreateDepartment() {
  return (
    <div className="comp-body-container">
      <h3>Create Department</h3>
      <div className="create-department">
        <div>
          <section>Department Name</section>
          <input type="text" name="" id="" />
        </div>
        
        <div>
          <section>Department Name</section>
          <textarea name="" id="" cols="60" rows="10"></textarea>
        </div>
        <div className="buttons">
            <Button variant="danger">Cancel</Button>
            <Button variant="success">Create</Button>
        </div>
      </div>
    </div>
  );
}

export default CreateDepartment;
