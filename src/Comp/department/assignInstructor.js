import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../globalConst";

function AssignInstructor() {
  const [logger, setLogger] = useState(
    JSON.parse(window.sessionStorage.getItem("logger"))
  );
  const [batchYear, setBatchYear] = useState({ status: "not Yet" });
  const [sections, setSections] = useState([]);
  const [originalSection, setOriginalSection] = useState();
  const [programs, setPrograms] = useState();
  const [courses, setCourses] = useState();
  const [instructors, setinstructors] = useState();
  const [res, setRes] = useState({ status: "not yet" });

  const [selectedProgram, setSelectedProgram] = useState();
  const [selectedBatchYear, setSelectedBatchYear] = useState();
  const [selectedSection, setSelectedSection] = useState();
  const [selectedCourse, setSelectedCourse] = useState();
  const [selectedInstr, setSelectedInstr] = useState();

  const getInst = async () => {
    // let resa;
    const fd = new FormData();
    fd.append("getInstructor", true);
    // console.warn("getSections started " + stdProgram);
    let dep = await fetch(baseUrl + "AssignInstructor.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: fd,
    });
    // console.warn(dep.json());
    // console.log(dep.formData());
    dep = await dep.json();
    setinstructors(dep.data);
    // setOriginalSection(dep.data);
    // if (typeof resa !== "undefined") {
    //   console.log("from resa.status " + sections.status);
    //   console.log("from resa " + sections);
    // } else {
    //   // console.warn('undefiend: '+deps);
    //   // console.log(sections);
    // }
  };
  const instFiller = () => {
    let depOptions = [<option>Select Instructor</option>];
    if (typeof instructors !== "undefined") {
      instructors.map((depers) => {
        // alert(depers.D_Name);
        depOptions.push(
          <option value={depers.id}>{depers.fname + " " + depers.lname}</option>
        );
        // return <option value={depers.D_id}>{depers.D_Name}</option>;
      });

      // console.log("from deps " + deps);
      return depOptions;
    } else {
      return (
        <>
          <option value="">SomeOne</option>
          <option value="">SomeTwo</option>
          <option value="">SomeThree</option>
        </>
      );
    }
  };

  const programFiller = () => {
    let depOptions = [<option value="">Select Program</option>];
    if (typeof programs !== "undefined") {
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
    } else {
      return (
        <>
          <option value="">Computer Science Degree(Extension)</option>
          <option value="">Marketing Management(Regular)</option>
          <option value="">Accounting(Extension)</option>
        </>
      );
    }
    return depOptions;
  };
  const getProgram = async () => {
    if (typeof logger.DM_Id !== "undefined") {
      console.log("getProgram started");
      const fd = new FormData();
      fd.append("getProgram", logger.DM_Id);
      let dep = await fetch(baseUrl + "RegisterStudent.php", {
        method: "POST",
        headers: {
          // Accept: "application/json",
        },
        body: fd,
      });
      // console.log(dep.json());
      dep = await dep.json();
      setPrograms(dep);
      if (typeof program !== "undefined") {
        // console.log("from prog.status " + program.status);
        // console.log(program);
        // alert('program Getted')
      } else {
        // console.warn('undefiend: '+deps); // console.log("undefiend: " + program);
      }
    }
  };
  const filterSection = (e) => {
    setSections(
      originalSection.filter((item) => item.Se_Year === e.target.value)
    );
  };
  const getSections = async () => {
    // let resa;
    const fd = new FormData();
    fd.append("getSection", selectedProgram);
    // console.warn("getSections started " + stdProgram);
    let dep = await fetch(baseUrl + "RegisterStudent.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: fd,
    });
    // console.warn(dep.json());
    // console.log(dep.formData());
    dep = await dep.json();
    setSections(dep.data);
    setOriginalSection(dep.data);
    if (typeof resa !== "undefined") {
      console.log("from resa.status " + sections.status);
      console.log("from resa " + sections);
    } else {
      // console.warn('undefiend: '+deps);
      // console.log(sections);
    }
  };
  const sectionsFiller = () => {
    let depOptions = [<option>Select Section</option>];
    if (typeof sections !== "undefined") {
      // console.log(sections.data[0]);

      // console.warn('sections');
      sections.map((depers) => {
        // alert(depers.D_Name);
        depOptions.push(<option value={depers.Se_Id}>{depers.Se_Name}</option>);
        // return <option value={depers.D_id}>{depers.D_Name}</option>;
      });

      // console.log("from deps " + deps);
      return depOptions;
    } else {
      return (
        <>
          <option value="">N1</option>
          <option value="">N2</option>
          <option value="">N3</option>
        </>
      );
    }
  };
  const getBatchYear = async () => {
    if (typeof logger.DM_Id !== "undefined") {
      // console.log("getProgram started");
      const fd = new FormData();
      fd.append("getBatchYear", selectedProgram);
      let dep = await fetch(baseUrl + "OfferingCourse.php", {
        method: "POST",
        headers: {
          // Accept: "application/json",
        },
        body: fd,
      });
      // console.log(dep.json());
      dep = await dep.json();
      setBatchYear(dep);
      if (typeof batchYear !== "undefined") {
        // console.log("from prog.status " + program.status);
        // console.log(program);
        // alert('program Getted')
      } else {
        // console.warn('undefiend: '+deps); // console.log("undefiend: " + program);
      }
    }
  };
  const getCourses = async () => {
    if (
      typeof selectedProgram !== "undefined" &&
      typeof selectedBatchYear !== "undefined"
    ) {
      // console.log("getProgram started");
      const fd = new FormData();
      fd.append("getCourses", selectedBatchYear);
      fd.append("progId", selectedProgram);
      let dep = await fetch(baseUrl + "AssignInstructor.php", {
        method: "POST",
        headers: {
          // Accept: "application/json",
        },
        body: fd,
      });
      // console.log(dep.json());
      dep = await dep.json();
      setCourses(dep);
      if (typeof batchYear !== "undefined") {
        // console.log("from prog.status " + program.status);
        // console.log(program);
        // alert('program Getted')
      } else {
        // console.warn('undefiend: '+deps); // console.log("undefiend: " + program);
      }
    }
  };
  const courseFiller = () => {
    let depOptions = [<option>Select Course</option>];
    if (typeof courses !== "undefined") {
      // console.log(sections.data[0]);

      // console.warn('sections');
      courses.data.map((depers) => {
        // alert(depers.D_Name);
        depOptions.push(<option value={depers.C_Code}>{depers.C_Name}</option>);
        // return <option value={depers.D_id}>{depers.D_Name}</option>;
      });

      // console.log("from deps " + deps);
      return depOptions;
    } else {
      return (
        <>
          {/* <option value="">N1</option>
          <option value="">N2</option>
          <option value="">N3</option> */}
        </>
      );
    }
  };
  useEffect(() => {
    getCourses();
  }, [selectedBatchYear, selectedProgram]);
  useEffect(() => {
    getBatchYear();
    getSections();
  }, [selectedProgram]);
  useEffect(() => {
    getProgram();
    getInst();
  }, [logger]);
  const batchYearFiller = () => {
    let tempbatc = [<option>Select Batch Year</option>];
    if (batchYear.status === "success") {
      batchYear.data.map((batchYear, index) => {
        tempbatc.push(
          <option value={batchYear.Se_Year} key={index}>
            {batchYear.Se_Year}
          </option>
        );
      });
    }
    return tempbatc;
  };
  const assignHandler = async (e) => {
    e.preventDefault();
    if (
      typeof selectedSection !== "undefined" &&
      typeof selectedInstr !== "undefined" &&
      typeof selectedCourse !== "undefined"
    ) {
      // console.log("getProgram started");
      const fd = new FormData();
      fd.append("SelectedSection", selectedSection);
      fd.append("SelectedCourse", selectedCourse);
      fd.append("SelectedInstructor", selectedInstr);
      fd.append("Assign", true);
      let dep = await fetch(baseUrl + "AssignInstructor.php", {
        method: "POST",
        headers: {
          // Accept: "application/json",
        },
        body: fd,
      });
      dep = await dep.json();
      setRes(dep);
    } else {
      alert("Empty Fields!!!");
    }
  };
  useEffect(() => {
    if (res.status === "success") {
      alert("Success");
    }
  }, [res]);
  return (
    <div className="comp-body-container border d-flex flex-column align-items-center assign-instructor">
      <h3>Assign Instructor</h3>
      <form action="" onSubmit={(e) => assignHandler(e)}>
        <div className="filter d-flex flex-row">
          <div className="filterer me-3 d-flex flex-column">
            <label htmlFor="">filter section by Program</label>
            <select
              name=""
              id=""
              className=""
              onChange={(e) => setSelectedProgram(e.target.value)}
            >
              {programFiller()}
              {/* <option value=""></option>
            <option value="">Computer Science</option>
            <option value="">Marketing Management</option>
            <option value="">Mechanical Engineering</option> */}
            </select>
          </div>
          <div className="filter-by d-flex flex-column">
            <label htmlFor="">filter section by Batch year</label>
            <select
              name=""
              id=""
              className=""
              onChange={(e) => {
                setSelectedBatchYear(e.target.value);
                filterSection(e);
              }}
            >
              {batchYearFiller()}
              {/* <option value="">2012</option>
            <option value="">2013</option>
            <option value="">2014</option>
            <option value="">2015</option>
            <option value="">2016</option> */}
            </select>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="as-sections mt-5 col">
            <label htmlFor="Department">Choose Sections</label>
            <select
              className="oc-input"
              id="Department"
              onChange={(e) => setSelectedSection(e.target.value)}
            >
              {/* <option value="">CCS1R1N6/12</option> */}
              {sectionsFiller()}
            </select>
          </div>
          <div className="as-course mt-5">
            <label htmlFor="Department mt-5">Choose Course</label>
            <select
              className="oc-input"
              id="Department"
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              {/* <option value="id"></option> */}
              {courseFiller()}
            </select>
          </div>
          <div className="as-instructor mt-5">
            <label htmlFor="Department">Choose Instructor</label>
            <select
              className="oc-input"
              id="Department"
              onChange={(e) => setSelectedInstr(e.target.value)}
            >
              {instFiller()}
              {/* <option value="Computer Science">Computer Science</option> */}
            </select>
          </div>
          <div className="buttons d-flex">
            <Button variant="danger" type="reset">
              Cancel
            </Button>
            <Button variant="success" type="submit">
              Assign
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AssignInstructor;
