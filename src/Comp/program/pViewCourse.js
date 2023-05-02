import React from "react";
import { Button, Container } from "react-bootstrap";

export default function ProgramViewCourse() {
  const books = [
    { title: "IP by me", category: "programming", link: "programming" },
    { title: "DB by me", category: "database", link: "DB" },
    { title: "CS by me", category: "security", link: "CSS" },
    { title: "BY by me", category: "Uhh", link: "UH" },
  ];
  return (
    <Container className="comp-body-container border">
      <h3>View Course</h3>
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
                <Button>Edit</Button>
                <Button variant="danger">Delete</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
