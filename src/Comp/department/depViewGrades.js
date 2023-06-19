import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { baseUrl } from "../../globalConst";

function ViewGrades() {
  const [loggerInfo, setLoggerInfo] = useState();
  const [sections, setSections] = useState({ status: "not yet" });
  const [programs, setPrograms] = useState({ status: "not yet" });
  const [courses, setCourses] = useState({ status: "not yet" });
  const [grades, setGrades] = useState({ status: "not yet" });
  const [res, setRes] = useState({status: "not yet" });

  const [selectedProgram, setSelectedProgram] = useState();
  const [selectedSections, setSelectedSections] = useState();
  const [selectedCourse, setSelectedCourse] = useState();
  const getLogger = () => {
    let logger = JSON.parse(window.sessionStorage.getItem("logger"));
    // console.log("logger => GetLogger " + (loggerInfo)?loggerInfo.id:null);
    setLoggerInfo(logger);
  };

  const getProgram = async () => {
    if (typeof loggerInfo.DM_Id !== "undefined") {
      console.log("getProgram started");
      const fd = new FormData();
      fd.append("getProgram", loggerInfo.DM_Id);
      let dep = await fetch(baseUrl + "RegisterStudent.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: fd,
      });
      // console.log(dep.json());
      dep = await dep.json();
      setPrograms(dep);
    }
  };
  const programFiller = () => {
    let depOptions = [<option value="">Select Program</option>];
    if (programs.status === "success") {
      // console.log("from deps.status " + deps.status);
      // console.log("from deps " + deps);
      programs.data.map((depers, index) => {
        // alert(depers.D_Name)
        depOptions.push(
          <option value={depers.DG_Id} key={index}>
            {depers.DG_field_of_study +
              " " +
              depers.DG_program +
              " (" +
              depers.DG_administration +
              ")"}
          </option>
        );
        return <option value={depers.D_id}>{depers.D_Name}</option>;
      });
    } /*else {
      return (
        <>
          <option value="">Computer Science Degree(Extension)</option>
          <option value="">Marketing Management(Regular)</option>
          <option value="">Accounting(Extension)</option>
        </>
      );
    }*/
    return depOptions;
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

  const fakeGrades = [
    {
      name: "Natnael Belihu",
      StudentId: 3112,
      Grade: 78,
    },
    {
      name: "Gelila Dangachew",
      StudentId: 5671,
      Grade: 89,
    },
    {
      name: "Fanuel Aysheshm",
      StudentId: 4351,
      Grade: 82,
    },
    {
      name: "Hawi  Tegene",
      StudentId: 43567,
      Grade: 86,
    },
    {
      name: "Kaleab Getu",
      StudentId: 5342,
      Grade: 96,
    },
  ];
  const getSection = async () => {
    if (typeof selectedProgram !== "undefined") {
      const formdata = new FormData();
      formdata.append("getSectionsByProgram", selectedProgram);
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
  const getCourses = async () => {
    if (typeof selectedSections !== "undefined") {
      const formdata = new FormData();
      formdata.append("getCoursesBySectionsFromGrade", selectedSections);
      let dep = await fetch(baseUrl + "grade.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formdata,
      });
      dep = await dep.json();
      setCourses(dep);
    }
  };
  const courseFiller = () => {
    if (courses.status === "success") {
      const cour = [<option>...</option>];
      courses.data.map((course) => {
        cour.push(<option value={course.C_Code}>{course.C_Name}</option>);
      });
      return cour;
    }
  };
  const getGrade = async () => {
    if (
      typeof selectedCourse !== "undefined" &&
      typeof selectedSections !== "undefined"
    ) {
      const formdata = new FormData();
      formdata.append("getGradesBySectionsAndCourse", selectedCourse);
      formdata.append("section", selectedSections);
      let dep = await fetch(baseUrl + "grade.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formdata,
      });
      dep = await dep.json();
      setGrades(dep);
    }
  };
  const gradeFiller = () => {
    if (grades.status === "success") {
      const tempGrades = [];
      grades.data.map((grade, i) => {
        tempGrades.push(
          <tr>
            <td>{grade.G_Student_Id}</td>
            <td>{grade.fname + " " + grade.lname}</td>
            <td>{grade.G_Percentile_Grade}</td>
            <td>{grade.G_Letter_Grade}</td>
          </tr>
        );
      });
      return tempGrades;
    }
  };
  const approveGrade = async () => {
    if (
      typeof selectedCourse !== "undefined" &&
      typeof selectedSections !== "undefined" &&
      typeof loggerInfo !== "undefined"
    ) {
      const formdata = new FormData();
      formdata.append("approveGradeBySectionsAndCourse", selectedCourse);
      formdata.append("section", selectedSections);
      formdata.append("approvedBy", loggerInfo.id);
      let dep = await fetch(baseUrl + "grade.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formdata,
      });
      dep = await dep.json();
      setRes(dep);
    }
  };
  useEffect(() => {
    if (loggerInfo) {
      getProgram();
    } else {
      getLogger();
    }
  }, [loggerInfo]);
  useEffect(() => {
    getSection();
  }, [selectedProgram]);
  useEffect(() => {
    getCourses();
  }, [selectedSections]);
  useEffect(() => {
    getGrade();
  }, [selectedCourse]);
  useEffect(()=>{
    if (res.status === 'success') {
      alert(res.data+' students grade approved');
    }else if(res.status === 'failed'){
      alert(' all the grades in thi sections are approved already');
    }
  },[res])
  return (
    <div className="comp-body-container">
      <h3>View Grades</h3>
      <div className="view-grade">
        <div className="chooser d-flex">
          <div className="m-1 me-2">
            <section>Choose Program</section>
            <select
              name="choose-section"
              onSelected={() => {
                alert("selected");
              }}
              onChange={(e) => {
                setSelectedProgram(e.target.value);
              }}
              id="choose-section"
            >
              {programFiller()}
            </select>
          </div>
          <div className="m-1 ms-1">
            <section>Choose Section</section>
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
          <div className="m-1">
            <section>Choose Course</section>
            <select
              name="choose-section"
              onChange={(e) => setSelectedCourse(e.target.value)}
              id="choose-section"
            >
              {courseFiller()}
            </select>
          </div>
          {/* <Button className="h-75">Get Grade</Button> */}
          {/* <div></div> */}
          <Button className="h-75" variant="success" onClick={()=>approveGrade()}>
            Approve
          </Button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Grade %</th>
            </tr>
          </thead>
          <tbody>{gradeFiller()}</tbody>
        </Table>
      </div>
    </div>
  );
}

export default ViewGrades;
