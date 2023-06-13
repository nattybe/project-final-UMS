import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { baseUrl } from "../../globalConst";

function CreateSection() {
  const [program, setProgram] = useState();
  const [deps, setDeps] = useState();
  const [selectedDepartment, setSelectedDepartment] = useState();
  const [selectedProgram, setSelectedProgram] = useState();
  const [year, setYear] = useState(new Date().getFullYear());
  const [res, setRes] = useState({ status: "not yet" });
  const getDep = async () => {
    // console.log("getDep started");
    let dep = await fetch(baseUrl + "RegisterUser.php?depReq=true", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    dep = await dep.json();
    setDeps(dep);
    if (typeof deps !== "undefined") {
      // console.log("from deps.status " + deps.status);
      // console.log("from deps " + deps);
    } else {
      // console.warn('undefiend: '+deps);
      // console.log("undefiend: " + deps);
    }
  };
  useEffect(() => {
    getDep();
  }, []);

  const depFiller = () => {
    let depOptions = [];
    if (typeof deps !== "undefined") {
      // console.log("from deps.status " + deps.status);
      // console.log("from deps " + deps);
      deps.data.map((depers, index) => {
        // alert(depers.D_Name)
        depOptions.push(<option value={depers.D_id}>{depers.D_Name}</option>);
        return (
          <option value={depers.D_id} key={index}>
            {depers.D_Name}
          </option>
        );
      });
    } else {
      return (
        <>
          <option value="">Computer Science</option>
          <option value="">Marketing Management</option>
          <option value="">Accounting</option>
        </>
      );
    }
    return depOptions;
  };
  const programFiller = () => {
    let depOptions = [<option value="">Select Program</option>];
    if (typeof program !== "undefined") {
      // console.log("from deps.status " + deps.status);
      // console.log("from deps " + deps);
      program.data.map((depers, index) => {
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
      setProgram(dep);
      if (typeof program !== "undefined") {
        // console.log("from prog.status " + program.status);
        // console.log(program);
        // alert('program Getted')
      } else {
        // console.warn('undefiend: '+deps); // console.log("undefiend: " + program);
      }
    }
  };
  useEffect(() => {
    // if(setSelectedDepartment){
    //   // alert(selectedDepartment)
    // }
    getProgram();
  }, [selectedDepartment]);
  const submitHandler = async (e) => {
    e.preventDefault();
    // alert("hello");
    const fd = new FormData();
    fd.append("CreateSection", true);
    fd.append("name", document.getElementById("name").value);
    fd.append("year", document.getElementById("year").value);
    fd.append("dg_id", document.getElementById("prog").value);
    let depa = await fetch(baseUrl + "CreateSection.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
      },
      body: fd,
    });
    // console.log(dep.json());
    let dep = await depa.json();
    //   console.warn(dep);
    setRes(dep);
    if (res.status === 200) {
      console.warn(dep);
    } else {
      console.warn(res.status);
    }
  };
  
  useEffect(() => {
    if(res.status ==="success"){
      alert("Section Created Successfully");
      setRes({ status: "not yet" })
    }
  },[res]);
  return (
    <div className="comp-body-container">
      <h3>Create Section</h3>
      <div className="create-section d-flex justify-content-center">
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <div className="form-control mt-2 row">
            <label htmlFor="">Department</label>
            <select
              name=""
              id="dep"
              required
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="">Select department</option>
              {depFiller()}
            </select>
          </div>
          <div className="form-control mt-2 row">
            <label htmlFor="">Section Program:</label>
            <select name="" id="prog" required>
              {programFiller()}
            </select>
          </div>
          <div className="form-control mt-2 row">
            <label htmlFor="">Section Year:</label>
            <input
              type="number"
              required
              name=""
              id="year"
              defaultValue={new Date().getFullYear()}
            />
          </div>

          <div className="form-control mt-2 row">
            <label htmlFor="">Section Name:</label>
            <input type="text" required name="" id="name" />
          </div>
          <div className="buttons">
            <Button type="submit">Create</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateSection;
