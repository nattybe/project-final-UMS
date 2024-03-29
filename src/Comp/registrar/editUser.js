import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function EditUser(props) {
  const user = props.user;
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

  useEffect(() => {
    if (typeof user !== "undefined") {
      setStdFName(user.fname);
      setStdLName(user.lname);
      // alert(stdFName)
    }
  },[user]);
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
  return (
    <div className="border">
      {/* <h3>Edit User</h3> */}
      {/* <button onClick={() => {}}>clo</button> */}
      <div className="">
        <form action="">
          <div className=" d-flex">
            <img src="./avatar.jpg" alt="" />
            <div className="names">
              <div className="student-name ms-3 border p-2">
                <div className="first-name">
                  <section>First Name </section>
                  <input
                    id="firstNames"
                    type="text"
                    name="first"
                    defaultValue={stdFName}
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
            <div className="contact ms-3 p-2 border">
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
              <div className="email">
                <section>Password</section>
                <input
                  type="email"
                  name="email"
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

              <div className="emergency-address  border ms-3 mt-2 d-flex">
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
              <div className="emergency-contact  border ms-3 mt-2 d-flex">
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
              <div className="buttons">
                <Button variant="danger" type="reset">
                  Cancel
                </Button>
                <Button variant="primary" onClick={submithandler} type="Submit">
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

export default EditUser;
