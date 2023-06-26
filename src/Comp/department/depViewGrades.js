import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { baseUrl } from "../../globalConst";

function ViewGrades() {
  const [loggerInfo, setLoggerInfo] = useState();
  const [sections, setSections] = useState({ status: "not yet" });
  const [programs, setPrograms] = useState({ status: "not yet" });
  const [courses, setCourses] = useState({ status: "not yet" });
  const [grades, setGrades] = useState({ status: "not yet" });
  const [res, setRes] = useState({ status: "not yet" });
  const [resForEdit, setResForEdit] = useState({ status: "not yet" });

  const [gradeShow, setgradeShow] = useState(true);

  const [selectedProgram, setSelectedProgram] = useState();
  const [selectedSections, setSelectedSections] = useState();
  const [selectedCourse, setSelectedCourse] = useState();
  const [editedGrades, setEditedGrades] = useState([]);

  const gradeCalculator=(grade)=>{
    // let ltrGrd='';
    
    if (grade < 40) {
       return 'F';
    } else if (grade < 50) {
      return 'D';
    } if (grade < 65) {
      return 'C';
    } if (grade < 80) {
      return 'B';
    } if (grade < 100) {
      return 'A';
    }else{
      return "Over 100";
    }
  }
  const getLogger = () => {
    let logger = JSON.parse(window.sessionStorage.getItem("logger"));
    // console.log("logger => GetLogger " + (loggerInfo)?loggerInfo.id:null);
    setLoggerInfo(logger);
  };
  const setaddGradeshow = () => {
    if (gradeShow) {
      setgradeShow(false);
    } else {
      setgradeShow(true);
    }
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
            <td>
              <input
                type="number"
                // onChange={(e) => addgrade(std.id, std, e.target.value)}
                max={100}
                min={0}
                required
                disabled
                defaultValue={grade.G_Percentile_Grade}
                Name="grade-input"
                id={grade.G_Id}
              />
            </td>
            {/* <td>grade.G_Percentile_Grade</td> */}
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
  const saveGrade=()=>{
    const gradedStuds=[];
    grades.data.map((grades) => {
      gradedStuds.push({
        gdId:grades.G_Id,
        grade: document.getElementById(grades.G_Id).value,
        letterGrade: gradeCalculator(document.getElementById(grades.G_Id).value)
      });
    });
    console.warn({ Editedgrad: gradedStuds});
    sendGrade(gradedStuds)
  }
  const sendGrade = async (gradedStuds) => {
    if (grades.data.length === gradedStuds.length) {
      const formdata = new FormData();
      formdata.append("SaveEditedGrade", JSON.stringify(gradedStuds));
      let dep = await fetch(baseUrl + "grade.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formdata,
      });
      dep = await dep.json();
      setResForEdit(dep);
      // console.warn(dep);
      // setSections(dep);
    }else{
      // alert("not equal")
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
  // useEffect(() => {
  //   getGrade();
  // }, [selectedCourse]);
  useEffect(() => {
    if (res.status === "success") {
      alert(res.data + " students grade approved");
    } else if (res.status === "failed") {
      alert(" 2 grades are edited are you sure you want to save them?");
    }
  }, [res]);
  useEffect(()=>{
    if(resForEdit.status==="success"){
      if(resForEdit.data<1){
        alert("No Changes Detected")
      }else{
        alert(resForEdit.data+" Grades have been edited")
      }
      // setResForEdit({stutes:"Edited"})
    }
  },[resForEdit])
  useEffect(() => {
    if (gradeShow) {
      document
        .getElementsByName("grade-input")
        .forEach((element) => element.setAttribute("disabled", "disabled"));
      document.getElementById("SaveGrade").setAttribute("disabled", "disabled");
    } else {
      document
        .getElementsByName("grade-input")
        .forEach((element) => (element.style.display = "block"));
      document
        .getElementsByName("grade-input")
        .forEach((element) => element.removeAttribute("disabled"));
      document.getElementById("SaveGrade").removeAttribute("disabled");
    }
  }, [gradeShow]);
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
          <div className="m-1">
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
          <div className="h-75 mt-3">
            <Button
              className="h-75  me-2"
              variant="success"
              onClick={() => getGrade()}
            >
              Get grade
            </Button>
            <Button
              className="h-75"
              variant="success"
              onClick={() => approveGrade()}
            >
              Approve
            </Button>
            <Button
              className="h-75 ms-2"
              variant="warning"
              onClick={() => setaddGradeshow()}
            >
              Edit
            </Button>
          </div>
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
          <tfoot className="">
            <tr>
            <td></td>
            <td></td>
              <td colSpan={3}>
                <Button
                  className=" ms-2"
                  id="SaveGrade"
                  variant="success"
                  onClick={() => saveGrade()}
                >
                  Save
                </Button>
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>
    </div>
  );
}

export default ViewGrades;
