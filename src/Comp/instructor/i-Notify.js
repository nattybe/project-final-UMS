import React, { Component, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { baseUrl } from "../../globalConst";

function InstructorNotify() {
  const [by, setBy] = useState(1);
  const [from, setFrom] = useState("registrars");
  const [res, setRes] = useState();
  const postHandler = async (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("Notify", true);
    formdata.append("By", "1");
    formdata.append("From", "registrars");
    formdata.append("Title", document.getElementById("n-title").value);
    formdata.append("Content", document.getElementById("n-description").value);
    console.warn(formdata);
    let resa = await fetch(baseUrl + "/Notify.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formdata,
    });
    resa = await resa.json();
    setRes(resa);
    console.log(res);
    if (typeof res !== "undefined") {
      document.getElementById("diagSuccess").showModal();
    }
  };
  const successFiller = () => {
    if (typeof res !== "undefined") {
      console.warn(res.status);
      if (res.status === "success") {
        return (
          <>
            <div className="diag-header ">
              <div className="diag-title">Notification Successful</div>
              <span
                role="button"
                onClick={() => closeHandler("diagSuccess")}
                className="diag-close"
              >
                X
              </span>
            </div>
            <div className="diag-body" id="diagDeleteBody">
              {/* <h4>{res}</h4> */}
              {/* <h4>Are you sure you want to delete this Course</h4> */}
              {/* {successFiller()} */}
            </div>
          </>
        );
      } else if (res.status === "failed") {
        return (
          <>
            <div className="diag-header ">
              <div className="diag-title">Notification Failed</div>
              <span
                role="button"
                onClick={() => closeHandler("diagSuccess")}
                className="diag-close"
              >
                X
              </span>
            </div>
            <div className="diag-body" id="diagDeleteBody">
              <h4 className="bg-danger">Error</h4>
              <p>Reason: {res.reason}</p>
              {/* <h4>Are you sure you want to delete this Course</h4> */}
              {/* {successFiller()} */}
            </div>
          </>
        );
      }
    }
  };
  const closeHandler = (id) => {
    const diag = document.getElementById(id);
    diag.close();
  };
  return (
    <Container className="comp-body-container border">
      <h3>Post Notification</h3>
      <div className="row">
        <form onSubmit={(e) => postHandler(e)}>
          <dialog id="diagSuccess">{successFiller()}</dialog>
          <div className="notify-title">
            Title:{" "}
            <input type="text" id="n-title" placeholder="Title of the post" />
          </div>
          <div className="row">
            <div className="notify-description">
              <label htmlFor="">Description: </label>
              <textarea
                name=""
                id="n-description"
                placeholder="Detail information"
                cols="60"
                rows="7"
              ></textarea>
            </div>
          </div>
          <div className="buttons">
            {/* <div className="d-flex flex-column">
            <label htmlFor="">Post For</label>
            <select name="notify-for" id="notify-for">
              <option value="Department">Department</option>
              <option value="Department">Section</option>
            </select>
          </div>
          <div className="d-flex flex-column">
            <label htmlFor="">Post For</label>
            <select name="notify-for" id="notify-for">
              <option value="Department">Computer Science</option>
            </select>
          </div> */}
            <Button type="submit"> Post</Button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default InstructorNotify;
