import { getValue } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import { Container, Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

class StudentContact extends Component {
  render() {
    const books = [
      { Name: "Some one", Authority: "leader", link: "Contact" },
      { Name: "Some one", Authority: "leader", link: "Contact" },
      { Name: "Some one", Authority: "leader", link: "Contact" },
      { Name: "Some one", Authority: "leader", link: "Contact" },
      { Name: "Some one", Authority: "leader", link: "Contact" },
      { Name: "Some one", Authority: "leader", link: "Contact" },
      { Name: "Some one", Authority: "leader", link: "Contact" },
    ];
    return (
      <Container className="border comp-body-container">
        <h3>Contact</h3>
        <div className="flex search-box">
        <h4>Search By</h4>
          <select name="SearchBy" id="SearchBy">
            <option value="ID">ID</option>
            <option value="Name">Name</option>
            <option value="Authority">Authority</option>
          </select>
          <input
            type="search"
            name="search-contact"
            id="search"
            placeholder="Search"
          ></input>
          <button onClick={()=>{
            // var serby=
            alert(  "Searched")
          }}>
            <i className="fas fa-search" />
          </button>
        </div>
        <div className="flex ">
          {books.map((book) => {
            return (
              <div className="item border row bg-light m-1">
                <div className="col d-flex">
                  <i className="fas fa-user col" />
                  <div className="col">
                    <div>Name:{book.Name}</div>
                    <div>Authority:{book.Authority}</div>
                  </div>
                </div>
                <div className="col download">
                  <a href={"#" + book.link}>
                    <i className="fas fa-comment-alt" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default StudentContact;
