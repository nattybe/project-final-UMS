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
  const [sections, setSections] = useState();
  const [deps, setDeps] = useState();

  const submithandler = (e) => {
    e.preventDefault();
    // alert("Submitted " + stdPhoto + " " + stdSex);

    const info = [
      stdPhoto,
      stdFName,
      stdMName,
      stdLName,
      stdAge,
      stdSex,
      stdNationality,
      stdCountry,
      stdCity,
      stdSubCity,
      stdWoreda,
      stdHouseNo,
      stdEmail,
      stdEmail2,
      stdPhone,
      stdPhone2,
    ];
    alert(info);
  };
  const validate = () => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll("needs-validation");
    var formRS = document.getElementById("register-student");
    formRS.classList.add("was-validated");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  };
  const sne = (e) => {
    e.preventDefault();
    validate();
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    alert("submited");
  };
  const regHandler = () => {
    var myHeaders = new Headers();

    var formdata = new FormData();
    formdata.append("fname", "");
    formdata.append("lname", "");
    formdata.append("age", "");
    formdata.append("sex", "");
    formdata.append("Nationality", "");
    formdata.append("city", "");
    formdata.append("subcity", "");
    formdata.append("woreda", "");
    formdata.append("HNO", "");
    formdata.append("phone_no1", "");
    formdata.append("phone_no2", "");
    formdata.append("bloodtype", "");
    formdata.append("martialStatus", "");
    formdata.append("disabilities", "");
    formdata.append("highschool_name", "");
    formdata.append("grade_10_score", "");
    formdata.append("grade_10_year", "");
    formdata.append("preparatoryschool_name", "");
    formdata.append("grade_12_score", "");
    formdata.append("grade_12_year", "");
    formdata.append("tvet_nameofcollege", "");
    formdata.append("tvet_program", "");
    formdata.append("tvet_year", "");
    formdata.append("tvet_level", "");
    formdata.append("degree_nameof_institute", "");
    formdata.append("degree_degree_awarded", "");
    formdata.append("degree_year", "");
    formdata.append("password", "");
    formdata.append("email", "");
    formdata.append("section", "");
    formdata.append("CGPA", "");
    formdata.append("Department", "");
    formdata.append("photo", "");
    formdata.append("emergency_contact_firstname", "");
    formdata.append("emergency_contact_fmiddlename", "");
    formdata.append("emergency_contact_lastname", "");
    formdata.append("emergency_contact_city", "");
    formdata.append("emergency_contact_subcity", "");
    formdata.append("emergency_contact_woreda", "");
    formdata.append("emergency_contact_HNO", "");
    formdata.append("emergency_contact_phone_no1", "");
    formdata.append("emergency_contact_phone_no2", "");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("localhost/proje/register student.php", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  const getSections = async (val) => {
    // let resa;
    const fd = new FormData();
    fd.append("getSection", val);
    console.warn("getSections started " + val);
    let dep = await fetch(baseUrl + "RegisterStudent.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: fd,
    });
    // console.warn(dep.json());
    dep = await dep.json();
    setSections(dep);
    if (typeof resa !== "undefined") {
      console.log("from resa.status " + sections.status);
      console.log("from resa " + sections);
    } else {
      // console.warn('undefiend: '+deps);
      console.log(sections);
    }
  };
  const getDep = async () => {
    console.log("getDep started");
    let dep = await fetch(baseUrl + "RegisterUser.php?depReq=true", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    dep = await dep.json();
    setDeps(dep);
    if (typeof deps !== "undefined") {
      console.log("from deps.status " + deps.status);
      console.log("from deps " + deps);
    } else {
      // console.warn('undefiend: '+deps);
      console.log("undefiend: " + deps);
    }
  };
  const sectionsFiller = () => {
    let depOptions = [];
    if (typeof sections !== "undefined") {
      if (sections.length > 0) {
        sections.data.map((depers) => {
          // alert(depers.D_Name)
          depOptions.push(
            <option value={depers.Se_Id}>{depers.Se_Name}</option>
          );
          return <option value={depers.D_id}>{depers.D_Name}</option>;
        });
      }
      // console.log("from deps.status " + deps.status);
      // console.log("from deps " + deps);
    } else {
      return (
        <>
          <option value="">Degree</option>
          <option value="">Diploma</option>
          <option value="">Masters</option>
        </>
      );
    }
    return depOptions;
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
  const createFormData = () => {
    const formData = new FormData();

    formData.append("S_id", "12345");
    formData.append("S_fname", "John");
    formData.append("S_lname", "Smith");
    formData.append("S_age", 25);
    formData.append("S_sex", "Male");
    formData.append("S_Nationality", "American");
    formData.append("S_city", "New York");
    formData.append("S_subcity", "");
    formData.append("S_woreda", "");
    formData.append("S_HNO", "123 Main St");
    formData.append("S_phone_no1", "555-1234");
    formData.append("S_phone_no2", "555-5678");
    formData.append("S_bloodtype", "");
    formData.append("S_martialStatus", "");
    formData.append("S_disabilities", "");
    formData.append("S_highschool_name", "");
    formData.append("S_grade_10_score", "");
    formData.append("S_grade_10_year", "");
    formData.append("S_preparatoryschool_name", "");
    formData.append("S_grade_12_score", "");
    formData.append("S_grade_12_year", "");
    formData.append("S_tvet_nameofcollege", "");
    formData.append("S_tvet_program", "");
    formData.append("S_tvet_year", "");
    formData.append("S_tvet_level", "");
    formData.append("S_degree_nameof_institute", "");
    formData.append("S_degree_degree_awarded", "");
    formData.append("S_degree_year", "");
    formData.append("S_password", "securepassword");
    formData.append("S_email", "john.smith@example.com");
    formData.append("S_section", "A1");
    formData.append("S_CGPA", 3.5);
    formData.append("S_Department", "Computer Science");
    // Add the photo file to the form data
    const photoFile = document.getElementById("photo").files[0];
    if (photoFile) {
      formData.append("S_photo", photoFile);
    }
    formData.append("S_emergency_contact_firstname", "Jane");
    formData.append("S_emergency_contact_fmiddlename", "");
    formData.append("S_emergency_contact_lastname", "Doe");
    formData.append("S_emergency_contact_city", "Los Angeles");
    formData.append("S_emergency_contact_subcity", "");
    formData.append("S_emergency_contact_woreda", "");
    formData.append("S_emergency_contact_HNO", "456 Elm St");
    formData.append("S_emergency_contact_phone_no1", "555-2468");
    formData.append("S_emergency_contact_phone_no2", "");
  };
  useEffect(() => {
    getDep();
  }, []);
  return (
    <div className="border my-register-form comp-body-container p-3">
      <h3>Register Student</h3>
      <div className="reg-stud">
        <form
          className="form needs-validation"
          validate
          id="register-student"
          action=""
        >
          <div className="student-photo">
            <section>Select Photo</section>
            <input
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
                id="sex"
                onChange={(e) => {
                  setStdSex(e.target.value);
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
                name="nationality"
                id="nationality"
                onChange={(e) => {
                  setStdNationality(e.target.value);
                }}
              />
            </div>
            <div className="martial-status">
              <section>Martial Status</section>
              <select name="" id="">
                <option value="">Single</option>
                <option value="">Married</option>
                <option value="">Divorce</option>
                <option value="">Widowed</option>
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
                <input type="text" name="" />
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
                  onChange={(e) => {
                    setStdCity(e.target.value);
                  }}
                />
              </div>
              <div className="first-name">
                <section>SubCity</section>
                <input
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
              <div className="phone-no">
                <section>Name of high school</section>
                <input
                  type="text"
                  name=""
                  id="first"
                  placeholder=""
                  onChange={(e) => {
                    setStdPhone(e.target.value);
                  }}
                />
              </div>
              <div className="phone-no">
                <section>Grade 10 result</section>
                <input
                  type="text"
                  name=""
                  id="first"
                  placeholder=""
                  onChange={(e) => {
                    setStdPhone(e.target.value);
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
                    setStdPhone(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="d-flex border m-1">
              <div className="phone-no">
                <section>Name of Preparatory</section>
                <input
                  type="text"
                  name=""
                  id="first"
                  placeholder=""
                  onChange={(e) => {
                    setStdPhone(e.target.value);
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
                    setStdPhone(e.target.value);
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
                    setStdPhone(e.target.value);
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
                      setStdPhone(e.target.value);
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
                      setStdPhone(e.target.value);
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
                      setStdPhone(e.target.value);
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
                      setStdPhone(e.target.value);
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
                      setStdPhone(e.target.value);
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
                      setStdPhone(e.target.value);
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
                      setStdPhone(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="border m-2">
              <div className="d-flex">
                <div className="">
                  <section>Department</section>
                  <select
                    name=""
                    id=""
                    onChange={(e) => {
                      setStdDepartment(e.target.value);
                      getSections(e.target.value);
                    }}
                  >
                    {depFiller()}
                  </select>
                </div>
                <div className="">
                  <section>Program</section>
                  <select name="" id="">
                    {sectionsFiller()}
                  </select>
                </div>
                <div className="">
                  <section>Section</section>
                  <select name="" id="">
                    <option value="">N1</option>
                    <option value="">N2</option>
                    <option value="">N3</option>
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
                <Button variant="primary" onClick={(e) => sne(e)} type="Submit">
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
