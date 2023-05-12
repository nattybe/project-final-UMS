import React, { Component, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";

export default function LibrarianViewResource() {
  const [resource, setResource] = useState();
  const [search, setSearch] = useState();
  const [SearchBy, setSearchBy] = useState();

  const [deleteItem, setdeleteItem] = useState();

  const [deleteShow, setDeleteShow] = useState(false);
  
  const handleClose = () => setDeleteShow(false);
  const handleShow = () => setDeleteShow(true);
  const books = [];
  const getResource = async () => {
    const searchFD = new FormData();
    if (search && SearchBy) {
      console.log(search, " ", SearchBy);
      searchFD.append("search", search);
      searchFD.append("By", SearchBy);
    }
    const url = "http://localhost/proje/getResource.php";
    console.log("url set: ", url);
    const fetchData = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: searchFD,
    });
    const resdata = await fetchData.json();
    setResource(resdata);
    console.log(resource);
  };
  const deleteFill = () => {
    if (typeof deleteItem !== "undefined") {
      return (
        <>
          <h4>Are you sure you want to delete this resource?</h4>
          {/* <p>{deleteItem.R_ID}</p> */}
          <h6 className="ms-5">Name: {deleteItem.R_NAME}</h6>
          <h6 className="ms-5">Category: {deleteItem.R_CATEGORY}</h6>
          <h6 className="ms-5">Author: {deleteItem.R_AUTHOR}</h6>
          <h6 className="ms-5">Description: {deleteItem.R_DESCRIPTION}</h6>
        </>
      );
    }
  };
  const deleteHandler = (book) => {
    setdeleteItem(book);

    handleShow();
  };
  const verifyDeleteHandler = async () => {
    if (typeof deleteItem !== "undefined") {
      const url = "http://localhost/proje/deleteResource.php";
      const delFD = new FormData();
      delFD.append("R_ID",deleteItem.R_ID);
      const fetchData = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: delFD,
      });
      const resData = await fetchData.json();
      console.log(resData);
      if(resData.status ==="success"){
        handleClose();
        alert("Item deleted successfully");
      }
    }
  };
  const fil = () => {
    if (typeof resource !== "undefined") {
      if (resource.status === "success") {
        resource.data.map((book) => {
          books.push(
            <div className="item border row bg-light m-1" key={book.R_ID}>
              <div className="col d-flex">
                <i className="fas fa-book fa-lg  col" />
                <div className="col">
                  <div>Tittle:{book.R_NAME}</div>
                  <div>Category:{book.R_CATEGORY}</div>
                </div>
                <div className="col">
                  <div>Author:{book.R_AUTHOR}</div>
                  <div>Description:{book.R_DESCRIPTION}</div>
                </div>
              </div>
              <div className="col download">
                <Button>Edit</Button>
                <Button variant="danger" onClick={() => deleteHandler(book)}>
                  Delete
                </Button>
              </div>
            </div>
          );
          // console.log("Books Length: ",books.length);
        });
        if (books.length > 0) {
          return books;
        } else {
          return <h1>Such Emptiness</h1>;
        }
      } else {
        return <h1 className="text-center mt-5 text-muted">Such Emptiness!</h1>;
      }
    } else {
      getResource();
    }
  };

  return (
    <Container className="comp-body-container border">
      <h3>View Resource</h3>
      <Modal show={deleteShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>{deleteFill()}</Modal.Body>
        <Modal.Footer className="d-flex justify-content-around">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={verifyDeleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="flex search-box">
        <h4>Search By</h4>
        <select
          name="SearchBy"
          id="SearchBy"
          onChange={(e) => setSearchBy(e.target.value)}
        >
          <option value="">...</option>
          <option value="R_NAME">Name</option>
          <option value="R_ID">ID</option>
          <option value="R_CATEGORY">Category</option>
        </select>
        <input
          type="search"
          name="search-contact"
          id="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={getResource}>
          <i className="fas fa-search" />
        </button>
      </div>
      <div className="flex book-render">{fil()}</div>
    </Container>
  );
}
