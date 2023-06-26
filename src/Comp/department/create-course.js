import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { baseUrl } from "../../globalConst";

function ProgramCreateCourse() {
  const [cCode, setCCode] = useState();
  const [cTitle, setCTitle] = useState();
  const [cCont, setCCont] = useState();
  const [cCred, setCCred] = useState();
  const [cPre, setCPre] = useState("null");
  const [cDep, setCDep] = useState(1);
  const [cDes, setCDes] = useState();
  const [resp, setResp] = useState();
  const [deps, setDeps] = useState();
  const [courses, setCourses] = useState();

  const createfd = () => {
    const fD = new FormData();
    fD.append("code", cCode);
    fD.append("title", cTitle);
    fD.append("des", cDes);
    fD.append("pre", cPre);
    fD.append("dep", cDep);
    fD.append("credit", cCred);
    fD.append("contact", cCont);
    return fD;
  };
  const getDep = async () => {
    console.log("getDep started");
    const food = new FormData();
    food.append("depReq", " true");
    // if (autho === "department") {
    let dep = await fetch(baseUrl + "CreateCourse.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: food,
    });
    dep = await dep.json();
    setDeps(dep);
    if (typeof deps !== "undefined") {
      console.log("from deps.status " + deps.status);
      // console.log("from deps " + deps);
      // depFiller();
    } else {
      // console.warn('undefiend: '+deps);
      console.log("undefiend: " + deps);
    }
    // } else {
    //   console.log("no autho: " + autho);
    // }
  };
  const getCourses = async () => {
    const fod = new FormData();
    fod.append("getCourses", "hi");
    let cour = await fetch(baseUrl + "/CreateCourse.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: fod,
    });
    // cour = cour.json();
    setCourses(await cour.json());
    console.log(cour);
    // console.log(courses.status);
  };
  const handleResponse = () => {
    if (resp) {
      if (resp.status === "failed") {
        if (resp.reason == 23000) {

          alert("this Course Code is already Registered");
        }
        // console.log("Error");
      }else if(resp.status === "success"){
        alert('Course Created Successfully');
      }
    }
  };
  useEffect(() => {
    // console.log("from effect");
    // getDep();
    // console.log("getCourses started");
    getCourses();
    // console.log("getCourses ended");
  }, []);
  useEffect(() => {
    handleResponse();
  }, [resp]);
  const submitHandler = async (e) => {
    e.preventDefault();
    // getDep();
    // getCourses();
    const formData = createfd();
    let res = await fetch(baseUrl + "CreateCourse.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });
    res = await res.json();
    console.log(res);
    setResp(res);
    console.log(res.status);
    // handleResponse();
  };
  const courseFiller = () => {
    let coursetobe = [];
    if (typeof courses !== "undefined") {
      if (courses.status === "success") {
        courses.data.map((course, index) => {
          coursetobe.push(
            <option key={index} value={course.C_Code}>
              {course.C_Name + " (" + course.C_Code + ")"}
            </option>
          );
          // return <option value={course.C_Code}>{course.C_Name}</option>;
        });
        // console.log("from course filler: " + courses.status);
        return coursetobe;
      }
    }
  };
  return (
    <Container className="border comp-body-container d-flex flex-column p-3 align-items-center">
      <h3>Create Course</h3>
      <form action="" className="" onSubmit={(e) => submitHandler(e)}>
        <div className="col d-flex mt-4">
          <div className="PCC-itmes">
            <section id="course-label">Course Code:</section>
            <input
              type="text"
              onChange={(e) => setCCode(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="PCC-itmes ms-3">
            <section>Course Prerequisite:</section>
            <select
              name=""
              id=""
              onChange={(e) => setCPre(e.target.value)}
              required
              className="form-select"
            >
              <option value="Null">none</option>
              {courseFiller()}
              {/* <option value="">MGMT 123</option> */}
            </select>
          </div>
          {/* <div className="PCC-itmes ms-3">
            <section>Department:</section>
            <select name="" id="" className="form-control">
              <option value="">Marketing Managment</option>
            </select>
          </div> */}
        </div>
        <div className="col d-flex  mt-4">
          <div className="PCC-itmes">
            <section>Course Title:</section>
            <input
              type="text"
              onChange={(e) => setCTitle(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="PCC-itmes  ms-3">
            <section>Credit Hour:</section>
            <input
              type="number"
              onChange={(e) => setCCred(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="PCC-itmes   ms-3">
            <section>Contact Hour:</section>
            <input
              type="number"
              onChange={(e) => setCCont(e.target.value)}
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
            onChange={(e) => setCDes(e.target.value)}
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
    </Container>
  );
}

export default ProgramCreateCourse;
