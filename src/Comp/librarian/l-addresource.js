import React, { Component, useState } from "react";
import { Button, Container } from "react-bootstrap";

// export default class LibrarianAddResource extends Component {

//   render() {
//     return (
//     );
//   }
// }

function LibrarianAddResource() {
  // const state = {
  //   Title: "h",
  //   Category: "",
  //   Author: "",
  //   file: "",
  // };
  const [Title, setTitle] = useState();
  const [Category, setCategory] = useState();
  const [Author, setAuthor] = useState();
  const [Description, setDescription] = useState();
  const [file, setFile] = useState();

  const submithandler = (e) => {
    e.preventDefault();
    alert(Title + " " + file);
  };
  return (
    <Container flex className="comp-body-container border">
      <h3>Add Resource</h3>
      <form action="" onSubmit={submithandler}>
        <div className="resource-com">
          <div>
            <input
              type="file"
              name="addfile"
              id="addfile"
              value={file}
              onChange={(e) => setFile(e.target.value)}
            />
            <i className="fas fa-book fa-lg" />
          </div>
          <div>
            <div className="row">
              Title:{" "}
              <input
                type="text"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="row ">
              Category:{" "}
              <input
                type="text"
                value={Category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="row ">
              Author:{" "}
              <input
                type="text"
                value={Author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="row description">
              Description:{" "}
              <input
                type="text"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              />
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
    </Container>
  );
}

export default LibrarianAddResource;
