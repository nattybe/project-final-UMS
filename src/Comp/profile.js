import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { baseUrl } from "../globalConst";

function Profile(props) {
  const [loggerInfo, setLoggerInfo] = useState();
  const [res, setRes] = useState({ status: "not yet" });
  const getLogger = () => {
    let logger = JSON.parse(window.sessionStorage.getItem("logger"));
    console.log("logger => GetLogger " + logger);
    setLoggerInfo(logger);
  };
  useEffect(() => {
    if (loggerInfo) {
      // alert(loggerInfo.S_ID);
      // console.log(loggerInfo);
    } else {
      getLogger();
    }
  }, [loggerInfo]);
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

  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [ConfirmNewPassWord, setConfirmNewPassWord] = useState();

  const changePassword = async () => {
    let oldPW = document.getElementById("OldPassWord").value;
    let newPW = document.getElementById("NewPassword").value;
    let newPWConf = document.getElementById("ConfirmNewPassWord").value;
    if (newPassword === ConfirmNewPassWord && loggerInfo) {
      const formData = new FormData();
      formData.append("oldPassword", oldPassword);
      formData.append("NewPassword", newPassword);
      formData.append("loginas", loggerInfo.loginas);
      formData.append("id", loggerInfo.id);
      let resa = await fetch(baseUrl + "login.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
      resa = await resa.json();
      // console.warn(resa)
      setRes(resa);
    } else {
      alert("Confirm Password Doesn't Match!");
    }
  };
  useEffect(() => {
    if (res.status === "success") {
      if (res.data === 1) {
        alert("Password changed successfully!");
      } else {
        alert("Old Password Does Not Match!");
      }
      setRes({ status: "the aftermath" });
    }
  }, [res]);
  const photogetter = () => {
    let photo;
    if (loggerInfo) {
      if (loggerInfo.loginas === "students") {
        photo = baseUrl + "student-photo/" + loggerInfo.photo;
      } else {
        photo = baseUrl + "user-photo/" + loggerInfo.photo;
      }
    } else {
      photo = "avator.jpg";
    }
    return photo;
  };
  if(loggerInfo){
    return (
      <div className="comp-body-container m-4 shadow border">
        <h3>Profile</h3>
        {/* <button onClick={() => {}}>clo</button> */}
        <div className="profile">
          <form action="">
            <div className=" d-flex">
              <img src={photogetter()} alt="" />
              <div className="names">
                <div className="student-name ms-3 border p-2">
                  <div className="first-name">
                    <section>First Name </section>
                    <input
                      id="firstNames"
                      type="text"
                      name="first"
                      defaultValue={loggerInfo.fname}
                      disabled
                      // id="first"
                      placeholder="First Name"
                      // value={loggerInfo.}
                    />
                  </div>
                  <div className="middle-name">
                    <section>Middle Name</section>
                    <input
                      type="text"
                      name="middle"
                      defaultValue={loggerInfo.mname}
                      disabled
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
                      defaultValue={loggerInfo.lname}
                      disabled
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
                      defaultValue={loggerInfo.sex}
                      disabled
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
                      defaultValue={loggerInfo.age}
                      id="age"
                      disabled
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
                      defaultValue={loggerInfo.Nationality}
                      disabled
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
                    disabled
                    defaultValue={loggerInfo.Nationality}
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
                    disabled
                    defaultValue={loggerInfo.city}
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
                    disabled
                    defaultValue={loggerInfo.subcity}
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
                  disabled
                  defaultValue={loggerInfo.woreda}
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
                  disabled
                  defaultValue={loggerInfo.HNO}
                    placeholder="H.no"
                    onChange={(e) => {
                      setStdHouseNo(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="contact ms-3 p-2  border">
                <div className="phone-no">
                  <section>Phone No</section>
                  <input
                    type="text"
                    name="phone"
                    id="first"
                  disabled
                  defaultValue={loggerInfo.phone_no1}
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
                  disabled
                  defaultValue={loggerInfo.phone_no2}
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
                  disabled
                  defaultValue={loggerInfo.email}
                    placeholder="example@unity.com"
                    onChange={(e) => {
                      setStdEmail(e.target.value);
                    }}
                  />
                </div>
                {/* <div className="email">
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
                </div> */}
              </div>
              <div className="change-password ms-3 d-flex flex-column border p-2">
                <div className="old ms-1 mt-3">
                  <section>Old Password</section>
                  <input
                    type="text"
                    name="pass"
                    id="OldPassWord"
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="passers"
                  />
                </div>
                <div className="old ms-1 mt-3">
                  <section>New Password</section>
                  <input
                    type="text"
                    name="pass"
                    id="NewPassword"
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="passers"
                  />
                </div>
                <div className="old ms-1 mt-3">
                  <section>Repeat New Password</section>
                  <input
                    type="text"
                    name="pass"
                    id="ConfirmNewPassWord"
                    onChange={(e) => setConfirmNewPassWord(e.target.value)}
                    className="passers"
                  />
                </div>
                <div className="buttons">
                  <Button onClick={changePassword}>Change</Button>
                </div>
              </div>
            </div>
  
            <div className="emergency mt-2 border">
              <section className="h5">Emergency Contact</section>
              <div className="con">
                <div className="emergency-name border ms-3 mt-2 d-flex">
                  <div className="first-name">
                    <section>First Name</section>
                    <input
                      type="text"
                      name="first"
                      id="first"
                  disabled
                  defaultValue={loggerInfo.EC_firstname}
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
                  disabled
                  defaultValue={loggerInfo.EC_middlename}
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
                  disabled
                  defaultValue={loggerInfo.EC_lastname}
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
                  disabled
                  defaultValue={loggerInfo.EC_country}
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
                  disabled
                  defaultValue={loggerInfo.EC_city}
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
                  disabled
                  defaultValue={loggerInfo.EC_subcity}
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
                  disabled
                  defaultValue={loggerInfo.EC_woreda}
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
                  disabled
                  defaultValue={loggerInfo.EC_houseno}
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
                  disabled
                  defaultValue={loggerInfo.EC_phonenumber1}
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
                  disabled
                  defaultValue={loggerInfo.EC_phonenumber2}
                      name="phone"
                      id="first"
                      placeholder="0987654324"
                      onChange={(e) => {
                        setStdEMergencyPhone2(e.target.value);
                      }}
                    />
                  </div>
                </div>
                {/* <div className="buttons">
                  <Button variant="danger" type="reset">
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={submithandler} type="Submit">
                    Register
                  </Button>
                </div> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
 
}

export default Profile;
