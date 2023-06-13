import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { baseUrl } from "../../globalConst";

function RegisterStudent() {
  const checker = (e) => {
    if (e.target.checked) {
      document.getElementById("ofcourse").style.display = "flex";
    } else {
      document.getElementById("ofcourse").style.display = "none";
    }
  };
  const tvetHandler = (e) => {
    // alert(e.target.checked)
    if (e.target.checked) {
      document.getElementById("TVETDIV").style.display = "flex";
    } else {
      document.getElementById("TVETDIV").style.display = "none";
    }
  };

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

  const [stdMartial, setStdMartial] = useState("single");
  const [stdBloodType, setStdBloodType] = useState("A");
  const [stdDiabilities, setStdDiabilities] = useState();
  const [stdhighschool_name, setStdhighschool_name] = useState();
  const [stdGrade_10_Score, setStdGrade_10_Score] = useState();
  const [stdGrade_10_Year, setStdGrade_10_Year] = useState();
  const [stdPreparatorySchoolName, setStdPreparatorySchoolName] = useState();
  const [stdGrade_12_Score, setStdGrade_12_Score] = useState();
  const [stdGrade_12_Year, setStdGrade_12_Year] = useState();
  const [stdTvetNameOfCollege, setStdTvetNameOfCollege] = useState();
  const [stdTvetProgram, setStdTvetProgram] = useState();
  const [stdtvet_year, setStdTvet_year] = useState();
  const [stdTvetLevel, setStdTvetLevel] = useState();
  const [stdDegreeNameOfInstitute, setStdDegreeNameOfInstitute] = useState();
  const [stdDegreeDegreeAwarded, setStdDegreeDegreeAwarded] = useState();
  const [stdDegreeYear, setStdDegreeYear] = useState();

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

  const [stdDepartment, setStdDepartment] = useState();
  const [stdSection, setStdSection] = useState();
  const [stdProgram, setStdProgram] = useState();

  const [sections, setSections] = useState();
  const [program, setProgram] = useState();
  const [deps, setDeps] = useState();
  const [res, setRes] = useState();

  useEffect(() => {
    getSections();
  }, [stdProgram]);
  const getSections = async () => {
    // let resa;
    const fd = new FormData();
    fd.append("getSection", stdProgram);
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
    setSections(dep);
    if (typeof resa !== "undefined") {
      console.log("from resa.status " + sections.status);
      console.log("from resa " + sections);
    } else {
      // console.warn('undefiend: '+deps);
      // console.log(sections);
    }
  };
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
  const sectionsFiller = () => {
    let depOptions = [];
    if (typeof sections !== "undefined") {
      // console.log(sections.data[0]);
      if (sections.status == "success") {
        // console.warn('sections');
        sections.data.map((depers) => {
          // alert(depers.D_Name);
          depOptions.push(
            <option value={depers.Se_Id}>
              {depers.Se_Name + "(" + depers.num_students + ")"}
            </option>
          );
          // return <option value={depers.D_id}>{depers.D_Name}</option>;
        });
      }
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
  const depFiller = () => {
    let depOptions = [];
    if (typeof deps !== "undefined") {
      // console.log("from deps.status " + deps.status);
      // console.log("from deps " + deps);
      deps.data.map((depers) => {
        // alert(depers.D_Name)
        depOptions.push(<option value={depers.D_id}>{depers.D_Name}</option>);
        return <option value={depers.D_id}>{depers.D_Name}</option>;
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
    let depOptions = [];
    if (typeof program !== "undefined") {
      // console.log("from deps.status " + deps.status);
      // console.log("from deps " + deps);
      program.data.map((depers) => {
        // alert(depers.D_Name)
        depOptions.push(
          <option value={depers.DG_Id}>
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
  useEffect(() => {
    getProgram();
  }, [stdDepartment]);
  const getProgram = async () => {
    if (typeof stdDepartment !== "undefined") {
      // console.log("getProgram started");
      const fd = new FormData();
      fd.append("getProgram", stdDepartment);
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
      } else {
        // console.warn('undefiend: '+deps); // console.log("undefiend: " + program);
      }
    }
  };
  const createFormData = () => {
    const photoFile = document.getElementById("stdphoto").files[0];
    var formdata = new FormData();
    formdata.append("regStud", "true");
    formdata.append("fname", stdFName);
    formdata.append("mname", stdMName);
    formdata.append("lname", stdLName);
    formdata.append("age", stdAge);
    formdata.append("sex", stdSex);
    formdata.append("Nationality", stdNationality);
    formdata.append("city", stdCity);
    formdata.append("subcity", stdSubCity);
    formdata.append("woreda", stdWoreda);
    formdata.append("HNO", stdHouseNo);
    formdata.append("phone_no1", stdPhone);
    formdata.append("phone_no2", stdPhone2);
    formdata.append("bloodtype", stdBloodType);
    formdata.append("martialStatus", stdMartial);
    formdata.append("disabilities", stdDiabilities);
    formdata.append("highschool_name", stdhighschool_name);
    formdata.append("grade_10_score", stdGrade_10_Score);
    formdata.append("grade_10_year", stdGrade_10_Year);
    formdata.append("preparatoryschool_name", stdPreparatorySchoolName);
    formdata.append("grade_12_score", stdGrade_12_Score);
    formdata.append("grade_12_year", stdGrade_12_Year);
    formdata.append("tvet_nameofcollege", stdTvetNameOfCollege);
    formdata.append("tvet_program", stdTvetProgram);
    formdata.append("tvet_year", stdtvet_year);
    formdata.append("tvet_level", stdTvetLevel);
    formdata.append("degree_nameof_institute", stdDegreeNameOfInstitute);
    formdata.append("degree_degree_awarded", stdDegreeDegreeAwarded);
    formdata.append("degree_year", stdDegreeYear);
    // formdata.append("password", );
    formdata.append("email", stdEmail);
    formdata.append("section", stdSection);
    // formdata.append("CGPA", );
    formdata.append("Department", stdDepartment);
    formdata.append("photo", photoFile);
    formdata.append("emergency_contact_firstname", stdEmergencyFName);
    formdata.append("emergency_contact_fmiddlename", stdEmergencyMName);
    formdata.append("emergency_contact_lastname", stdEmergencyLName);
    formdata.append("emergency_contact_city", stdEmergencyCity);
    formdata.append("emergency_contact_subcity", stdEmergencySubCity);
    formdata.append("emergency_contact_woreda", stdEmergencyWoreda);
    formdata.append("emergency_contact_HNO", stdEmergencyHouseNo);
    formdata.append("emergency_contact_phone_no1", stdEmergencyPhone);
    formdata.append("emergency_contact_phone_no2", stdEmergencyPhone2);
    return formdata;
  };
  const regHandler = async (e) => {
    e.preventDefault();
    // var myHeaders = new Headers();
    const formdata = createFormData();
    let resa = await fetch(baseUrl + "RegisterStudent.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
      },
      body: formdata,
    });
    // console.log(res.json());
    // let resa =res.json();
    setRes(await resa.json());
    if (typeof res !== "undefined") {
      console.warn(res);
      if (res.status === "success") {
        const diag = document.getElementById("regsuccess");
        diag.close();
        diag.showModal();
        // alert("Success");
      }
    }
  };
  useEffect(() => {
    getDep();
  }, []);
  const diagsuccessfiller = () => {
    if (typeof res !== "undefined") {
      if (res.status === "success") {
        return (
          <div>
            {/* <h3>Success</h3> */}
            {/* <h5>{res}</h5> */}
            <h5>ID: {res.data.ID}</h5>
            <h5>Name: {res.data.firstname + " " + res.data.lastname}</h5>
            {/* <h5>Position {res.data.position}</h5> */}
            {/* <h5>Section {}</h5> */}
            <h5>Password: {res.data.password}</h5>
          </div>
        );
      } else if (res.status === "failed") {
        return (
          <div>
            <h3>Operation failed</h3>
          </div>
        );
      }
    }
  };
  const closeHandler = (id) => {
    const diag = document.getElementById(id);
    diag.close();
  };
  return (
    <div className="border my-register-form comp-body-container p-3">
      <h3>Register Student</h3>
      <div className="reg-stud">
        <dialog id="regsuccess">
          <div className="diag-header">
            <div className="diag-title">Registeration Success</div>
            <span
              role="button"
              onClick={() => closeHandler("regsuccess")}
              className="diag-close"
            >
              X
            </span>
          </div>
          <div className="diag-body">{diagsuccessfiller()}</div>
        </dialog>
        {/* <dialog id="regsuccess">{diagsuccessfiller()}</dialog> */}
        <form
          onSubmit={(e) => regHandler(e)}
          className="form"
          validate
          id="register-student"
          // action=""
        >
          <div className="student-photo">
            <section>Select Photo</section>
            <input
              className="form-control"
              required
              // required
              type="file"
              name="stdphoto"
              id="stdphoto"
              accept="image/*"
              onChange={(e) => {
                setPhoto(e.target.value);
              }}
            />
          </div>
          <div className="student-name d-flex border mt-2">
            <div className="first-name">
              <section>First Name </section>
              <input
                className="form-control"
                required
                type="text"
                name="first"
                id="first"
                placeholder="First Name"
                onChange={(e) => {
                  setStdFName(e.target.value);
                }}
              />
              {/* <div class = "valid-feedback"> Valid data. </div><div class = "invalid-feedback"> Please fill the user name. </div>  */}
            </div>
            <div className="middle-name">
              <section>Middle Name</section>
              <input
                type="text"
                name="middle"
                className="form-control"
                required
                id="middle"
                placeholder="Middle Name"
                onChange={(e) => {
                  setStdMName(e.target.value);
                }}
              />
            </div>
            <div className="Last-name">
              <section>Last Name</section>
              <input
                type="text"
                name="last"
                required
                id="last"
                className="form-control"
                placeholder="Last Name"
                onChange={(e) => {
                  setStdLName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="identity d-flex flex-wrap  border mt-2">
            <div className="std-sex">
              <section>Sex</section>
              <select
                className="form-control"
                name="sex"
                // required
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
                className="form-control"
                type="number"
                placeholder="69"
                required
                name="age"
                id="age"
                onChange={(e) => {
                  setStdAge(e.target.value);
                }}
              />
            </div>
            <div className="blood-type">
              <section>Blood Type</section>
              <select
                name="sex"
                // required
                id="sex"
                onChange={(e) => {
                  setStdBloodType(e.target.value);
                }}
              >
                <option value="">A</option>
                <option value="">A+</option>
                <option value="">B</option>
                <option value="">B+</option>
                <option value="">AB</option>
                <option value="">O</option>
                <option value="">O+</option>
                <option value="">O-</option>
              </select>
            </div>
            <div className="nationality">
              <section>Nationality</section>
              <input
                type="text"
                placeholder="Nice"
                required
                name="nationality"
                id="nationality"
                onChange={(e) => {
                  setStdNationality(e.target.value);
                }}
              />
            </div>
            <div className="martial-status">
              <section>Martial Status</section>
              <select
                // required
                name=""
                id=""
                onChange={(e) => setStdMartial(e.target.value)}
              >
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorce">Divorce</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
            <div className="disabilities ms-5 border">
              <section>Do you have any disabilities</section>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id="aretheydisabled"
                  value={"disabled"}
                  onClick={(e) => checker(e)}
                  style={{ width: "unset" }}
                />{" "}
                yes
              </div>
              <div id="ofcourse" style={{ display: "none" }}>
                if you have any
                <input
                  type="text"
                  name=""
                  onClick={(e) => setStdDiabilities(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="address row border mt-2">
            <div className="d-flex">
              <div className="first-name">
                <section>Country</section>
                <input
                  type="text"
                  name="Country"
                  required
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
                  type="text"
                  name="first"
                  id="first"
                  placeholder="city"
                  required
                  onChange={(e) => {
                    setStdCity(e.target.value);
                  }}
                />
              </div>
              <div className="first-name">
                <section>SubCity</section>
                <input
                  required
                  type="text"
                  name="first"
                  id="first"
                  placeholder="Subcity"
                  onChange={(e) => {
                    setStdSubCity(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="d-flex">
              <div className="first-name">
                <section>Woreda</section>
                <input
                  required
                  type="number"
                  name="first"
                  id="first"
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
                  required
                  id="first"
                  placeholder="H.no"
                  onChange={(e) => {
                    setStdHouseNo(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="contact d-flex  border mt-2">
            <div className="phone-no">
              <section>Phone No</section>
              <input
                type="tel"
                name="phone"
                required
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
                name="email"
                required
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
          </div>
          <div className="educational border mt-2">
            <h5>Educational Background</h5>
            <div className="d-flex border m-1">
              <div className="highscholname">
                <section>Name of high school</section>
                <input
                  type="text"
                  name=""
                  required
                  id="first"
                  placeholder=""
                  onChange={(e) => {
                    setStdhighschool_name(e.target.value);
                  }}
                />
              </div>
              <div className="phone-no">
                <section>Grade 10 result</section>
                <input
                  type="text"
                  required
                  name=""
                  id="first"
                  placeholder=""
                  onChange={(e) => {
                    setStdGrade_10_Score(e.target.value);
                  }}
                />
              </div>
              <div className="phone-no">
                <section>Grade 10 finished Year</section>
                <input
                  type="number"
                  name=""
                  required
                  id="first"
                  placeholder=""
                  onChange={(e) => {
                    setStdGrade_10_Year(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="d-flex border m-1">
              <div className="Preparatory">
                <section>Name of Preparatory</section>
                <input
                  type="text"
                  name=""
                  id="first"
                  placeholder=""
                  onChange={(e) => {
                    setStdPreparatorySchoolName(e.target.value);
                  }}
                />
              </div>
              <div className="phone-no">
                <section>Grade 12 result</section>
                <input
                  type="text"
                  name=""
                  id="first"
                  placeholder=""
                  onChange={(e) => {
                    setStdGrade_12_Score(e.target.value);
                  }}
                />
              </div>
              <div className="phone-no">
                <section>Year</section>
                <input
                  type="number"
                  name=""
                  id="first"
                  placeholder=""
                  onChange={(e) => {
                    setStdGrade_12_Year(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="TVET border mt-2">
              <h5>TVET</h5>
              <div
                className="d-flex border m-1"
                id="TVETDIV"
                style={{ display: "none" }}
              >
                <div className="phone-no">
                  <section>Name of College</section>
                  <input
                    type="text"
                    name=""
                    id="first"
                    placeholder=""
                    onChange={(e) => {
                      setStdTvetNameOfCollege(e.target.value);
                    }}
                  />
                </div>
                <div className="phone-no">
                  <section>Program</section>
                  <input
                    type="text"
                    name=""
                    id="first"
                    placeholder=""
                    onChange={(e) => {
                      setStdTvetProgram(e.target.value);
                    }}
                  />
                </div>
                <div className="phone-no">
                  <section>Year</section>
                  <input
                    type="number"
                    name=""
                    id="first"
                    placeholder=""
                    onChange={(e) => {
                      setStdTvet_year(e.target.value);
                    }}
                  />
                </div>

                <div className="phone-no">
                  <section>Level</section>
                  <input
                    type="number"
                    name=""
                    id="first"
                    placeholder=""
                    onChange={(e) => {
                      setStdTvetLevel(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="degree border mt-2">
              <h5>Degree</h5>
              <div
                className="d-flex border m-1"
                id="TVETDIV"
                style={{ display: "none" }}
              >
                <div className="phone-no">
                  <section>Name of College/University</section>
                  <input
                    type="text"
                    name=""
                    id="first"
                    placeholder=""
                    onChange={(e) => {
                      setStdDegreeNameOfInstitute(e.target.value);
                    }}
                  />
                </div>
                <div className="phone-no">
                  <section>Degree Awarded</section>
                  <input
                    type="text"
                    name=""
                    id="first"
                    placeholder=""
                    onChange={(e) => {
                      setStdDegreeDegreeAwarded(e.target.value);
                    }}
                  />
                </div>
                <div className="phone-no">
                  <section>Year</section>
                  <input
                    type="number"
                    name=""
                    id="first"
                    placeholder=""
                    onChange={(e) => {
                      setStdDegreeYear(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="border m-2">
              <div className="">
                <div className="">
                  <section>Department</section>
                  <select
                    name=""
                    required
                    id=""
                    onChange={(e) => {
                      setStdDepartment(e.target.value);
                      // getProgram()
                    }}
                  >
                    <option></option>
                    {depFiller()}
                  </select>
                </div>
                <div className="">
                  <section>Program</section>
                  <select
                    required
                    name=""
                    id=""
                    onChange={(e) => setStdProgram(e.target.value)}
                  >
                    <option></option>
                    {programFiller()}
                  </select>
                </div>
                <div className="">
                  <section>Section</section>
                  <select
                    required
                    name=""
                    id=""
                    onChange={(e) => {
                      setStdSection(e.target.value);
                    }}
                  >
                    <option></option>
                    {sectionsFiller()}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="emergency border p-2">
            <section className="h5">Emergency Contact</section>
            <div className="con">
              <div className="emergency-name d-flex border mt-2">
                <div className="first-name">
                  <section>First Name</section>
                  <input
                    type="text"
                    name="first"
                    required
                    id="first"
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
                    required
                    name="middle"
                    id="middle"
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
                    id="last"
                    required
                    placeholder="Last Name"
                    onChange={(e) => {
                      setStdEMergencyLName(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="emergency-address d-flex flex-wrap border mt-2">
                <div className="first-name">
                  <section>Country</section>
                  <input
                    type="text"
                    name="first"
                    required
                    id="first"
                    placeholder="Country"
                    onChange={(e) => {
                      setStdEMergencyCountry(e.target.value);
                    }}
                  />
                </div>
                <div className="first-name">
                  <section>City</section>
                  <input
                    type="text"
                    name="first"
                    required
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
                    required
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
                      required
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
                      name="first"
                      required
                      id="first"
                      placeholder="H.no"
                      onChange={(e) => {
                        setStdEMergencyHouseNo(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="emergency-contact d-flex border mt-2">
                <div className="phone-no">
                  <section>Phone No</section>
                  <input
                    type="text"
                    name="phone"
                    required
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
                    name="phone"
                    id="first"
                    placeholder="0987654324"
                    onChange={(e) => {
                      setStdEMergencyPhone2(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="buttons mt-2">
                <Button variant="danger" type="reset">
                  Cancel
                </Button>
                <Button variant="primary" type="Submit">
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

export default RegisterStudent;
