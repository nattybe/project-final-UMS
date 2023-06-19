import React, { Component, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { baseUrl } from "../../globalConst";
export default function StudentCurrentCourse() {
  const [courses, setCourses] = useState({ status: "not yet" });
  const [loggerInfo, setLoggerInfo] = useState();
  // const courses = [
  //   { Code: "CSCI101", Title: "Introduction to Computer Science", Department: "Computer Science", Status: "Learning" },
  //   // { Code: "CSCI501", Title: "ENGL101", Department: "MGMT", Status: "____" },
  //   { Code: "ENGL101", Title: "English Communication Skills I", Department: "Common Course", Status: "Learning" },
  //   { Code: "CSCI201", Title: "Data Structures and Algorithms", Department: "Computer Science", Status: "Learning" },
  //   { Code: "CSCI504", Title: "Web Technologies ", Department: "Computer Science", Status: "Learning" },
  //   // { Code: "CS4312", Title: "DB", Department: "MGMT", Status: "____" },
  // ];
 
  const getLogger = () => {
    let logger = JSON.parse(window.sessionStorage.getItem("logger"));
    // console.log("logger => GetLogger " + (loggerInfo)?loggerInfo.id:null);
    setLoggerInfo(logger);
  };
  const getCourse = async () => {
    if (typeof loggerInfo !== "undefined") {
      const formdata = new FormData();
      formdata.append("getCurrentCourse", loggerInfo.id);
      let dep = await fetch(baseUrl + "getCurrentCourse.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formdata,
      });
      dep = await dep.json();
      setCourses(dep);
      if (typeof conts !== "undefined") {
        // console.warn(conts);
        // console.log("from deps " + deps);
      } else {
        // console.warn('undefiend: '+deps);
        // console.log("undefiend: " + deps);
      }
    }
  };
  const courseFiller = () => {
    if (courses.status === "success") {
      const cour = [];
      courses.data.map((course) => {
        cour.push(
          <div className="item border row bg-light m-1">
            <div className="col d-flex">
              <i className="fas fa-book fa-lg  col" />
              <div className="col">
                <div>Code: {course.C_Code}</div>
                <div>Title: {course.C_Name}</div>
              </div>
              <div className="col">
                <div>Department: {course.D_Name}</div>
                {/* <div>Status: Lear</div> */}
              </div>
            </div>
          </div>
        );
      });
      return cour;
    }
  };

  useEffect(() => {
    if (loggerInfo) {
      getCourse();
      // console.log(loggerInfo);
    } else {
      getLogger();
    }
  }, [loggerInfo]);
  return (
    <Container className="border comp-body-container">
      <h3>Current Courses</h3>
      {courseFiller()}
      <div className="flex "></div>
    </Container>
  );
}
