import React, { Component, useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { baseUrl } from "../../globalConst";

export default function StudentList() {
  const [gradeShow, setgradeShow] = useState(true);

  const [loggerInfo, setLoggerInfo] = useState();
  const [sections, setSections] = useState({ status: "not yet" });

  const [gettedStudents, setGettedStudents] = useState({ status: "not yet" });
  const [studentsList, setStudentsList] = useState([]);
  const [gradedStuds, setGradedStuds] = useState([]);
  const [res, setRes] = useState({ status: "not yet" });
  const [selectedSections, setSelectedSections] = useState();

  const getLogger = () => {
    let logger = JSON.parse(window.sessionStorage.getItem("logger"));
    // console.log("logger => GetLogger " + (loggerInfo)?loggerInfo.id:null);
    setLoggerInfo(logger);
  };
  //  const [addGradeshow,setaddGradeshow]=useState();
  const setaddGradeshow = () => {
    if (gradeShow) {
      setgradeShow(false);
    } else {
      setgradeShow(true);
    }
  };
  const getSection = async () => {
    if (typeof loggerInfo !== "undefined") {
      const formdata = new FormData();
      formdata.append("getSections", loggerInfo.id);
      let dep = await fetch(baseUrl + "grade.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formdata,
      });
      dep = await dep.json();
      setSections(dep);
      // if (typeof conts !== "undefined") {
      //   // console.warn(conts);
      //   // console.log("from deps " + deps);
      // } else {
      //   // console.warn('undefiend: '+deps);
      //   // console.log("undefiend: " + deps);
      // }
    }
  };

  const sectionFiller = () => {
    if (sections.status === "success") {
      const cour = [<option>...</option>];
      sections.data.map((course) => {
        cour.push(
          <option value={course.Se_Id}>
            {course.Se_Name + "(" + course.Se_Year + ")"}
          </option>
        );
      });
      return cour;
    }
  };
  const getStudents = async () => {
    if (
      typeof loggerInfo !== "undefined" &&
      typeof selectedSections !== "undefined"
    ) {
      const formdata = new FormData();
      formdata.append("getStudents", loggerInfo.id);
      formdata.append("section", selectedSections);
      let dep = await fetch(baseUrl + "grade.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formdata,
      });
      dep = await dep.json();
      setGettedStudents(dep);
      console.warn(gettedStudents);
      // if (typeof conts !== "undefined") {
      //   // console.warn(conts);
      //   // console.log("from deps " + deps);
      // } else {
      //   // console.warn('undefiend: '+deps);
      //   // console.log("undefiend: " + deps);
      // }
    }
  };
  const studFiller = () => {
    if (studentsList.length > 0) {
      const cour = [<option>...</option>];
      studentsList.map((std) => {
        cour.push(
          <tr>
            <td>{std.id}</td>
            <td>{std.fname + " " + std.lname}</td>
            <td>
              <input
                type="number"
                // onChange={(e) => addgrade(std.id, std, e.target.value)}
                max={100}
                min={0}
                required
                disabled
                Name="grade-input"
                id={std.id}
              />
            </td>
          </tr>
        );
      });
      return cour;
    }
  };

  const submitGrade = (e) => {
    e.preventDefault();
    setGradedStuds([]);
    studentsList.map((studs) => {
      gradedStuds.push({
        ...studs,
        grade: document.getElementById(studs.id).value,
      });
    });
    // console.warn(gradedStuds);
    sendGrade();
  };
  const sendGrade = async () => {
    if (studentsList.length === gradedStuds.length) {
      const formdata = new FormData();
      formdata.append("SaveGrade", JSON.stringify(gradedStuds));
      let dep = await fetch(baseUrl + "grade.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formdata,
      });
      dep = await dep.json();
      setRes(dep);
      // console.warn(dep);
      // setSections(dep);
    }
  };
  useEffect(() => {
    getStudents();
  }, [selectedSections]);
  useEffect(() => {
    if (gettedStudents.status === "success") {
      setStudentsList(gettedStudents.data);
    }
  }, [gettedStudents]);
  useEffect(() => {
    if (gradeShow) {
      document
        .getElementsByName("grade-input")
        .forEach((element) => (element.style.display = "none"));
      document
        .getElementById("submitGrade")
        .setAttribute("disabled", "disabled");
    } else {
      document
        .getElementsByName("grade-input")
        .forEach((element) => (element.style.display = "block"));
      document
        .getElementsByName("grade-input")
        .forEach((element) => element.removeAttribute("disabled"));
      document.getElementById("submitGrade").removeAttribute("disabled");
    }
  }, [gradeShow]);
  useEffect(() => {
    if (loggerInfo) {
      getSection();
      // console.log(loggerInfo);
    } else {
      getLogger();
    }
  }, [loggerInfo]);
  useEffect(() => {
    getStudents();
  }, []);
  useEffect(() => {
    if (res.status === "success") {
      alert("Grade Submitted");
    }
  }, [res]);
  return (
    <Container className="border comp-body-container">
      <h3>Student List</h3>
      <div className="section-choose">
        <div className="m-1">
          <section>choose section</section>
          <select
            name="choose-section"
            onChange={(e) => {
              setSelectedSections(e.target.value);
            }}
            id="choose-section"
          >
            {sectionFiller()}
          </select>
        </div>
        <Button onClick={() => setaddGradeshow()} className="mt-3 mb-1">
          Add Grade
        </Button>
        <Button className="mt-3 mb-1">Print section student list</Button>
      </div>
      <form onSubmit={(e) => submitGrade(e)}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Grade %</th>
            </tr>
          </thead>
          <tbody>{studFiller()}</tbody>
          <tfoot>
            <Button id="submitGrade" type="submit">
              Submit
            </Button>
          </tfoot>
        </Table>
      </form>
    </Container>
  );
}
