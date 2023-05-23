import React from "react";
import { Button } from "react-bootstrap";

function CreateSection() {
  return (
    <div className="comp-body-container">
      <h3>Create Section</h3>
      <div className="create-section d-flex justify-content-center">
    <form action="">
        <div className="form-control mt-2 row">
        <label htmlFor="">Section Name:</label>
            <input type="text" name="" id="" />
        </div>
        
        <div className="form-control mt-2 row">
        <label htmlFor="">Section Year:</label>
            <input type="number" name="" id="" />
        </div>
        
        <div className="form-control mt-2 row">
        <label htmlFor="">Section Degree:</label>
            <input type="text" name="" id="" />
        </div>
    <div className="buttons">
        <Button>Create</Button>
    </div>
    </form>
      </div>
    </div>
  );
}

export default CreateSection;
