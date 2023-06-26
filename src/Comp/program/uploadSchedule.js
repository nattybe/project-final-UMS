import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { baseUrl } from "../../globalConst";
// import {  } from "";
function UploadSchedule() {
  const fakeschedule = [
    { section: "N1(2020)", course: "CSCI101", empty: true },
    { section: "N1(2020)", course: "CSCI101", empty: true },
    { section: "N1(2020)", course: "CSCI101", empty: false },
    { section: "N1(2020)", course: "CSCI403", empty: false },
    { section: "N1(2020)", course: "CSCI501", empty: true },
    { section: "N1(2020)", course: "CSCI202", empty: true },
    { section: "N1(2020)", course: "CSCI101", empty: true },
    { section: "N1(2020)", course: "CSCI101", empty: true },
    { section: "N1(2020)", course: "CSCI202", empty: false },
    { section: "N1(2020)", course: "CSCI202", empty: true },
  ];
  const fakeschedule2 = [
    { section: "N4(2016)", course: "CSCI201", empty: true },
    { section: "N4(2016)", course: "CSCI201", empty: true },
    { section: "N2(2017)", course: "CSCI101", empty: false },
    { section: "N7(2020)", course: "CSCI403", empty: true },
    { section: "N9(2021)", course: "CSCI501", empty: true },
    { section: "N1(2021)", course: "CSCI202", empty: false },
    { section: "N4(2020)", course: "CSCI101", empty: true },
    { section: "N4(2020)", course: "CSCI101", empty: true },
    { section: "N3(2020)", course: "CSCI202", empty: true },
    { section: "N3(2020)", course: "CSCI202", empty: true },
  ];
  const fakeschedule3 = [
    { section: "N4(2016)", course: "CSCI201", empty: true },
    { section: "N4(2016)", course: "CSCI201", empty: true },
    { section: "N2(2017)", course: "CSCI101", empty: true },
    { section: "N7(2020)", course: "CSCI403", empty: true },
    { section: "N9(2021)", course: "CSCI501", empty: true },
    { section: "N1(2021)", course: "CSCI202", empty: true },
    { section: "N4(2020)", course: "CSCI101", empty: true },
    { section: "N4(2020)", course: "CSCI101", empty: true },
    { section: "N3(2020)", course: "CSCI202", empty: true },
    { section: "N3(2020)", course: "CSCI202", empty: true },
  ];
  // const fakeRoom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [batchYear, setBatchYear] = useState({ status: "not Yet" });
  const [sections, setSections] = useState({ status: "not yet" });
  // const [originalSection, setOriginalSection] = useState();
  const [programs, setPrograms] = useState({ status: "not yet" });
  const [courses, setCourses] = useState({ status: "not yet" });
  const [department, setDepartment] = useState({ status: "not yet" });
  const [time, setTime] = useState({ status: "not yet" });
  const [room, setRoom] = useState({ status: "not yet" });
  const [schedule, setSchedule] = useState();
  const [res, setRes] = useState({ status: "not yet" });
  const [resDel, setResDel] = useState({status: "not yet" });

  const [selectedProgram, setSelectedProgram] = useState();
  const [selectedDepartment, setSelectedDepartment] = useState();
  const [selectedBatchYear, setSelectedBatchYear] = useState();
  const [selectedSection, setSelectedSection] = useState();
  const [selectedCourse, setSelectedCourse] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedRoom, setSelectedRoom] = useState();
  const [selectedDate, setSelectedDate] = useState("MON");

  // const [selectedInstr, setSelectedInstr] = useState();
  const getSchedule = async () => {
    if (typeof selectedDate !== "undefined") {
      const formdata = new FormData();
      formdata.append("getScheduleByWeekDate", selectedDate);
      let dep = await fetch(baseUrl + "CreateSchedule.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formdata,
      });
      dep = await dep.json();
      setSchedule(dep);
      // console.warn(dep);
    }
  };

  const departmentFiller = () => {
    let depOptions = [<option value="">Select Department</option>];
    if (department.status === "success") {
      // console.log("from deps.status " + deps.status);
      // console.log("from deps " + deps);
      department.data.map((depers, index) => {
        // alert(depers.D_Name)
        depOptions.push(
          <option value={depers.D_id} key={index}>
            {depers.D_Name}
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
  const getDepartment = async () => {
    // if (typeof logger.DM_Id !== "undefined") {
    console.log("getDepartment started");
    const fd = new FormData();
    fd.append("depReq", true);
    let dep = await fetch(baseUrl + "RegisterStudent.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
      },
      body: fd,
    });
    // console.log(dep.json());
    dep = await dep.json();
    setDepartment(dep);
    if (typeof department !== "undefined") {
      // console.log("from prog.status " + program.status);
      // console.log(program);
      // alert('program Getted')
    } else {
      // console.warn('undefiend: '+deps); // console.log("undefiend: " + program);
      // }
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
    if (typeof selectedDepartment !== "undefined") {
      console.log("getProgram started");
      const fd = new FormData();
      fd.append("getProgram", selectedDepartment);
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

  const getBatchYear = async () => {
    if (typeof selectedProgram !== "undefined") {
      // console.log("getProgram started");
      const fd = new FormData();
      fd.append("getBatchYear", selectedProgram);
      let dep = await fetch(baseUrl + "CreateSchedule.php", {
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
  const batchYearFiller = () => {
    let tempbatc = [<option>Select Batch Year</option>];
    if (batchYear.status === "success") {
      batchYear.data.map((batchYear, index) => {
        tempbatc.push(
          <option value={batchYear.OC_Section_Year} key={index}>
            {batchYear.OC_Section_Year}
          </option>
        );
      });
    }
    return tempbatc;
  };
  const getSection = async () => {
    if (
      typeof selectedProgram !== "undefined" &&
      typeof selectedBatchYear !== "undefined"
    ) {
      console.log("getSection started");
      // alert(selectedProgram+ selectedBatchYear);
      const fd = new FormData();
      fd.append("getSections", selectedBatchYear);
      fd.append("progId", selectedProgram);
      let dep = await fetch(baseUrl + "CreateSchedule.php", {
        method: "POST",
        headers: {
          // Accept: "application/json",
        },
        body: fd,
      });
      // console.log(dep.json());
      dep = await dep.json();
      // console.warn(dep);
      setSections(dep);
      // if (sections.status==='success') {
      //   console.warn(sections);
      // }
    }
  };
  const sectionFiller = () => {
    let tempbatc = [<option>Select Section</option>];
    if (sections.status === "success") {
      sections.data.map((sections, index) => {
        tempbatc.push(
          <option value={sections.Se_Id} key={index}>
            {sections.Se_Name + "(" + sections.Se_Year + ")"}
          </option>
        );
      });
    }
    return tempbatc;
  };
  const getCourse = async () => {
    if (typeof selectedSection !== "undefined") {
      console.log("getCourse started");
      // alert(selectedProgram+ selectedBatchYear);
      const fd = new FormData();
      fd.append("getCoursesBySection", selectedSection);
      let dep = await fetch(baseUrl + "CreateSchedule.php", {
        method: "POST",
        headers: {
          // Accept: "application/json",
        },
        body: fd,
      });
      // console.log(dep.json());
      dep = await dep.json();
      console.warn(dep);
      setCourses(dep);
      // if (sections.status==='success') {
      //   console.warn(sections);
      // }
    }
  };

  const courseFiller = () => {
    let tempbatc = [<option value={true}>Select Course</option>];
    if (courses.status === "success") {
      courses.data.map((courseta, index) => {
        tempbatc.push(
          <option value={courseta.Sc_ID} key={index}>
            {courseta.C_Name + "(" + courseta.C_Code + ")"}
          </option>
        );
      });
    }
    return tempbatc;
  };
  const getTimes = async () => {
    if (typeof selectedCourse !== "undefined") {
      console.log("getTime started");
      // alert(selectedProgram+ selectedBatchYear);
      const fd = new FormData();
      fd.append("getTimeBySchedule", selectedCourse);
      let dep = await fetch(baseUrl + "CreateSchedule.php", {
        method: "POST",
        headers: {
          // Accept: "application/json",
        },
        body: fd,
      });
      // console.log(dep.json());
      dep = await dep.json();
      console.warn(dep);
      setTime(dep);
      if (time.status === "success") {
        console.warn(time);
      }
    }
  };
  const timeFiller = () => {
    let tempbatc = [<option>Select Time</option>];
    if (time.status === "success") {
      time.data.map((courseta, index) => {
        tempbatc.push(
          <option value={courseta.T_Id} key={index}>
            {courseta.T_Id}
          </option>
        );
      });
    }
    // console.warn("Time Filled");
    return tempbatc;
  };
  const getRoom = async () => {
    if (typeof selectedTime !== "undefined") {
      console.log("getRoom started");
      // alert(selectedProgram+ selectedBatchYear);
      const fd = new FormData();
      fd.append("getaRoom", selectedCourse);
      let dep = await fetch(baseUrl + "CreateSchedule.php", {
        method: "POST",
        headers: {
          // Accept: "application/json",
        },
        body: fd,
      });
      // console.log(dep.json());
      dep = await dep.json();
      console.warn(dep);
      setRoom(dep);
      if (room.status === "success") {
        // console.warn(room);
      }
    }
  };
  const roomFiller = () => {
    let tempbatc = [<option>Select Room</option>];
    if (room.status === "success") {
      room.data.map((courseta, index) => {
        tempbatc.push(
          <option value={courseta.R_Number} key={index}>
            {courseta.R_Number + " " + courseta.R_Type}
          </option>
        );
      });
    }
    return tempbatc;
  };
  const removeSchedule = async (Sc_ID) => {
    const formdata = new FormData();
    formdata.append("RemoveScheduleById", Sc_ID);
    let dep = await fetch(baseUrl + "CreateSchedule.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formdata,
    });
    dep = await dep.text();
    // console.warn(dep)
    setResDel(dep);
    getSchedule();
  };
  const scheduleFiller = () => {
    if (typeof schedule !== "undefined") {
      const tempschedule = [];
      for (let [key, value] of Object.entries(schedule)) {
        const tempRow = [];
        for (let [subKey, subValue] of Object.entries(value)) {
          tempRow.push(
            <td className="bg-info schedule-items">
              <div className="info-but">
                <div className="infos">
                  <section>{subValue.C_Code}</section>
                  <section>{subValue.T_Time}</section>
                  <section>
                    {subValue.Se_Name + "(" + subValue.Se_Year + ")"}
                  </section>
                </div>
                <Button onClick={()=>removeSchedule(subValue.Sc_ID)}>Remove</Button>
              </div>
            </td>
          );
        }
        tempschedule.push(
          <tr>
            <td>{key}</td>
            {tempRow}
          </tr>
        );
      }
      return tempschedule;
    }
  };
  useEffect(() => {
    getDepartment();
  }, []);
  useEffect(() => {
    getSchedule();
  }, [selectedDate]);
  useEffect(() => {
    getProgram();
  }, [selectedDepartment]);
  useEffect(() => {
    getBatchYear();
  }, [selectedProgram]);
  useEffect(() => {
    // alert("Please select")
    getSection();
  }, [selectedProgram, selectedBatchYear]);
  useEffect(() => {
    getCourse();
  }, [selectedSection]);
  useEffect(() => {
    // alert('oh')
    getTimes();
  }, [selectedCourse]);
  useEffect(() => {
    getRoom();
  }, [selectedTime]);
  useEffect(() => {
    if(resDel.status==="success"){
      alert("Schedule Removed Success");
      setResDel({status: "not yet"});
    }
  }, [resDel])
  const assignHandler = async () => {
    if (
      typeof selectedTime !== "undefined" &&
      typeof selectedRoom !== "undefined" &&
      typeof selectedCourse !== "undefined"
    ) {
      console.log("Assign started");
      // alert(selectedProgram+ selectedBatchYear);
      const fd = new FormData();
      fd.append("AssignSchedule", selectedCourse);
      fd.append("selectedTime", selectedTime);
      fd.append("selectedRoom", selectedRoom);
      let dep = await fetch(baseUrl + "CreateSchedule.php", {
        method: "POST",
        headers: {
          // Accept: "application/json",
        },
        body: fd,
      });
      // console.log(dep.json());
      dep = await dep.json();
      console.warn(dep);
      setRes(dep);
      if (room.status === "success") {
        // console.warn(room);
        alert("Success !!!");
        getSchedule()
      }
    } else {
      alert("Empty Fields!!!");
    }
  };
  return (
    <div className="comp-body-container">
      <h3>Upload Schedule</h3>
      <div>
        <div>
          <div className="border filter-Section m-2 ps-2">
            <h5>filter Section</h5>
            <div className="d-flex">
              <div className="inp me-2">
                <section>Department</section>
                <select
                  name=""
                  className=""
                  id="USDepartment"
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  {/* <option value="">Computer Science</option> */}
                  {departmentFiller()}
                </select>
              </div>
              <div className="inp me-2">
                <section>Program</section>
                <select
                  name=""
                  id=""
                  onChange={(e) => setSelectedProgram(e.target.value)}
                >
                  {programFiller()}
                </select>
              </div>
              <div className="inp me-2">
                <section>Year</section>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setSelectedBatchYear(e.target.value);
                  }}
                >
                  {batchYearFiller()}
                </select>
              </div>
              {/* <Button className="h-75">Filter</Button> */}
            </div>
          </div>
          <div className="section-selector  form-control">
            <div className="d-flex border m-2">
              <div className="inp me-2">
                <section>Sections</section>
                <select
                  name=""
                  id=""
                  onChange={(e) => setSelectedSection(e.target.value)}
                >
                  {/* <option value="">CCS1R1N6</option> */}
                  {sectionFiller()}
                </select>
              </div>
              <div className="inp me-2">
                <section>Course</section>
                <select
                  name=""
                  id=""
                  onChange={(e) => setSelectedCourse(e.target.value)}
                >
                  {courseFiller()}
                </select>
              </div>
              <div className="inp me-2">
                <section>Time</section>
                <select
                  name=""
                  id=""
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  {/* <option value="">Mon 1,2</option> */}
                  {timeFiller()}
                </select>
              </div>
              <div className="inp me-2">
                <section>Room</section>
                <select
                  name=""
                  id=""
                  onChange={(e) => setSelectedRoom(e.target.value)}
                >
                  {roomFiller()}
                </select>
              </div>
              <Button
                className="h-75"
                onClick={() => assignHandler()}
                variant="success"
              >
                Assign
              </Button>
            </div>
          </div>
          <Table
            striped
            bordered
            responsive
            hover
            className="schedule-maker-table"
          >
            <thead>
              <tr>
                <th colSpan={3}>
                  Week Date:
                  <select
                    className="ms-1"
                    name=""
                    id=""
                    onChange={(e) => setSelectedDate(e.target.value)}
                  >
                    <option value="MON">Monday</option>
                    <option value="TUE">Tuesday</option>
                    <option value="WED">Wednesday</option>
                    <option value="THR">Thursday</option>
                    <option value="FRI">Friday</option>
                    <option value="SAT">Saturday</option>
                    <option value="SUN">Sunday</option>
                  </select>
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>
                  <section>Room</section>
                </th>
              </tr>
            </thead>
            <tbody>
              {scheduleFiller()}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default UploadSchedule;
