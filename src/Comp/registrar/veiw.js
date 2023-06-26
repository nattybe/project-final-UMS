import { getValue } from "@testing-library/user-event/dist/utils";
import React, { Component, useEffect, useState } from "react";
import { Button, Container, Dropdown, Table } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import EditUser from "./editUser";
import { baseUrl } from "../../globalConst";
import { useNavigate } from "react-router";

function ViewStudent() {
  const [student, setStudent] = useState();
  const [search, setSearch] = useState("");
  const [by, setBy] = useState("fname");
  const [studforEditGrade, setStudIdforEditGrade] = useState();
  const [toBeEdited, setToBeEdited] = useState();
  const [toBeDeleted, setToBeDeleted] = useState();

  const [stdEditedRes, setStdEditedRes] = useState({ status: "not yet" });
  const [deleteRes, setDeleteRes] = useState({ status: "not yet" });

  const nav = useNavigate();
  const contacter = (cont) => {
    nav("/messages", { state: cont });
  };
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

      const formCreator = () => {
        const fd = new FormData();
        fd.append("fname", document.getElementById("EditfirstName").value);
        fd.append("lname", document.getElementById("EditLName").value);
        fd.append("mname", document.getElementById("EditMname").value);

        fd.append("sex", document.getElementById("EditSex").value);
        fd.append("age", document.getElementById("EditAge").value);
        fd.append(
          "nationality",
          document.getElementById("EditNationality").value
        );

        fd.append("country", document.getElementById("EditCountry").value);
        fd.append("city", document.getElementById("EditCity").value);
        fd.append("subcity", document.getElementById("EditSubCity").value);
        fd.append("woreda", document.getElementById("EditWoreda").value);
        fd.append("HNo", document.getElementById("EditHNo").value);

        fd.append("phone1", document.getElementById("EditPhoneNo1").value);
        fd.append("phone2", document.getElementById("EditPhoneNo2").value);
        fd.append("email1", document.getElementById("EditEmail").value);
        fd.append("email2", document.getElementById("EditEmail2").value);

        fd.append("Efname", document.getElementById("EditEFname").value);
        fd.append("Emname", document.getElementById("EditEMName").value);
        fd.append("Elname", document.getElementById("EditELName").value);

        fd.append("Ecountry", document.getElementById("EditECountry").value);
        fd.append("Ecity", document.getElementById("EditECity").value);
        fd.append("Esubcity", document.getElementById("EditESubCity").value);
        fd.append("Eworeda", document.getElementById("EditEWoreda").value);
        fd.append("Ehno", document.getElementById("EditEHNo").value);

        fd.append("Ephone1", document.getElementById("EditEPhoneNo").value);
        fd.append("Ephone2", document.getElementById("EditEPhoneNo2").value);
        return fd;
      };
      const saveEdiited = async () => {
        const formData = formCreator();
        formData.append("SaveEditedStudent", "submitted");
        formData.append("id", toBeEdited.id);
        let dep = await fetch(baseUrl + "RegisterStudent.php", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        });
        let depa = await dep.json();
        
        setStdEditedRes(depa);
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
                        id="EditfirstName"
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
                    <div className="EditMName">
                      <section>Middle Name</section>
                      <input
                        type="text"
                        name="middle"
                        id="EditMname"
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
                        id="EditLName"
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
                        id="EditSex"
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
                        id="EditAge"
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
                        id="EditNationality"
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
                      id="EditCountry"
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
                      id="EditCity"
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
                      id="EditSubCity"
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
                      id="EditWoreda"
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
                      id="EditHNo"
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
                      id="EditPhoneNo1"
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
                      id="EditPhoneNo2"
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
                      name="EditEmail"
                      id="EditEmail"
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
                      id="EditEmail2"
                      placeholder="example@unity.com"
                      onChange={(e) => {
                        setStdEmail2(e.target.value);
                      }}
                    />
                  </div>
                  {/* <div className="email">
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
                  </div> */}
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
                        name="EditEFname"
                        id="EditEFname"
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
                        name="EditEMName"
                        id="EditEMName"
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
                        name=""
                        defaultValue={user.emergency_contact_lastname}
                        id="EditELName"
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
                        id="EditECountry"
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
                        id="EditECity"
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
                        id="EditESubCity"
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
                          id="EditEWoreda"
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
                          id="EditEHNo"
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
                        id="EditEPhoneNo"
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
                        id="EditEPhoneNo2"
                        placeholder="0987654324"
                        onChange={(e) => {
                          setStdEMergencyPhone2(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="buttons">
                    <Button
                      variant="danger"
                      type="reset"
                      onReset={() => closeHandler("")}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => saveEdiited()}
                      // type="Submit"
                    >
                      Save
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
  useEffect(() => {
    if(stdEditedRes.status==="success"){
      if(stdEditedRes.data>0){
        alert("Student Info Updated Successfully")
        closeHandler("EditDiag")
        getStudents();
        setToBeEdited();
      }else{
        alert("No Change Detected");
      }
      setStdEditedRes({status:"the aftermath"})
    }
  },[stdEditedRes]);
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
    // console.warn(
    //   document.getElementById("StudentSearch").value +
    //     " " +
    //     document.getElementById("StudentBy").value
    // );
    // console.log(fetchData.json());
    fetchData = await fetchData.json();
    setStudent(fetchData);
    if (typeof student !== "undefined") {
      // console.warn(fetchData);
      // console.warn("ReaData: " + student.status + " rows: " + student.rows);
    }
  };
  const EditGrade = () => {
    const [grades, setGrade] = useState({ status: "not yet" });
    const [edittEdGradesResult, setEdittedGradesResult] = useState({
      status: "not yet",
    });
    const [editedGrades, setEditedGrades] = useState([]);

    const getGrade = async () => {
      if (typeof studforEditGrade !== "undefined") {
        const formdata = new FormData();
        formdata.append("ViewGrades", studforEditGrade.id);
        let dep = await fetch(baseUrl + "grade.php", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formdata,
        });
        dep = await dep.json();
        setGrade(dep);
        // console.warn(dep);
        // setSections(dep);
      }
    };
    const gradeFiller = () => {
      if (grades.status === "success") {
        const tempGrades = [];
        grades.data.map((grade, i) => {
          tempGrades.push(
            <tr>
              <td>{grade.C_Code}</td>
              <td>{grade.C_Name}</td>
              <td>
                <input
                  type="number"
                  // onChange={(e) => addgrade(std.id, std, e.target.value)}
                  max={100}
                  min={0}
                  required
                  defaultValue={grade.G_Percentile_Grade}
                  // disabled
                  Name="grade-input"
                  id={grade.G_Id}
                />
              </td>
              <td>{grade.G_Letter_Grade}</td>
            </tr>
          );
        });
        return tempGrades;
      }
    };
    const updateEditedGrade = async () => {
      grades.data.map((gra) => {
        editedGrades.push({
          gdId: gra.G_Id,
          grade: document.getElementById(gra.G_Id).value,
        });
      });
      if (grades.data.length === editedGrades.length) {
        const formdata = new FormData();
        formdata.append("SaveEditedGrade", JSON.stringify(editedGrades));
        let dep = await fetch(baseUrl + "grade.php", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formdata,
        });
        dep = await dep.json();
        setEdittedGradesResult(dep);
        // console.warn(dep);
        // setSections(dep);
      }
      // console.warn(editedGrades);
    };
    useEffect(() => {
      if (edittEdGradesResult.status === "success") {
        alert(edittEdGradesResult.data + " Grades updated successfully");
        setEdittedGradesResult({ status: "not yet" });
      }
    }, [edittEdGradesResult]);
    useEffect(() => {
      getGrade();
    }, [studforEditGrade]);
    return (
      <div className="comp-body-container">
        <Table bordered striped>
          <thead>
            <tr>
              <th>Student Name</th>

              <td>
                {typeof studforEditGrade !== "undefined"
                  ? studforEditGrade.fname + " " + studforEditGrade.lname
                  : "Some One"}
              </td>
            </tr>
            <tr>
              <th>CGPA</th>
              <td>
                {typeof studforEditGrade !== "undefined"
                  ? studforEditGrade.CGPA
                  : "No Grade"}
              </td>
            </tr>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Grade (100%)</th>
              <th>Letter Grade</th>
            </tr>
          </thead>
          <tbody>{gradeFiller()}</tbody>
        </Table>
        <div className="buttons">
          <Button
            variant="danger"
            onClick={() => closeHandler("EditStdGradeDiag")}
          >
            Cancel
          </Button>
          <Button variant="success" onClick={() => updateEditedGrade()}>
            Save
          </Button>
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
  const editStdGrade = (id) => {
    setStudIdforEditGrade(id);
    const diag = document.getElementById("EditStdGradeDiag");
    diag.close();
    diag.showModal();
  };
  const delteStd = (student) => {
    const diag = document.getElementById("DeleteStdDiag");
    diag.close();
    diag.showModal();
    setToBeDeleted(student);
  };
  useEffect(() => {
    if (deleteRes.status === "success") {
      closeHandler("DeleteStdDiag");
      alert("Successfully deleted a Student");
      getStudents();
    }
  }, [deleteRes]);
  const closeHandler = (diagId) => {
    const diag = document.getElementById(diagId);
    diag.close();
  };
  const deleteFiller = () => {
    if (toBeDeleted) {
      return (
        <>
          <div className="diag-body">
            <section>Are you sure you want to delete this student?</section>
            <h5>Id: {toBeDeleted.id}</h5>
            <h5>Name: {toBeDeleted.fname + " " + toBeDeleted.lname}</h5>
            <div className="buttons">
              <Button
                onClick={() => {
                  setToBeDeleted();
                  closeHandler("DeleteStdDiag");
                }}
              >
                Cancel
              </Button>
              <Button variant="danger" onClick={(e) => deleteHandler()}>
                Delete
              </Button>
            </div>
          </div>
        </>
      );
    }
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
                  // src={"avatar.jpg"}
                  style={{ height: "150px" }}
                  alt={student.photo}
                />
                {/* <section>ID: {"-----"}</section> */}
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
                  {/* <Button className="m-2" onClick={() => editStdGrade(student)}>
                    Edit Grade
                  </Button> */}
                </div>
                <div className="m-1">
                  <Button
                    className="m-2"
                    variant="danger"
                    onClick={() => {
                      delteStd(student);
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    className="m-2 bg-success"
                    onClick={() =>
                      contacter({
                        id: student.id,
                        fname: student.fname,
                        lname: student.lname,
                        auth: "students",
                        position: "student",
                      })
                    }
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
  const deleteHandler = async () => {
    if (toBeDeleted) {
      // if (typeof loggerInfo.section==="number") {
      const formdata = new FormData();
      formdata.append("DeleteStudentById", toBeDeleted.id);
      let dep = await fetch(baseUrl + "deleteStudent.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formdata,
      });
      let depa = await dep.json();
      setDeleteRes(depa);
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
            {deleteFiller()}
          </dialog>
        </div>
      </div>
    </Container>
  );
}

export default ViewStudent;
