import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { baseUrl } from "../../globalConst";
function AddUser() {
  const [usrFName, setusrFName] = useState();
  const [usrLName, setusrLName] = useState();
  const [usrMName, setusrMName] = useState();
  const [usrPhoto, setPhoto] = useState();

  const [usrEmail, setusrEmail] = useState();
  const [usrEmail2, setusrEmail2] = useState();
  const [usrPhone, setusrPhone] = useState();
  const [usrPhone2, setusrPhone2] = useState();

  const [usrAge, setusrAge] = useState();
  const [usrSex, setusrSex] = useState("Male");
  const [usrNationality, setusrNationality] = useState();

  const [usrCountry, setusrCountry] = useState();
  const [usrSubCity, setusrSubCity] = useState();
  const [usrCity, setusrCity] = useState();
  const [usrWoreda, setusrWoreda] = useState();
  const [usrHouseNo, setusrHouseNo] = useState();
  const [usrQualification, setusrQualification] = useState();
  const [usrPosition, setusrPosition] = useState();

  const [usrEmergencyFName, setusrEMergencyFName] = useState();
  const [usrEmergencyLName, setusrEMergencyLName] = useState();
  const [usrEmergencyMName, setusrEMergencyMName] = useState();
  const [usrEmergencyPhone, setusrEMergencyPhone] = useState();
  const [usrEmergencyPhone2, setusrEMergencyPhone2] = useState();
  const [usrEmergencyCountry, setusrEMergencyCountry] = useState();
  const [usrEmergencySubCity, setusrEMergencySubCity] = useState();
  const [usrEmergencyCity, setusrEMergencyCity] = useState();
  const [usrEmergencyWoreda, setusrEMergencyWoreda] = useState();
  const [usrEmergencyHouseNo, setusrEMergencyHouseNo] = useState();
  const [usrDepartment, setusrDepartment] = useState();
  const [res, setRes] = useState();
  const [autho, setAutho] = useState("registrar");

  const cf = () => {
    const formData = new FormData();
    formData.append("i_fname", usrFName);
    formData.append("i_lname", usrLName);
    formData.append("i_age", usrAge);
    formData.append("i_sex", usrSex);
    formData.append("i_nationality", usrNationality);
    formData.append("i_city", usrCity);
    formData.append("i_photo", usrPhoto);
    // formData.append("i_country", usrCountry);
    formData.append("i_subcity", usrSubCity);
    formData.append("i_woreda", usrWoreda);
    formData.append("i_hno", usrHouseNo);
    formData.append("i_phone_no1", usrPhone);
    formData.append("i_phone_no2", usrPhone2);
    // formData.append("i_password", );
    
    formData.append("userAuth", autho);
    formData.append("i_email", usrEmail);
    formData.append("i_qualification", usrQualification); //
    formData.append("i_position", usrPosition); //
    formData.append("i_ec_firstname", usrEmergencyFName);
    formData.append("i_ec_middlename", usrEmergencyMName);
    formData.append("i_ec_lastname", usrEmergencyLName);
    formData.append("i_ec_country", usrEmergencyCountry);
    formData.append("i_ec_city", usrEmergencyCity);
    formData.append("i_ec_subcity", usrEmergencySubCity);
    formData.append("i_ec_woreda", usrEmergencyWoreda);
    formData.append("i_ec_houseno", usrEmergencyHouseNo);
    formData.append("i_ec_phonenumber1", usrEmergencyPhone);
    formData.append("i_ec_phonenumber2", usrEmergencyPhone2);
    formData.append("department", usrDepartment);
    formData.append("submit", "submit");

    // console.log("SNE: "+formData.get("i_ec_phonenumber1"));
    return formData;
  };

  const requested = async () => {
    const formData = cf();
    let recie = await fetch(baseUrl + "RegisterUser.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });
    // recie=await recie.json();
    setRes(await recie.json());
    if (typeof res !== "undefined") {
      console.log("Status: " + res.status);
      console.log("Res: " + JSON.stringify(res));
    }
  };

  const submithandler = async (e) => {
    e.preventDefault();
    await requested();
  };
  useEffect(() => {
    diagalert();
  }, [res]);
  const diagalert = () => {
    if (typeof res !== "undefined") {
      const diag = document.getElementById("regsuccess");
      diag.close();
      diag.showModal();
    }
  };
  const diagsuccessfiller = () => {
    if (typeof res !== "undefined") {
      if (res.status === "success") {
        return (
          <div>
            <div
              className="border"
              onClick={() => {
                document.getElementById("regsuccess").close();
              }}
            >
              X
            </div>
            <h3>Success</h3>
            {/* <h5>{res}</h5> */}
            <h5>ID: {res.data.ID}</h5>
            <h5>Name {res.data.firstname}</h5>
            <h5>Position {res.data.position}</h5>
            <h5>Authority {res.data.Authority}</h5>
            <h5>Password {res.data.password}</h5>
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
  const [deps, setDeps] = useState();
  const[depOptions, setDepOptions] = useState([
    <option></option>,
  ]);
  const getDep = async () => {
    console.log("getDep started");
    if (autho === "department") {
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
        depFiller();
      } else {
        // console.warn('undefiend: '+deps);
        console.log("undefiend: " + deps);
      }
    } else {
      console.log("no autho: " + autho);
    }
  };
  const depFiller = () => {
    if (typeof deps !== "undefined") {
      
      // console.log("from deps.status " + deps.status);
      // console.log("from deps " + deps);
      deps.data.map((depers) => {
        // alert(depers.D_Name)
        depOptions.push(<option value={depers.D_id}>{depers.D_Name}</option>)
        return <option value={depers.D_id}>{depers.D_Name}</option>;
      });

    }
  };
  useEffect(() => {
    console.log("truely loaded");
    getDep();
  }, [autho]);
  const depart = () => {
    if (autho === "department") {
      return (
        <>
          <div className="phone-no">
            <section>Department</section>
            <select
              name=""
              id=""
              className="form-group"
              onChange={(e) => setusrDepartment(e.target.value)}
            >
            {depOptions}
              {/* <option value={1}>Computer Science</option>
              <option value={2}>Electrical Engineering</option> */}
            </select>
          </div>
          <div>
            <section>Position</section>
            <select
              name=""
              id=""
              className="form-group"
              onChange={(e) => setusrPosition(e.target.value)}
            >
              <option value=""></option>
              <option value="department head">Department Head</option>
              <option value="assistant">Assistant</option>
            </select>
          </div>
        </>
      );
    } else {
      return (
        <div className="phone-no">
          <section>Position</section>
          <input
            type="text"
            name="phone"
            id="first"
            placeholder="position"
            onChange={(e) => {
              setusrPosition(e.target.value);
            }}
          />
        </div>
      );
    }
  };
  // useEffect(() => {
  //   console.log("From useEffect: "+recresponse);
  // },[recresponse])
  return (
    <div className="comp-body-container my-register-form border">
      <h3>Add User</h3>
      <button
        onClick={() => {
          diagalert();
        }}
      >
        show diag
      </button>
      <dialog id="regsuccess">{diagsuccessfiller()}</dialog>
      <div className="add-user-body p-3">
        <div className="reg-stud">
          <form action="" className="form">
            <div className="first-row d-flex">
              <div className="student-photo">
                <section>Choose photo</section>
                <input
                  type="file"
                  name="usrphoto"
                  id="usrphoto"
                  accept="image/*"
                  onChange={(e) => {
                    setPhoto(e.target.files[0]);
                  }}
                />
              </div>
              <div className="select-auth">
                <section>User Authority</section>
                <select
                  name=""
                  id=""
                  onChange={(e) => setAutho(e.target.value)}
                >
                  <option value="registrar">Registrar</option>
                  <option value="programOfficer">Program Officer</option>
                  <option value="librarian">Librarian</option>
                  <option value="instructor">Instructor</option>
                  <option value="department">Department</option>
                </select>
              </div>
            </div>
            <div className="student-name d-flex">
              <div className="first-name">
                <section>First Name </section>
                <input
                  type="text"
                  name="first"
                  id="first"
                  placeholder="First Name"
                  onChange={(e) => {
                    setusrFName(e.target.value);
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
                    setusrMName(e.target.value);
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
                    setusrLName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="identity d-flex">
              <div className="usr-sex">
                <section>Sex</section>
                <select
                  name="sex"
                  id="sex"
                  onChange={(e) => {
                    setusrSex(e.target.value);
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
                  name="age"
                  id="age"
                  onChange={(e) => {
                    setusrAge(e.target.value);
                  }}
                />
              </div>
              <div className="first-name">
                <section>Nationality</section>
                <input
                  type="text"
                  placeholder="Nice"
                  name="nationality"
                  id="nationality"
                  onChange={(e) => {
                    setusrNationality(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="address row">
              <div className="d-flex">
                <div className="first-name">
                  <section>Country</section>
                  <input
                    type="text"
                    name="Country"
                    id="Country"
                    placeholder="Country"
                    onChange={(e) => {
                      setusrCountry(e.target.value);
                    }}
                  />
                </div>
                <div className="first-name">
                  <section>City</section>
                  <input
                    type="text"
                    name="city"
                    id="first"
                    placeholder="city"
                    onChange={(e) => {
                      setusrCity(e.target.value);
                    }}
                  />
                </div>
                <div className="first-name">
                  <section>SubCity</section>
                  <input
                    type="text"
                    name="subcity"
                    id="first"
                    placeholder="Subcity"
                    onChange={(e) => {
                      setusrSubCity(e.target.value);
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
                      setusrWoreda(e.target.value);
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
                      setusrHouseNo(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="contact d-flex">
              <div className="phone-no">
                <section>Phone No</section>
                <input
                  type="tel"
                  name="phone"
                  id="first"
                  placeholder="0987654321"
                  onChange={(e) => {
                    setusrPhone(e.target.value);
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
                    setusrPhone2(e.target.value);
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
                    setusrEmail(e.target.value);
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
                    setusrEmail2(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="position d-flex">
              <div className="phone-no">
                <section>Qualification</section>
                <input
                  className="form-"
                  type="text"
                  name="phone"
                  id="first"
                  placeholder="Qualification"
                  onChange={(e) => {
                    setusrQualification(e.target.value);
                  }}
                />
              </div>
              {depart()}
            </div>
            <div className="emergency">
              <section className="h5">Emergency Contact</section>
              <div className="con">
                <div className="emergency-name d-flex">
                  <div className="first-name">
                    <section>First Name</section>
                    <input
                      type="text"
                      name="first"
                      id="first"
                      placeholder="First Name"
                      onChange={(e) => {
                        setusrEMergencyFName(e.target.value);
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
                        setusrEMergencyMName(e.target.value);
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
                        setusrEMergencyLName(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="emergency-address row">
                  <div className="d-flex">
                    <div className="first-name">
                      <section>Country</section>
                      <input
                        type="text"
                        name="first"
                        id="first"
                        placeholder="Country"
                        onChange={(e) => {
                          setusrEMergencyCountry(e.target.value);
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
                          setusrEMergencyCity(e.target.value);
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
                          setusrEMergencySubCity(e.target.value);
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
                        placeholder="Country"
                        onChange={(e) => {
                          setusrEMergencyWoreda(e.target.value);
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
                          setusrEMergencyHouseNo(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="emergency-contact d-flex">
                  <div className="phone-no">
                    <section>Phone No</section>
                    <input
                      type="text"
                      name="phone"
                      id="first"
                      placeholder="0987654323"
                      onChange={(e) => {
                        setusrEMergencyPhone(e.target.value);
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
                        setusrEMergencyPhone2(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="buttons">
                  <Button variant="danger" type="reset">
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
    </div>
  );
}

export default AddUser;
