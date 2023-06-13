import React, { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { baseUrl } from "../../globalConst";

function StudentResource() {
  const [search, setSearch] = useState();
  const [SearchBy, setSearchBy] = useState("Name");
  const [resource, setResource] = useState();
  const booksComp = [];
  const searchHandler = () => {
    getResource();
  };
  const getResource = async () => {
    const searchFD = new FormData();
    if (search && SearchBy) {
      // alert(search + " " + SearchBy);
      searchFD.append("search", search);
      searchFD.append("By", SearchBy);
    }
    const url = "http://localhost/proje/getResource.php";
    // console.log("url set: ", url);
    const fetchData = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: searchFD,
    });
    const resdata = await fetchData.json();
    setResource(resdata);
    // console.log(resource);
  };
  const resourceFiller = () => {
    if (typeof resource !== "undefined") {
      if (resource.status === "success") {
        resource.data.map((resource) => {
          booksComp.push(
            <div className="item border row bg-light m-1" key={resource.R_ID}>
              <div className="col d-flex">
                <i className="fas fa-book fa-lg  col" />
                <div className="col form-control me-2">
                  <div>Tittle:{resource.R_Name}</div>
                  <div>Category:{resource.R_CATEGORY}</div>
                </div>
                <div className="col form-control ms-3">
                  <div>Tittle:{resource.R_Author}</div>
                  <div>Category:{resource.R_DESCRIPTION}</div>
                </div>
              </div>
              <div className="col download">
                <a href={baseUrl+"" + resource.R_FILENAME}>
                  <i className="fas fa-download" />
                </a>
              </div>
            </div>
          );
        });
        if (booksComp.length > 1) {
          return booksComp;
        } else {
          return (
            <h1 className="text-center mt-5 text-muted">Such Emptiness!</h1>
          );
        }
      }
      // console.log(booksComp);
    } else {
      getResource();
    }
  };
  useEffect(() => {
    getResource();
  }, [resource]);

  return (
    <Container className="border comp-body-container">
      <h3>Resource</h3>
      <div className="flex search-box">
        <h4>Search By</h4>
        <select
          name="SearchBy"
          id="SearchBy"
          onChange={(e) => setSearchBy(e.target.value)}
        >
          <option value="R_NAME">Name</option>
          <option value="Category">Category</option>
          <option value="Department">Department</option>
        </select>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          name="search-contact"
          id="search"
          placeholder="Search"
        />
        <button onClick={searchHandler}>
          <i className="fas fa-search" />
        </button>
      </div>
      <div className="flex ">
        {/* <div className="item border row bg-light m-1">
          <div className="col d-flex">
            <i className="fas fa-book fa-lg  col" />
            <div className="col">
              <div>Tittle: TCP/IP Bible</div>
              <div>Category:Networking</div>
            </div>
            <div className="col">
              <div>Author: Rob Scrimger</div>
              <div>Department: Computer Science</div>
            </div>
          </div>
          <div className="col download">
            <a href="#">
              <i className="fas fa-download" />
            </a>
          </div>
        </div>
        <div className="item border row bg-light m-1">
          <div className="col d-flex">
            <i className="fas fa-book fa-lg  col" />
            <div className="col">
              <div>Tittle: TCP/IP Bible</div>
              <div>Category:Networking</div>
            </div>
            <div className="col">
              <div>Author: Rob Scrimger</div>
              <div>Department: Computer Science</div>
            </div>
          </div>
          <div className="col download">
            <a href="#">
              <i className="fas fa-download" />
            </a>
          </div>
        </div>
        <div className="item border row bg-light m-1">
          <div className="col d-flex">
            <i className="fas fa-book fa-lg  col" />
            <div className="col">
              <div>Tittle: TCP/IP Bible</div>
              <div>Category:Networking</div>
            </div>
            <div className="col">
              <div>Author: Rob Scrimger</div>
              <div>Department: Computer Science</div>
            </div>
          </div>
          <div className="col download">
            <a href="#">
              <i className="fas fa-download" />
            </a>
          </div>
        </div>
        <div className="item border row bg-light m-1">
          <div className="col d-flex">
            <i className="fas fa-book fa-lg  col" />
            <div className="col">
              <div>Tittle: TCP/IP Bible</div>
              <div>Category:Networking</div>
            </div>
            <div className="col">
              <div>Author: Rob Scrimger</div>
              <div>Department: Computer Science</div>
            </div>
          </div>
          <div className="col download">
            <a href="#">
              <i className="fas fa-download" />
            </a>
          </div>
        </div>
        <div className="item border row bg-light m-1">
          <div className="col d-flex">
            <i className="fas fa-book fa-lg  col" />
            <div className="col">
              <div>Tittle: TCP/IP Bible</div>
              <div>Category:Networking</div>
            </div>
            <div className="col">
              <div>Author: Rob Scrimger</div>
              <div>Department: Computer Science</div>
            </div>
          </div>
          <div className="col download">
            <a href="#">
              <i className="fas fa-download" />
            </a>
          </div>
        </div> */}
        {resourceFiller()}
      </div>
    </Container>
  );
}

export default StudentResource;
