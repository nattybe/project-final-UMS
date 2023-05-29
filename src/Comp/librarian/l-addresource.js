import React, { Component, useState } from "react";
import { Button, Container } from "react-bootstrap";

function LibrarianAddResource() {
  const [logger, setlogger] = useState({
    ID: 1,
    Name: "SomeOne",
  });

  const [Title, setTitle] = useState();
  const [Category, setCategory] = useState();
  const [Author, setAuthor] = useState();
  const [Description, setDescription] = useState();
  const [file, setFile] = useState();
  const [publishedYear, setpublishedYear] = useState();
  const [url, seturl] = useState();
  const [res, setRes] = useState();

  const addResource = async (fd) => {
    try {
      let resed = await fetch("http://localhost/proje/addResource.php", {
        method: "POST",
        headers: {
          // Accept: "application/json",
        },
        body: fd,
      })
        setRes(resed.json());
        console.log(res);
    } catch (error) {
      console.log(error.message);
      console.log(error.stack);
    }
  };
  const submithandler = async (e) => {
    e.preventDefault();
    if (Title && Category) {
    }
    let fd = new FormData();
    // console.log("File from file" + file);
    fd.append("image", file);
    fd.append("R_NAME", Title);
    fd.append("R_CATEGORY", Category);
    fd.append("R_POSTED_BY", logger.ID);
    fd.append("R_DESCRIPTION", Description);
    fd.append("R_PUBLISHED_YEAR", publishedYear);
    // fd.append("R_FILE", file);
    fd.append("R_AUTHOR", Author);
    fd.append("submit", "true");

    addResource(fd);
    // console.log("FormData " + JSON.stringify(fd));
  };
  return (
    <Container flex className="comp-body-container border">
      <h3>Add Resource</h3>
      <form>
        <div className="resource-com">
          <div>
            <input
              type="file"
              name="addfile"
              id="addfile"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <i className="fas fa-book fa-lg" />
          </div>
          <div>
            <div className="row">
              Name:
              <input
                className="form-control"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="row ">
              Category:{" "}
              <input
                className="form-control"
                type="text"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="row ">
              Author:{" "}
              <input
                className="form-control"
                type="text"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="row ">
              Published Year:
              <input
                className="form-control"
                type="number"
                onChange={(e) => setpublishedYear(e.target.value)}
              />
            </div>
            <div className="row description">
              Description:
              <input
                className="form-control"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col buttons">
          <Button variant="danger" type="reset">
            Cancel
          </Button>
          <Button type="submit" onClick={submithandler}>
            Add
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default LibrarianAddResource;
