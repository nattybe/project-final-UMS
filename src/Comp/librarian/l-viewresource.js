import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";

export default class LibrarianViewResource extends Component {
  render() {
    const books = [
      { title: "IP by me", category: "programming", link: "programming" },
      { title: "DB by me", category: "database", link: "DB" },
      { title: "CS by me", category: "security", link: "CSS" },
      { title: "BY by me", category: "Uhh", link: "UH" },
    ];
    return (
      <Container className="comp-body-container border">
        <h3>View Resource</h3>
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
          />
          <button>
            <i className="fas fa-search" />
          </button>
        </div>
        <div className="flex ">
          {books.map((book) => {
            return (
              <div className="item border row bg-light m-1">
                <div className="col d-flex">
                  <i className="fas fa-book fa-lg  col" />
                  <div className="col">
                    <div>Tittle:{book.title}</div>
                    <div>Category:{book.category}</div>
                  </div>
                </div>
                <div className="col download">
                  <Button  >Edit</Button>
                  <Button variant="danger">Delete</Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}
