import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";

function ViewDepartment() {
  const addMembersdiag = () => {
    const diag = document.getElementById("add-members-diag");
    diag.showModal();
  };
  const editdiag = () => {
    const diag = document.getElementById("edit-dep-diag");
    diag.showModal();
  };
  const deletediag = () => {
    const diag = document.getElementById("delete-dep-diag");
    diag.showModal();
  };
  const DeleteTr = (props) => {
    const [named, setNamed] = useState();
    const saveHandler = (name) => {
      if (name === named) {
        alert(named + ' is ' +name);
      }else{
        alert(props.name + ' is props.named');
      }
    };
    return (
      <tr>
        <td>{props.id}</td>
        <td>
          <input type="text" onChange={(e)=>setNamed(e.target.value)}/>
        </td>
        <td>{props.auth}</td>
        <td>
          <Button variant="danger">Remove</Button>
        </td>
        <td>
          <Button variant="success" onClick={() => saveHandler(props.name)}>
            Save
          </Button>
        </td>
      </tr>
    );
  };
  return (
    <div className="comp-body-container">
      <dialog id="add-members-diag" className="diag">
        <h4>Add Members</h4>
      </dialog>
      <dialog id="edit-dep-diag" className="diag">
        <h4>Edit Department</h4>
        <div className="diag-body">
          <div className="d-flex">
            <div>
              <div>
                <section>Department ID</section>
                <input type="text" disabled />
              </div>
              <div>
                <section>Department Name</section>
                <input type="text" />
              </div>
              <div>
                <section>Department Description</section>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
            <div className="ms-3 border">
              <h4>Members</h4>
              <Table striped bordered responsive hover>
                <thead>
                  <tr>
                    <th>member ID</th>
                    <th>member Name</th>
                    <th>member Authority</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <DeleteTr id={1} name="Worku" auth="Department Head" />
                </tbody>
              </Table>
              <div className="buttons">
                <Button>Cancel</Button>
                <Button>Save</Button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
      <dialog id="delete-dep-diag" className="diag">
        <h4>Delete Department</h4>
        <p>
          Are you sure you want to delete this Department? <br />
          <h5>Dep Name</h5>
        </p>
        <div className="delete buttons ">
          <Button
            onClick={() => {
              document.getElementById("delete-dep-diag").close();
            }}
          >
            Cancel
          </Button>
          <Button variant="danger">Delete</Button>
        </div>
      </dialog>
      <h3>Departments</h3>
      <div className="flex search-box">
        <h4>Search By</h4>
        <select name="SearchBy" id="SearchBy">
          <option value="Name">ID</option>
          <option value="Authority">Name</option>
        </select>
        <input
          type="search"
          name="search-contact"
          id="search"
          placeholder="Search"
        />
        <button>
          <i className="fas fa-search" />
        </button>
      </div>
      <div className="flex">
        <div className="item border row bg-light m-1">
          <div className="col d-flex">
            <i className="fas fa-book fa-lg  col" />
            <div className="col">
              <div>
                Department ID:
                <section>1234</section>
              </div>
            </div>
            <div className="col">
              <div>
                Department Name:
                <section>Computer Science</section>
              </div>
            </div>
            <div className="col">
              <section></section>
            </div>
          </div>
          <div className="col download">
            <Button onClick={(e) => addMembersdiag(e)}>Add Members</Button>
            <Button variant="warning" onClick={(e) => editdiag(e)}>
              Edit
            </Button>
            <Button variant="danger" onClick={(e) => deletediag(e)}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDepartment;
