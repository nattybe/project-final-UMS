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
          <h6 className="ms-5">Name: {deleteItem.R_Name}</h6>
          <h6 className="ms-5">Category: {deleteItem.R_CATEGORY}</h6>
          <h6 className="ms-5">Author: {deleteItem.R_AUTHOR}</h6>
          <h6 className="ms-5">Description: {deleteItem.R_DESCRIPTION}</h6>
        </>
      );
    } else {
      return (
        <>
          <h4>Are you sure you want to delete this resource?</h4>
          {/* <p>{deleteItem.R_ID}</p> */}
          <h6 className="ms-5">Name: TCP/IP Bible</h6>
          <h6 className="ms-5">Category: Networking</h6>
          <h6 className="ms-5">Author: Rob Scrimger</h6>
          <h6 className="ms-5">Description: it says right in the name</h6>
        </>
      );
    }
  };
  const deleteHandler = (book) => {
    setdeleteItem(book);

    handleShow();
  };
  const verifyDeleteHandler = async () => {
    // alert(`Are you sure`)

    if (typeof deleteItem !== "undefined") {
      alert(`Are you sure you`);
      const url = "http://localhost/proje/deleteResource.php";
      const delFD = new FormData();
      delFD.append("R_ID", deleteItem.R_ID);
      const fetchData = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: delFD,
      });
      const resData = await fetchData.json();
      console.log(resData);
      if (resData.status === "success") {
        handleClose();
        alert("Item deleted successfully");
      } else {
        alert("Item not Deleted" + resData.reason);
      }
    } else {
      alert(deleteItem);
    }
  };
  const EditResource = (props) => {
    const tobe = props.tobeEdit;
    if (typeof tobe === "undefined") {
      return (
        <form>
          <div className="resource-com">
            <div>
              <div className="">
                file Name:
                <input
                  className="form-control"
                  type="text"
                  disabled
                  // onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="d-flex">
                <div className="col">
                  Name:
                  <input
                    className="form-control"
                    type="text"
                    // onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="col ms-2">
                  Category:{" "}
                  <input
                    className="form-control"
                    type="text"
                    // onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
              </div>
              <div className="d-flex ">
                <div className="col">
                  Author:{" "}
                  <input
                    className="form-control"
                    type="text"
                    // onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
                <div className="col ms-2">
                  Published Year:
                  <input
                    className="form-control"
                    type="number"
                    // onChange={(e) => setpublishedYear(e.target.value)}
                  />
                </div>
              </div>

              <div className="description col">
                Description:
                <textarea
                  name="description"
                  id=""
                  cols="50"
                  rows="7"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col buttons">
            <Button variant="danger" type="reset">
              Cancel
            </Button>
            <Button type="submit">Add</Button>
          </div>
        </form>
      );
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
                  <div>Tittle:{book.R_Name}</div>
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
      return (
        <>
          <div className="item border row bg-light m-1">
            <div className="col d-flex">
              <i className="fas fa-book fa-lg  col" />
              <div className="col">
                <div>Tittle: TCP/IP Bible</div>
                <div>Category: Networking</div>
              </div>
              <div className="col">
                <div>Author: Rob Scrimger</div>
                <div>Description:it says right in the name</div>
              </div>
            </div>
            <div className="col download">
              <Button
                onClick={() => {
                  editHandler();
                }}
              >
                Edit
              </Button>
              <Button variant="danger" onClick={() => setDeleteShow(true)}>
                Delete
              </Button>
            </div>
          </div>
          <div className="item border row bg-light m-1">
            <div className="col d-flex">
              <i className="fas fa-book fa-lg  col" />
              <div className="col">
                <div>Tittle: TCP/IP Bible</div>
                <div>Category: Networking</div>
              </div>
              <div className="col">
                <div>Author: Rob Scrimger</div>
                <div>Description:it says right in the name</div>
              </div>
            </div>
            <div className="col download">
              <Button
                onClick={() => {
                  editHandler();
                }}
              >
                Edit
              </Button>
              <Button variant="danger" onClick={() => setDeleteShow(true)}>
                Delete
              </Button>
            </div>
          </div>
          <div className="item border row bg-light m-1">
            <div className="col d-flex">
              <i className="fas fa-book fa-lg  col" />
              <div className="col">
                <div>Tittle: TCP/IP Bible</div>
                <div>Category: Networking</div>
              </div>
              <div className="col">
                <div>Author: Rob Scrimger</div>
                <div>Description:it says right in the name</div>
              </div>
            </div>
            <div className="col download">
              <Button
                onClick={() => {
                  editHandler();
                }}
              >
                Edit
              </Button>
              <Button variant="danger" onClick={() => setDeleteShow(true)}>
                Delete
              </Button>
            </div>
          </div>
          <div className="item border row bg-light m-1">
            <div className="col d-flex">
              <i className="fas fa-book fa-lg  col" />
              <div className="col">
                <div>Tittle: TCP/IP Bible</div>
                <div>Category: Networking</div>
              </div>
              <div className="col">
                <div>Author: Rob Scrimger</div>
                <div>Description:it says right in the name</div>
              </div>
            </div>
            <div className="col download">
              <Button
                onClick={() => {
                  editHandler();
                }}
              >
                Edit
              </Button>
              <Button variant="danger" onClick={() => setDeleteShow(true)}>
                Delete
              </Button>
            </div>
          </div>
        </>
      );
    }
  };
  const editHandler = () => {
    const diag = document.getElementById("EditDiag");
    diag.close();
    diag.showModal();
  };
  const closeHandler = (id) => {
    const diag = document.getElementById(id);
    diag.close();
  };
  return (
    <Container className="comp-body-container border">
      <h3>View Resource</h3>

      <dialog id="EditDiag" className="diag-parax">
        <div className="diag-header">
          <div className="diag-title">Edit Resource</div>
          <span
            role="button"
            onClick={() => closeHandler("EditDiag")}
            className="diag-close"
          >
            X
          </span>
        </div>
        <div className="diag-body">
          <EditResource />
        </div>
      </dialog>
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
