import { getValue } from "@testing-library/user-event/dist/utils";
import React, { Component, useEffect, useState } from "react";
import { Button, Container, Dropdown, Table } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import EditUser from "./editUser";
import { baseUrl } from "../../globalConst";

function ViewStudent() {
  const [student, setStudent] = useState();
  const [search, setSearch] = useState("");
  const [by, setBy] = useState("fname");

  const [toBeEdited, setToBeEdited] = useState();
  const EditStudent = (props) => {
    const user = toBeEdited;
    const [stdFName, setStdFName] = useState();
    const [stdLName, setStdLName] = useState();
    const [stdMName, setStdMName] = useState();
    const [stdPhoto, setPhoto] = useState();

    const [stdEmail, setStdEmail] = useState();
    const [stdEmail2, setStdEmail2] = useState();
    const [stdPhone, setStdPhone] = useState();
    const [stdPhone2, setStdPhone2] = useState();

    const [stdAge, setStdAge] = useState();
    const [stdSex, setStdSex] = useState();
    const [stdNationality, setStdNationality] = useState();

    const [stdCountry, setStdCountry] = useState();
    const [stdSubCity, setStdSubCity] = useState();
    const [stdCity, setStdCity] = useState();
    const [stdWoreda, setStdWoreda] = useState();
    const [stdHouseNo, setStdHouseNo] = useState();

    const [stdEmergencyFName, setStdEMergencyFName] = useState();
    const [stdEmergencyLName, setStdEMergencyLName] = useState();
    const [stdEmergencyMName, setStdEMergencyMName] = useState();
    const [stdEmergencyPhone, setStdEMergencyPhone] = useState();
    const [stdEmergencyPhone2, setStdEMergencyPhone2] = useState();
    const [stdEmergencyCountry, setStdEMergencyCountry] = useState();
    const [stdEmergencySubCity, setStdEMergencySubCity] = useState();
    const [stdEmergencyCity, setStdEMergencyCity] = useState();
    const [stdEmergencyWoreda, setStdEMergencyWoreda] = useState();
    const [stdEmergencyHouseNo, setStdEMergencyHouseNo] = useState();

    const submithandler = (e) => {
      e.preventDefault();
      // alert("Submitted " + stdPhoto + " " + stdSex);
    };
    //   useEffect(() => {
    //     if () {
    //       document.querySelectorAll("select").forEach((sel) => {
    //         sel.setAttribute("disabled", true);
    //       });
    //       document.querySelectorAll("input").forEach((sel) => {
    //         sel.setAttribute("disabled", true);
    //       });
    //       document.getElementsByName("pass").forEach((sel) => {
    //         sel.removeAttribute("disabled");
    //       });
    //     } else {
    //       document.querySelectorAll("input").forEach((sel) => {
    //         sel.removeAttribute("disabled");
    //       });
    //       document.querySelectorAll("select").forEach((sel) => {
    //         sel.removeAttribute("disabled");
    //       });
    //       document.querySelector("select").removeAttribute("disabled");
    //     }
    //   });
    if (typeof toBeEdited !== "undefined") {
      let userad = {
        CGPA: 4,
        Department: "1",
        HNO: "31",
        Nationality: "ecthiopia",
        age: 24,
        bloodtype: "AB",
        city: "addiss ababa",
        degree_degree_awarded: null,
        degree_nameof_institute: null,
        degree_year: null,
        disabilities: null,
        email: "ser@gmail.com",
        emergency_contact_HNO: "21",
        emergency_contact_city: "addiss ababa",
        emergency_contact_firstname: "belihu",
        emergency_contact_fmiddlename: "yilma",
        emergency_contact_lastname: "zewelde",
        emergency_contact_phone_no1: "1234567",
        emergency_contact_phone_no2: "12345678",
        emergency_contact_subcity: "gulele",
        emergency_contact_woreda: 21,
        fname: "natty",
        grade_10_score: null,
        grade_10_year: null,
        grade_12_score: null,
        grade_12_year: null,
        highschool_name: null,
        id: 1,
        lname: "belihu",
        martialStatus: "single",
        mname: "",
        password: "password",
        phone_no1: "12345678",
        phone_no2: "123456789",
        photo: "photo_1_2023-04-26_12-32-41.jpg",
        preparatoryschool_name: null,
        section: 1,
        sex: "M",
        subcity: "gulele",
        tvet_level: null,
        tvet_nameofcollege: null,
        tvet_program: null,
        tvet_year: null,
        woreda: 12,
      };
      return (
        <div className="border">
          {/* <h3>Edit User</h3> */}
          {/* <button onClick={() => {}}>clo</button> */}
          <div className="">
            <form action="">
              <div className="d-flex">
                <img src={baseUrl + "student-photo/" + user.photo} alt="" />
                <div className="names">
                  <div className="student-name ms-3 border p-2">
                    <div className="first-name">
                      <section>First Name </section>
                      <input
                        id="firstNames"
                        type="text"
                        name="first"
                        defaultValue={user.fname}
                        // value={stdFName}
                        // id="first"
                        placeholder="First Name"
                        onChange={(e) => {
                          setStdFName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="middle-name">
                      <section>Middle Name</section>
                      <input
                        type="text"
                        name="middle"
                        id="middle"
                        defaultValue={user.mname}
                        placeholder="Middle Name"
                        onChange={(e) => {
                          setStdMName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="Last-name">
                      <section>Last Name</section>
                      <input
                        value={stdLName}
                        defaultValue={user.lname}
                        type="text"
                        name="last"
                        id="last"
                        placeholder="Last Name"
                        onChange={(e) => {
                          setStdLName(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="identity ms-3 mt-2 border p-2">
                    <div className="std-sex">
                      <section>Sex</section>
                      <select
                        name="sex"
                        id="sex"
                        onChange={(e) => {
                          setStdSex(e.target.value);
                        }}
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="age">
                      <section>Age</section>
                      <input
                        type="number"
                        placeholder="69"
                        defaultValue={user.age}
                        name="age"
                        id="age"
                        onChange={(e) => {
                          setStdAge(e.target.value);
                        }}
                      />
                    </div>
                    <div className="first-name">
                      <section>Nationality</section>
                      <input
                        type="text"
                        placeholder="Nice"
                        defaultValue={user.Nationality}
                        name="nationality"
                        id="nationality"
                        onChange={(e) => {
                          setStdNationality(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="address border ms-3 p-2">
                  <div className="first-name">
                    <section>Country</section>
                    <input
                      type="text"
                      name="Country"
                      defaultValue={user.Nationality}
                      id="Country"
                      placeholder="Country"
                      onChange={(e) => {
                        setStdCountry(e.target.value);
                      }}
                    />
                  </div>
                  <div className="first-name">
                    <section>City</section>
                    <input
                      defaultValue={user.city}
                      type="text"
                      name="first"
                      id="first"
                      placeholder="city"
                      onChange={(e) => {
                        setStdCity(e.target.value);
                      }}
                    />
                  </div>
                  <div className="first-name">
                    <section>SubCity</section>
                    <input
                      type="text"
                      defaultValue={user.subcity}
                      name="first"
                      id="first"
                      placeholder="Subcity"
                      onChange={(e) => {
                        setStdSubCity(e.target.value);
                      }}
                    />
                  </div>
                  <div className="first-name">
                    <section>Woreda</section>
                    <input
                      type="number"
                      name="first"
                      id="first"
                      defaultValue={user.woreda}
                      placeholder="Woreda"
                      onChange={(e) => {
                        setStdWoreda(e.target.value);
                      }}
                    />
                  </div>
                  <div className="first-name">
                    <section>House no</section>
                    <input
                      type="text"
                      name="first"
                      defaultValue={user.HNO}
                      id="first"
                      placeholder="H.no"
                      onChange={(e) => {
                        setStdHouseNo(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="contact ms-3 p-2 border">
                  <div className="phone-no">
                    <section>Phone No</section>
                    <input
                      type="tel"
                      name="phone"
                      defaultValue={user.phone_no1}
                      id="first"
                      placeholder="0987654321"
                      onChange={(e) => {
                        setStdPhone(e.target.value);
                      }}
                    />
                  </div>
                  <div className="phone-no">
                    <section>Phone No 2</section>
                    <input
                      type="text"
                      name="phone"
                      id="first"
                      defaultValue={user.phone_no2}
                      placeholder="0987654322"
                      onChange={(e) => {
                        setStdPhone2(e.target.value);
                      }}
                    />
                  </div>
                  <div className="email">
                    <section>Email</section>
                    <input
                      type="email"
                      defaultValue={user.email}
                      name="email"
                      id="first"
                      placeholder="example@unity.com"
                      onChange={(e) => {
                        setStdEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="email">
                    <section>Email 2</section>
                    <input
                      type="email"
                      name="email"
                      id="first"
                      placeholder="example@unity.com"
                      onChange={(e) => {
                        setStdEmail2(e.target.value);
                      }}
                    />
                  </div>
                  <div className="email">
                    <section>Password</section>
                    <input
                      type="email"
                      name="email"
                      defaultValue={user.password}
                      id="first"
                      placeholder="**********"
                      onChange={(e) => {
                        setStdEmail2(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="emergency border">
                <section className="h5">Emergency Contact</section>
                <div className="con">
                  <div className="emergency-name border ms-3 mt-2 d-flex">
                    <div className="first-name">
                      <section>First Name</section>
                      <input
                        type="text"
                        name="first"
                        id="first"
                        defaultValue={user.fname}
                        placeholder="First Name"
                        onChange={(e) => {
                          setStdEMergencyFName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="middle-name">
                      <section>Middle Name</section>
                      <input
                        type="text"
                        name="middle"
                        id="middle"
                        defaultValue={user.emergency_contact_fmiddlename}
                        placeholder="Middle Name"
                        onChange={(e) => {
                          setStdEMergencyMName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="Last-name">
                      <section>Last Name</section>
                      <input
                        type="text"
                        name="last"
                        defaultValue={user.emergency_contact_lastname}
                        id="last"
                        placeholder="Last Name"
                        onChange={(e) => {
                          setStdEMergencyLName(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="emergency-address  border ms-3 mt-2 d-flex">
                    <div className="first-name">
                      <section>Country</section>
                      <input
                        type="text"
                        name="first"
                        id="first"
                        placeholder="Country"
                        // defaultValue={user.emeNa}
                        onChange={(e) => {
                          setStdEMergencyCountry(e.target.value);
                        }}
                      />
                    </div>
                    <div className="first-name">
                      <section>City</section>
                      <input
                        type="text"
                        defaultValue={user.emergency_contact_city}
                        name="first"
                        id="first"
                        placeholder="City"
                        onChange={(e) => {
                          setStdEMergencyCity(e.target.value);
                        }}
                      />
                    </div>
                    <div className="first-name">
                      <section>SubCity</section>
                      <input
                        type="text"
                        defaultValue={user.emergency_contact_subcity}
                        name="first"
                        id="first"
                        placeholder="Subcity"
                        onChange={(e) => {
                          setStdEMergencySubCity(e.target.value);
                        }}
                      />
                    </div>
                    <div className="d-flex">
                      <div className="first-name">
                        <section>Woreda</section>
                        <input
                        defaultValue={user.emergency_contact_woreda}
                          type="number"
                          name="first"
                          id="first"
                          placeholder="Country"
                          onChange={(e) => {
                            setStdEMergencyWoreda(e.target.value);
                          }}
                        />
                      </div>
                      <div className="first-name">
                        <section>House no</section>
                        <input
                          type="text"
                        defaultValue={user.emergency_contact_HNO}
                          name="first"
                          id="first"
                          placeholder="H.no"
                          onChange={(e) => {
                            setStdEMergencyHouseNo(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="emergency-contact  border ms-3 mt-2 d-flex">
                    <div className="phone-no">
                      <section>Phone No</section>
                      <input
                        defaultValue={user.emergency_contact_phone_no1}
                        type="text"
                        name="phone"
                        id="first"
                        placeholder="0987654323"
                        onChange={(e) => {
                          setStdEMergencyPhone(e.target.value);
                        }}
                      />
                    </div>
                    <div className="phone-no">
                      <section>Phone No 2</section>
                      <input
                        type="text"
                        defaultValue={user.emergency_contact_phone_no2}
                        name="phone"
                        id="first"
                        placeholder="0987654324"
                        onChange={(e) => {
                          setStdEMergencyPhone2(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="buttons">
                    <Button variant="danger" type="reset" onReset={()=>closeHandler("")}>
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      onClick={submithandler}
                      type="Submit"
                    >
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
  };

  const [students, setStudents] = useState([
    {
      id: "UU79706R",
      Name: "Natnael belihu yilma",
      Age: 25,
      Sex: "male",
      address: "Addiss ababa ethiopia",
      Department: "Computer Science",
    },
    {
      id: "UU79706R",
      Name: "Natnael belihu yilma",
      Age: 25,
      Sex: "male",
      address: "Addiss ababa ethiopia",
      Department: "Computer Science",
    },
    {
      id: "UU79706R",
      Name: "Natnael belihu yilma",
      Age: 25,
      Sex: "male",
      address: "Addiss ababa ethiopia",
      Department: "Computer Science",
    },
    {
      id: "UU79706R",
      Name: "Natnael belihu yilma",
      Age: 25,
      Sex: "male",
      address: "Addiss ababa ethiopia",
      Department: "Computer Science",
    },
  ]);
  const std = [
    {
      id: "UU79706R",
      Name: "Natty belihu yilma",
      Age: 25,
      Sex: "male",
      address: "Addiss ababa ethiopia",
      Department: "Computer Science",
    },
  ];
  useEffect(() => {
    getStudents();
  }, [search]);
  const getStudents = async () => {
    const searchFD = new FormData();
    // if (search && SearchBy) {
    //   console.log(search, " ", SearchBy);
    //   searchFD.append("search", search);
    //   searchFD.append("By", SearchBy);
    // }

    searchFD.append("getStudent", true);
    searchFD.append("search", search);
    searchFD.append("by", by);
    let fetchData = await fetch(baseUrl + "getStudent.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
      },
      body: searchFD,
    });
    console.warn(
      document.getElementById("StudentSearch").value +
        " " +
        document.getElementById("StudentBy").value
    );
    // console.log(fetchData.json());
    fetchData = await fetchData.json();
    setStudent(fetchData);
    if (typeof student !== "undefined") {
      console.warn(fetchData);
      // console.warn("ReaData: " + student.status + " rows: " + student.rows);
    }
  };
  const EditGrade = () => {
    return (
      <div className="comp-body-container">
        {/* <Table bordered striped>
          <thead>
            <tr>
              <th>Student Name</th>

              <td>Some One</td>
            </tr>
            <tr>
              <th>CGPA</th>
              <td>3.4</td>
            </tr>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Grade (100%)</th>
              <th>Letter Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CC012</td>
              <td>Internet Programing</td>
              <td>
                <input type="number" name="" id="" value={87} />
              </td>
              <td>A</td>
            </tr>
            <tr>
              <td>CC012</td>
              <td>Internet Programing</td>
              <td>
                <input type="number" name="" id="" value={87} />
              </td>
              <td>A</td>
            </tr>
            <tr>
              <td>CC012</td>
              <td>Internet Programing</td>
              <td>
                <input type="number" name="" id="" value={87} />
              </td>
              <td>A</td>
            </tr>
            <tr>
              <td>CC012</td>
              <td>Internet Programing</td>
              <td>
                <input type="number" name="" id="" value={87} />
              </td>
              <td>A</td>
            </tr>
            <tr>
              <td>CC012</td>
              <td>Internet Programing</td>
              <td>
                <input type="number" name="" id="" value={87} />
              </td>
              <td>A</td>
            </tr>
            <tr>
              <td>CC012</td>
              <td>Internet Programing</td>
              <td>
                <input type="number" name="" id="" value={87} />
              </td>
              <td>A</td>
            </tr>
            <tr>
              <td>CC012</td>
              <td>Internet Programing</td>
              <td>
                <input type="number" name="" id="" value={87} />
              </td>
              <td>A</td>
            </tr>
            <tr>
              <td>CC012</td>
              <td>Internet Programing</td>
              <td>
                <input type="number" name="" id="" value={87} />
              </td>
              <td>A</td>
            </tr>
          </tbody>
        </Table> */}
        <div className="buttons">
          <Button variant="danger">Cancel</Button>
          <Button variant="success">Save</Button>
        </div>
      </div>
    );
  };
  // const DeleteStd=()=>{

  // }
  const editStd = (student) => {
    const diag = document.getElementById("EditDiag");
    diag.close();
    diag.showModal();
    setToBeEdited(student);
    // document.getElementById("studentEditor").setAttribute('hu','hello');
    // stdEditor.setAttribute('user', student)
    // stdEditor.setAttribute('hu','hello');
  };
  const editStdGrade = () => {
    const diag = document.getElementById("EditStdGradeDiag");
    diag.close();
    diag.showModal();
  };
  const delteStd = () => {
    const diag = document.getElementById("DeleteStdDiag");
    diag.close();
    diag.showModal();
  };
  const closeHandler = (diagId) => {
    const diag = document.getElementById(diagId);
    diag.close();
  };
  const viewBoxFiller = () => {
    let views = [];
    if (typeof student !== "undefined") {
      if (student.status === "success") {
        student.data.map((student) => {
          views.push(
            <div className="item student-item border shadow bg-light m-1 mt-4">
              <div className="text-center">
                <img
                  className="border"
                  src={baseUrl + "student-photo/" + student.photo}
                  style={{ height: "150px" }}
                  alt={student.photo}
                />
                <section>ID: {student.id}</section>
              </div>
              <div className="mt-3">
                <p>Name: {student.fname + " " + student.lname}</p>
                <p>
                  Age: {student.age}&nbsp;&nbsp;&nbsp; Sex: {student.sex}
                </p>
                <p>Address: {student.address}</p>
                <p>Department: {student.department}</p>
              </div>
              <div className="mt-3 ms-2">
                <p>CGPA: {student.CGPA}</p>
                <p>Year: 3</p>
                <p>Courses Taken: 27</p>
              </div>
              <div></div>
              <div className="p-2">
                <div className="m-1">
                  <Button
                    className="m-2"
                    onClick={() => editStd(student)}
                    variant="warning"
                  >
                    Edit
                  </Button>
                  <Button className="m-2" onClick={() => editStdGrade()}>
                    Edit Grade
                  </Button>
                </div>
                <div className="m-1">
                  <Button
                    className="m-2"
                    variant="danger"
                    onClick={() => {
                      delteStd();
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    className="m-2 bg-success"
                    onClick={() => {
                      setStudents(std);
                    }}
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          );
        });
      } else {
        views = [<h1 className="text-center muted">Such Emptiness!!!</h1>];
      }
      return views;
    } else {
      students.map((student) => {
        return (
          <div className="item student-item border shadow bg-light m-1 mt-4">
            <div className="text-center">
              <dialog id="EditDiag" className="diag-parax">
                <div className="diag-header">
                  <div className="diag-title">Edit Student</div>
                  <span
                    role="button"
                    onClick={() => closeHandler("EditDiag")}
                    className="diag-close"
                  >
                    X
                  </span>
                </div>
                <div className="diag-body">
                  <EditUser user={std} />
                </div>
              </dialog>
              <dialog id="EditStdGradeDiag" className="diag-parax">
                <div className="diag-header">
                  <div className="diag-title">Edit Student Grade</div>
                  <span
                    role="button"
                    onClick={() => closeHandler("EditStdGradeDiag")}
                    className="diag-close"
                  >
                    X
                  </span>
                </div>
                <div className="diag-body">
                  <EditGrade />
                </div>
              </dialog>
              <dialog id="DeleteStdDiag" className="diag-parax">
                <div className="diag-header">
                  <div className="diag-title">Delete Student</div>
                  <span
                    role="button"
                    onClick={() => closeHandler("DeleteStdDiag")}
                    className="diag-close"
                  >
                    X
                  </span>
                </div>
                <div className="diag-body">
                  <section>
                    Are you sure you want to delete this student?
                  </section>
                  <section>Id:</section>
                  <section>Name:</section>
                  <section>Section:</section>
                  <section>Department:</section>
                </div>
                <div className="buttons">
                  <Button>Cancel</Button>
                  <Button variant="danger">Delete</Button>
                </div>
              </dialog>
              <img src="avatar.jpg" sizes="10px" alt="" />
              <section>ID: {student.id}</section>
            </div>
            <div className="mt-3">
              <p>Name: {student.Name}</p>
              <p>
                Age: {student.Age}&nbsp;&nbsp;&nbsp; Sex: {student.Sex}
              </p>
              <p>Address: {student.address}</p>
              <p>Department: {student.Department}</p>
            </div>
            <div className="mt-3 ms-2">
              <p>CGPA: 2.3</p>
              <p>Year: 3</p>
              <p>Courses Taken: 27</p>
            </div>
            <div></div>
            <div className="p-2">
              <div className="m-1">
                <Button
                  className="m-2"
                  onClick={() => editStd()}
                  variant="warning"
                >
                  Edit
                </Button>
                <Button className="m-2" onClick={() => editStdGrade()}>
                  Edit Grade
                </Button>
              </div>
              <div className="m-1">
                <Button
                  className="m-2"
                  variant="danger"
                  onClick={() => {
                    delteStd();
                  }}
                >
                  Delete
                </Button>
                <Button
                  className="m-2 bg-success"
                  onClick={() => {
                    setStudents(std);
                  }}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  return (
    <Container className="border comp-body-container">
      <h3>Students</h3>
      <div className="flex search-box">
        <h4>Search By</h4>
        <select
          name="SearchBy"
          id="StudentBy"
          onChange={(e) => setBy(e.target.value)}
        >
          <option value="fname">Name</option>
          <option value="id">ID</option>
          {/* <option value="section">Section</option> */}
          {/* <option value="department">Department</option> */}
        </select>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          name="searchStudent"
          id="StudentSearch"
          placeholder="Search Student"
        ></input>
        <button
          onClick={() => {
            getStudents();
            // alert("Searched");
          }}
        >
          <i className="fas fa-search" />
        </button>
      </div>
      <div className="view-box">{viewBoxFiller()}</div>
      <div className="item student-item border shadow bg-light m-1 mt-4">
        <div className="text-center">
          <dialog id="EditDiag" className="diag-parax">
            <div className="diag-header">
              <div className="diag-title">Edit Student</div>
              <span
                role="button"
                onClick={() => closeHandler("EditDiag")}
                className="diag-close"
              >
                X
              </span>
            </div>
            <div className="diag-body">
              <EditStudent id="studentEditor" user={student} />
            </div>
          </dialog>
          <dialog id="EditStdGradeDiag" className="diag-parax">
            <div className="diag-header">
              <div className="diag-title">Edit Student Grade</div>
              <span
                role="button"
                onClick={() => closeHandler("EditStdGradeDiag")}
                className="diag-close"
              >
                X
              </span>
            </div>
            <div className="diag-body">
              <EditGrade />
            </div>
          </dialog>
          <dialog id="DeleteStdDiag" className="diag-parax">
            <div className="diag-header">
              <div className="diag-title">Delete Student</div>
              <span
                role="button"
                onClick={() => closeHandler("DeleteStdDiag")}
                className="diag-close"
              >
                X
              </span>
            </div>
            <div className="diag-body">
              <section>Are you sure you want to delete this student?</section>
              <section>Id:</section>
              <section>Name:</section>
              <section>Section:</section>
              <section>Department:</section>
            </div>
            <div className="buttons">
              <Button>Cancel</Button>
              <Button variant="danger">Delete</Button>
            </div>
          </dialog>
        </div>
      </div>
    </Container>
  );
}

export default ViewStudent;
