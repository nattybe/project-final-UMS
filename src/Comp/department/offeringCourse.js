import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { baseUrl } from "../../globalConst";

export default function OfferingCourse() {
  const books = [
    { title: "IP by me", category: "3", link: "programming" },
    { title: "DB by me", category: "2", link: "DB" },
    { title: "CS by me", category: "1", link: "CSS" },
    { title: "BY by me", category: "3", link: "UH" },
  ];
  const [deps, setDeps] = useState('empty');
  const [courses, setCourses] = useState();
  const [addedCourse, setAddedCourse] = useState([]);
  const [state,setState]=useState();
  const [resp,setResp] = useState();
  const closeHandler = (id) => {
    const diag = document.getElementById(id);
    diag.close();
  };
  const addShowHandler = (e) => {
    const diag = document.getElementById("diagAdd");
    // diag.close();
    diag.showModal();
  };
  const createHandler = async(e) =>{
    e.preventDefault();
    let obj={
      length:addedCourse.length,
      Courses:addedCourse
    }
    console.info(obj);
    
    const formData = new FormData();
    formData.append('course',JSON.stringify(addedCourse));
    // formData.append('course',);
    let res = await fetch(baseUrl + "OfferingCourse.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });
    let ress = await res.json();
    console.warn('here comes the response');
    setResp(ress);
    console.log(resp);
    console.log(res.status);
    //this bad boy sends the courses as an array
    //next send the courses and the OC information
  }
  const depFiller = () => {
    let deptobe = [];
    if (typeof deps !== "undefined") {
      if (deps.status === "success") {
        deps.data.map((course, index) => {
          deptobe.push(
            <option key={index} value={course.D_id}>
              {course.D_Name}
            </option>
          );
          // return <option value={course.C_Code}>{course.C_Name}</option>;
        });
        // console.log("from course filler: " + courses.status);
        return deptobe;
      }
    }
  };
  const addCourse=(course)=>{
    if(addCourse.length > 0){
      setAddedCourse([...addedCourse, course]);
    }else{
      addedCourse.push(course);
    }
  }
  const removeById = (code) => {
    setAddedCourse(addedCourse.filter(item => item.C_Code !== code));
  };
  
  const addedCourseFiller=()=>{
    let toBeRendCourses=[];
    if(addedCourse.length > 0){
      addedCourse.map(course=>{
        toBeRendCourses.push(<tr>
          <th scope="row">{course.C_Code}</th>
          <td>{course.C_Name}</td>
          <td>{course.C_Credit_hour+'/'+course.C_Contact_hour}</td>
          <td>{course.C_Prerequisites}</td>
          <td>
            <Button variant="danger" onClick={()=>removeById(course.C_Code)}>remove</Button>
          </td>
        </tr>

        )
      })
      return <Table class="table" bordered striped>
      <thead>
        <tr>
          <th scope="col">Code</th>
          <th scope="col">Name</th>
          <th scope="col">Cr.hr/Co.hr</th>
          <th scope="col">Prerequisite</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
      {toBeRendCourses}
      </tbody>
    </Table>
    }else{
      return(<h3>Choose some Course</h3>)
    }
  }
  const courseTableFiller = () => {
    if (typeof courses !== "undefined") {
      let cour = [];
      courses.data.map((course) => {
        cour.push(
          <tr>
            <th scope="row">{course.C_Code}</th>
            <td>{course.C_Name}</td>
            <td>{course.C_Credit_hour+'/'+course.C_Contact_hour}</td>
            <td>{course.C_Prerequisites}</td>
            <td>
              <Button variant="success" onClick={()=>addCourse(course)}>Add</Button>
            </td>
          </tr>
        );
      });
      return cour
    }
  };
  const getDep = async () => {
    // console.log("getDep started");
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
    // dep = await dep.json();
    // console.log(dep);
    setDeps(await dep.json());
    if (typeof deps !== "undefined") {
      // console.log("from deps.status " + deps.status);
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

  useEffect(() => {
    getDep();
  }, []);
  const getCourses = async (e) => {
    let deper = e;
    // alert(deper);
    const fod = new FormData();
    fod.append("getCourses", deper);
    let cour = await fetch(baseUrl + "/OfferingCourse.php", {
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

  const addFiller = (id) => {
    return (
      <div className="m-2">
        <div className="">
          <div className="flex  m-5">
            <div>
              <section>filter by department</section>
              <select
                name=""
                id=""
                onChange={(e) => getCourses(e.target.value)}
              >
                <option value="empty">All</option>
                {depFiller()}
              </select>
            </div>
          </div>
          <Table class="table" bordered striped>
            <thead>
              <tr>
                <th scope="col">Code</th>
                <th scope="col">Name</th>
                <th scope="col">Cr.hr/Co.hr</th>
                <th scope="col">Prerequisite</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {courseTableFiller()}
            </tbody>
          </Table>
        </div>
      </div>
    );
  };
  return (
    <div className="comp-body-container">
      <h1 className="text-center">Offering Course</h1>
      <dialog id="diagAdd" className="diag-parax">
        <div className="diag-header">
          <div className="diag-title">Add Course</div>
          <span
            role="button"
            onClick={() => closeHandler("diagAdd")}
            className="diag-close"
          >
            X 
          </span>
        </div>
        <div className="diag-body">{addFiller()}</div>
      </dialog>
      <div className="oc-body">
        <form action="">
          <div className="d-flex mt-3 ps-3 pe-3">
            <div className=" d-flex flex-column ">
              <label htmlFor="Department">Program</label>
              <select
                className="department-create-offer-course"
                id="Department"
              >
                <option value="Computer Science">Computer Science</option>
              </select>
            </div>
            <div className=" d-flex flex-column">
              <label htmlFor="year">Year</label>
              <input className="oc-input  w-50" id="year"  type="number" />
            </div>
            <div className=" d-flex flex-column">
              <label htmlFor="semester">semester</label>
              <input
                className="oc-input  w-25"
                id="semester"
                max={3}
                type="number"
                required
              />
            </div>
            <div className="col d-flex flex-column align-items-end">
              <label className="me-4" htmlFor="CoHr">
                Total Cr/Co hr
              </label>
              <input className="oc-input" id="CoHr" type="number" disabled />
            </div>
          </div>
          <div className="m-5 mt-1 pt-3 align-items-center d-flex flex-column">
            <div className="p-4 align-items-center d-flex flex-column border">
              {addedCourseFiller()}
              {/* {
                books.map((book) => {
                return (
                  <div className="item border row bg-light m-1">
                    <div className="col d-flex">
                      <i className="fas fa-book fa-lg  col" />
                      <div className="col">
                        <div>
                          Course Tittle:
                          <section>{book.title}</section>
                        </div>
                      </div>
                      <div className="col">
                        <div>
                          Credit Hour:
                          <section>{book.category}</section>
                        </div>
                      </div>
                      <div className="col">
                        Contact Hour:
                        <section>{book.link}</section>
                      </div>
                    </div>
                    <div className="col download">
                      <Button variant="danger">Remove</Button>
                    </div>
                  </div>
                );
              })} */}
              <div className="row m-2">
                <Button onClick={(e) => addShowHandler(e)}>Add Course</Button>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-around mt-5">
              <Button variant="danger">Cancel</Button>
              <div />
              <div />
              <Button variant="success" onClick={(e)=>createHandler(e)}>Create</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
