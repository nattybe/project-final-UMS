import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { baseUrl } from "../../globalConst";
export default function ProgramViewCourse() {
  const books = [
    { title: "IP by me", category: "programming", link: "programming" },
    { title: "DB by me", category: "database", link: "DB" },
    { title: "CS by me", category: "security", link: "CSS" },
    { title: "BY by me", category: "Uhh", link: "UH" },
  ];
  
  const [cCode, setCCode] = useState();
  const [cTitle, setCTitle] = useState();
  const [cCont, setCCont] = useState();
  const [cCred, setCCred] = useState();
  const [cPre, setCPre] = useState("null");
  const [cDep, setCDep] = useState(1);
  const [cDes, setCDes] = useState();

  const [search, setSearch] = useState();
  const [SearchBy, setSearchBy] = useState("C_Name");
  const [course, setCourse] = useState();
  const [toBeDeleted, setToBeDeleted] = useState();
  const [toBeEdited, setToBeEdited] = useState();
  const getCourse = async () => {
    // alert(search);
    const searchFD = new FormData();
    searchFD.append("dep", "1");
    searchFD.append("viewCourse", true);
    if (search && SearchBy) {
      // console.log(search, " ", SearchBy);
      searchFD.append("search", search);
      searchFD.append("By", SearchBy);
    }
    const url = baseUrl + "CreateCourse.php";
    // console.log("url set: ", url);
    const fetchData = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: searchFD,
    });
    const resdata = await fetchData.json();
    setCourse(resdata);
    // console.log(course);
  };
  useEffect(() => {
    getCourse();
  }, []);
  const editHandler = (e) => {
    e.preventDefault();
    alert();
  };
  const toBeEdittedFiller = () => {
    if (typeof toBeEdited !== "undefined") {
      // let cCode = toBeEdited.C_Code;
      // let cTitle = toBeEdited.C_Title;
      // let cCont = toBeEdited.C_Contact_hour;
      // let cCred = toBeEdited.C_Credit_hour;
      // let cPre = toBeEdited.C_Prerequisites;
      // let cDep = toBeEdited.department_id;
      // let cDes = toBeEdited.C_Description;
      // setCCode(toBeEdited.C_Code);
      // document.getElementById("course-code-edit").value = toBeEdited.C_Code;
      return (
        <form action="" className="" onSubmit={(e) => editHandler(e)}>
          <div className="col d-flex mt-4">
            <div className="PCC-itmes">
              <section id="course-label">Course Code:</section>
              <input
                type="text"
                id="course-code-edit"
                 onChange={(e) => setCCode(e.target.value)}
                 value={cCode}
                required
                className="form-control"
              />
            </div>
            <div className="PCC-itmes ms-3">
              <section>Course Prerequisite:</section>
              <select
                name=""
                id=""
                //  onChange={(e) => setCPre(e.target.value)}
                required
                className="form-control"
              >
                <option value="Null">none</option>
                {courseFiller()}
                {/* <option value="">MGMT 123</option> */}
              </select>
            </div>
            <div className="PCC-itmes ms-3">
              <section>Department:</section>
              <select name="" id="" disabled className="form-control">
                {/* <option value="">Marketing Managment</option> */}
              </select>
            </div>
          </div>
          <div className="col d-flex  mt-4">
            <div className="PCC-itmes">
              <section>Course Title:</section>
              <input
                type="text"
                //  onChange={(e) => setCTitle(e.target.value)}
                required
                className="form-control"
              />
            </div>
            <div className="PCC-itmes  ms-3">
              <section>Credit Hour:</section>
              <input
                type="number"
                //  onChange={(e) => setCCred(e.target.value)}
                required
                className="form-control"
              />
            </div>
            <div className="PCC-itmes   ms-3">
              <section>Contact Hour:</section>
              <input
                type="number"
                //  onChange={(e) => setCCont(e.target.value)}
                required
                className="form-control"
              />
            </div>
          </div>
          <div className="description react-com mt-4">
            <section>Description:</section>
            <textarea
              required
              className="form-control"
              //  onChange={(e) => setCDes(e.target.value)}
              rows={5}
              id="course-description"
              cols={77}
              maxLength={164}
              type="text"
              placeholder="About the course"
            />
          </div>
          <div className="col buttons">
            <Button variant="danger" type="reset">
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </div>
        </form>
      );
    }
  };
  const rows = () => {
    if (typeof course !== "undefined") {
      if (course.status !== "undefined") {
        return course.rows;
      }
    }
  };
  const courseFiller = () => {
    let courseta = [];
    if (typeof course !== "undefined") {
      if (course.status === "success") {
        course.data.map((course) => {
          courseta.push(
            <div className="item border row bg-light m-1" key={course.C_Code}>
              <div className="col d-flex">
                <i className="fas fa-book fa-lg  col" />
                <div className="">
                  <div>
                    <section>Course Code: {course.C_Code}</section>
                    <section>Course Name: {course.C_Name}</section>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <section>Contact Hour: {course.C_Contact_hour}</section>
                    <section>Credit Hour: {course.C_Credit_hour}</section>
                  </div>
                </div>
                <div className="col">
                  <section>Prerequisite: {course.C_Prerequisites}</section>
                  {/* <section>Description: {course.C_Description}</section> */}
                </div>
              </div>
              <div className="col download">
                <Button onClick={() => EditCourse(course)}>Edit</Button>
                <Button variant="danger" onClick={() => diagDelete(course)}>
                  Delete
                </Button>
              </div>
            </div>
          );
        });
      } else {
        return <h1 className="text-muted">Such Emptiness!</h1>;
      }
    }
    return courseta;
  };
  const EditCourse = (datas) => {
    setToBeEdited(datas);
    const diag = document.getElementById("diagEdit");
    diag.setAttribute("data", datas);
    diag.showModal();
    // diag.setAttribute('show',true);
  };

  const deleteFiller = () => {
    if (typeof toBeDeleted !== "undefined") {
      return (
        <>
          <p>Course Code: {toBeDeleted.C_Code}</p>
          <p>Course Name: {toBeDeleted.C_Name}</p>
          <p>
            Co.hr/Cr.hr:{" "}
            {toBeDeleted.C_Contact_hour + "/" + toBeDeleted.C_Credit_hour}
          </p>
          <p>Description: {toBeDeleted.C_Description}</p>
          <div className="d-flex justify-content-around">
            <Button onClick={() => closeHandler("diagDelete")}>Cancel</Button>
            <Button
              variant="danger"
              onClick={() => verifyDeletion(toBeDeleted.C_Code)}
            >
              Delete
            </Button>
          </div>
        </>
      );
    }
  };
  const closeHandler = (id) => {
    const diag = document.getElementById(id);
    diag.close();
  };
  const verifyDeletion = async (code) => {
    // alert(`Are you sure you`);
    const url = "http://localhost/proje/CreateCourse.php";
    const delFD = new FormData();
    // delFD.append('')
    delFD.append("deleteCourse", code);
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
      closeHandler("diagDelete");
      getCourse();
      alert("Item deleted successfully");
    } else {
      alert("Item not Deleted" + resData.reason);
    }
  };
  const diagDelete = (code) => {
    const diag = document.getElementById("diagDelete");
    const diagBody = document.getElementById("diagDeleteBody");
    setToBeDeleted(code);
    diag.showModal();
  };
  return (
    <Container className="comp-body-container border">
      <h3>View Course</h3>
      <dialog id="diagEdit">
        <div className="diag-header">
          <div className="diag-title">Edit Course</div>
          <span
            role="button"
            onClick={() => closeHandler("diagEdit")}
            className="diag-close"
          >
            X
          </span>
        </div>
        <div className="diag-body">{toBeEdittedFiller()}</div>
      </dialog>
      <dialog id="diagDelete">
        <div className="diag-header ">
          <div className="diag-title">Delete Course</div>
          <span
            role="button"
            onClick={() => closeHandler("diagDelete")}
            className="diag-close"
          >
            X
          </span>
        </div>
        <div className="diag-body" id="diagDeleteBody">
          <h4>Are you sure you want to delete this Course</h4>
          {deleteFiller()}
        </div>
      </dialog>
      <div className="flex search-box">
        <h4>Search By</h4>
        <select
          name="SearchBy"
          id="SearchBy"
          onChange={(e) => setSearchBy(e.target.value)}
        >
          <option value="C_Code">Course Code</option>
          <option value="C_Name" selected>
            Course Name
          </option>
          {/* <option value="C_">Department</option> */}
        </select>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          name="search-contact"
          id="search"
          placeholder="Search"
        />
        <button onClick={(e) => getCourse(e)}>
          <i className="fas fa-search" />
        </button>
        <h4>
          <span className="badge bg-warning rounded-circle ms-1">{rows()}</span>
        </h4>
      </div>
      <div className="flex text-center">
        {/* {books.map((book) => {
          return (
            <div className="item border row bg-light m-1">
              <div className="col d-flex">
                <i className="fas fa-book fa-lg  col" />
                <div className="">
                  <div>
                    <section>Course Code: {book.category}</section>
                    <section>Course Tittle: {book.title}</section>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <section>Contact Hour: {book.link}</section>
                    <section>Credit Hour: {book.category}</section>
                  </div>
                </div>
                <div className="col">
                  <section>Prerequisite: {book.category}</section>
                  <section>Description: {book.category}</section>
                </div>
              </div>
              <div className="col download">
                <Button>Edit</Button>
                <Button variant="danger">Delete</Button>
              </div>
            </div>
          );
        })} */}
        {courseFiller()}
      </div>
    </Container>
  );
}