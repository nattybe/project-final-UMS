import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { baseUrl } from "../../globalConst";
// import Profile from "../profile";
// import EditUser from "./editUser";

function ViewUser() {
  const [toBeEdited, setToBeEdited] = useState();
// ToDo: the formdata must get the information by document.getElementById because the onChange event won't be called
  const EditUser = (props) => {
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

    const [usrQualification, setusrQualification] = useState();
    const [usrPosition, setusrPosition] = useState();

    const [res, setRes] = useState();

    const cf = () => {
      const formData = new FormData();

      formData.append("UpDateUser", true);
      formData.append("i_fname", stdFName);
      formData.append("i_mname", stdMName);
      formData.append("i_lname", stdLName);
      formData.append("i_age", stdAge);
      formData.append("i_sex", stdSex);
      formData.append("i_nationality", stdNationality);
      formData.append("i_city", stdCity);
      // formData.append("i_photo", stdPhoto);
      // formData.append("i_country", stdCountry);
      formData.append("i_subcity", stdSubCity);
      formData.append("i_woreda", stdWoreda);
      formData.append("i_hno", stdHouseNo);
      formData.append("i_phone_no1", stdPhone);
      formData.append("i_phone_no2", stdPhone2);
      // formData.append("i_password", );

      formData.append("userAuth", view);
      formData.append("i_email", stdEmail);
      formData.append("i_qualification", usrQualification);
      formData.append("i_position", usrPosition);
      formData.append("i_ec_firstname", stdEmergencyFName);
      formData.append("i_ec_middlename", stdEmergencyMName);
      formData.append("i_ec_lastname", stdEmergencyLName);
      formData.append("i_ec_country", stdEmergencyCountry);
      formData.append("i_ec_city", stdEmergencyCity);
      formData.append("i_ec_subcity", stdEmergencySubCity);
      formData.append("i_ec_woreda", stdEmergencyWoreda);
      formData.append("i_ec_houseno", stdEmergencyHouseNo);
      formData.append("i_ec_phonenumber1", stdEmergencyPhone);
      formData.append("i_ec_phonenumber2", stdEmergencyPhone2);
      // formData.append("department", stdDepartment);
      // formData.append("submit", "submit");

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
    const submithandler = (e) => {
      e.preventDefault();
      // alert("Submitted " + stdPhoto + " " + stdSex);
    };

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

      const saveEdited = () => {};
      return (
        <div className="border">
          {/* <h3>Edit User</h3> */}
          {/* <button onClick={() => {}}>clo</button> */}
          <div className="">
            <form action="">
              <div className="d-flex">
                <img
                  src={baseUrl + "user-photo/" + user.photo}
                  style={{ maxHeight: "350px", maxWidth: "300px" }}
                  alt=""
                />
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
                  <div className="phone-no mt-3">
                    <section>Qualification</section>
                    <input
                      className="form-"
                      type="text"
                      name="phone"
                      id="first"
                      defaultValue={user.qualification}
                      placeholder="Qualification"
                      onChange={(e) => {
                        setusrQualification(e.target.value);
                      }}
                    />
                  </div>
                  <div className="phone-no">
                    <section>Position</section>
                    <input
                      type="text"
                      name="phone"
                      id="first"
                      placeholder="position"
                      defaultValue={user.position}
                      onChange={(e) => {
                        setusrPosition(e.target.value);
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
                    <Button
                      variant="danger"
                      type="reset"
                      onReset={() => closeHandler("")}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      onClick={(e) => saveEdited(e)}
                      type="Submit"
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
  const SingleUser = (props) => {
    const user = props.user;
    return (
      <>
        <dialog id="EditUserDiag" className="diag-parax">
          <div className="diag-header">
            <div className="diag-title">Edit User</div>
            <span
              role="button"
              onClick={() => closeHandler("EditUserDiag")}
              className="diag-close"
            >
              X
            </span>
          </div>
          <div className="diag-body">
            <EditUser user={user} />
          </div>
        </dialog>
        <div className="item student-item border shadow bg-light m-1 mt-4">
          <div className="text-center">
            <img
              src={"http://localhost/proje/user-photo/" + user.photo}
              alt=""
            />
            <section>ID: {user.id}</section>
          </div>
          <div className="mt-3">
            <p>Name: {user.fname}</p>
            <p>
              Age: {user.age}&nbsp;&nbsp;&nbsp; Sex: {user.sex}
            </p>
            <p>Address: {user.address}</p>
            <p>Authority: {user.Department}</p>
          </div>
          <div></div>
          <div></div>
          <div className="p-2">
            <div className="m-1">
              <Button
                className="m-2"
                onClick={() => {
                  editHandler(props.user);
                }}
                variant="warning"
              >
                Edit
              </Button>
              {/* <Button className="m-2">View gpa</Button> */}
            </div>
            <div className="m-1">
              <Button
                className="m-2"
                variant="danger"
                onClick={() => {
                  console.log(user);
                }}
              >
                Delete
              </Button>
              <Button
                className="m-2 bg-success"
                onClick={() => {
                  // setStudents(std);
                }}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </>
    );
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

  // const [search, setSearch]=useState('');
  // const [by, setBy] = useState("");
  const [view, setView] = useState("instructors");
  const [reaData, setreaData] = useState();
  const getUsers = async () => {
    const searchFD = new FormData();
    // if (search && SearchBy) {
    //   console.log(search, " ", SearchBy);
    //   searchFD.append("search", search);
    //   searchFD.append("By", SearchBy);
    // }
    searchFD.append("view", view);
    const url = "http://localhost/proje/viewUser.php";
    console.log("url set: ", url);
    const fetchData = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: searchFD,
    });
    const resdata = await fetchData.json();
    setreaData(resdata);
    // console.log("ReaData: " + reaData.status + " rows: " + resdata.rows);
  };
  useEffect(() => {
    getUsers();
  }, [view]);
  const editHandler = (user) => {
    document.getElementById("EditUserDiag").showModal();
    setToBeEdited(user);
    // diag.innerHTML = "<EditUser user={user}/>";
    // diag.appendChild(editor)
    // diag.close();
    // diag.showModal();
  };
  const closeHandler = (diagId) => {
    const diag = document.getElementById(diagId);
    diag.close();
  };
  const userFiller = () => {
    // console.log("form rea");
    if (typeof reaData !== "undefined") {
      // console.log("form rea");
      if (reaData.status === "success") {
        const use = [];
        // console.log("use 1:"+use.length);
        reaData.data.map((user) => {
          // console.log(user.Name);
          use.push(<SingleUser user={user} />);
          // return <SingleUser user={user} />;
        });
        // console.log("use 2:"+use.length);
        return use;
      }
    } else {
      return (
        <>
          <div className="item student-item border shadow bg-light m-1 mt-4">
            <div className="text-center">
              <dialog id="EditUserDiag" className="diag-parax">
                <div className="diag-header">
                  <div className="diag-title">Edit User</div>
                  <span
                    role="button"
                    onClick={() => closeHandler("EditUserDiag")}
                    className="diag-close"
                  >
                    X
                  </span>
                </div>
                <div className="diag-body">
                  <EditUser />
                </div>
              </dialog>
              <img src={"avatar.jpg"} alt="" />
              <section>ID: </section>
            </div>
            <div className="mt-3">
              <p>Name: </p>
              <p>Age: &nbsp;&nbsp;&nbsp; Sex:</p>
              <p>Address: </p>
              <p>Authority: </p>
            </div>
            <div></div>
            <div></div>
            <div className="p-2">
              <div className="m-1">
                <Button
                  className="m-2"
                  onClick={() => {
                    editHandler();
                  }}
                  variant="warning"
                >
                  Edit
                </Button>
                {/* <Button className="m-2">View gpa</Button> */}
              </div>
              <div className="m-1">
                <Button
                  className="m-2"
                  variant="danger"
                  onClick={() => {
                    // console.log(user);
                  }}
                >
                  Delete
                </Button>
                <Button
                  className="m-2 bg-success"
                  onClick={() => {
                    // setStudents(std);
                  }}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
          <div className="item student-item border shadow bg-light m-1 mt-4">
            <div className="text-center">
              <dialog id="EditUserDiag" className="diag-parax">
                <div className="diag-header">
                  <div className="diag-title">Edit User</div>
                  <span
                    role="button"
                    onClick={() => closeHandler("EditUserDiag")}
                    className="diag-close"
                  >
                    X
                  </span>
                </div>
                <div className="diag-body">
                  <EditUser />
                </div>
              </dialog>
              <img src={"avatar.jpg"} alt="" />
              <section>ID: </section>
            </div>
            <div className="mt-3">
              <p>Name: </p>
              <p>Age: &nbsp;&nbsp;&nbsp; Sex:</p>
              <p>Address: </p>
              <p>Authority: </p>
            </div>
            <div></div>
            <div></div>
            <div className="p-2">
              <div className="m-1">
                <Button
                  className="m-2"
                  onClick={() => {
                    editHandler();
                  }}
                  variant="warning"
                >
                  Edit
                </Button>
                {/* <Button className="m-2">View gpa</Button> */}
              </div>
              <div className="m-1">
                <Button
                  className="m-2"
                  variant="danger"
                  onClick={() => {
                    // console.log(user);
                  }}
                >
                  Delete
                </Button>
                <Button
                  className="m-2 bg-success"
                  onClick={() => {
                    // setStudents(std);
                  }}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
          <div className="item student-item border shadow bg-light m-1 mt-4">
            <div className="text-center">
              <dialog id="EditUserDiag" className="diag-parax">
                <div className="diag-header">
                  <div className="diag-title">Edit User</div>
                  <span
                    role="button"
                    onClick={() => closeHandler("EditUserDiag")}
                    className="diag-close"
                  >
                    X
                  </span>
                </div>
                <div className="diag-body">
                  <EditUser />
                </div>
              </dialog>
              <img src={"avatar.jpg"} alt="" />
              <section>ID: </section>
            </div>
            <div className="mt-3">
              <p>Name: </p>
              <p>Age: &nbsp;&nbsp;&nbsp; Sex:</p>
              <p>Address: </p>
              <p>Authority: </p>
            </div>
            <div></div>
            <div></div>
            <div className="p-2">
              <div className="m-1">
                <Button
                  className="m-2"
                  onClick={() => {
                    editHandler();
                  }}
                  variant="warning"
                >
                  Edit
                </Button>
                {/* <Button className="m-2">View gpa</Button> */}
              </div>
              <div className="m-1">
                <Button
                  className="m-2"
                  variant="danger"
                  onClick={() => {
                    // console.log(user);
                  }}
                >
                  Delete
                </Button>
                <Button
                  className="m-2 bg-success"
                  onClick={() => {
                    // setStudents(std);
                  }}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
          <div className="item student-item border shadow bg-light m-1 mt-4">
            <div className="text-center">
              <dialog id="EditUserDiag" className="diag-parax">
                <div className="diag-header">
                  <div className="diag-title">Edit User</div>
                  <span
                    role="button"
                    onClick={() => closeHandler("EditUserDiag")}
                    className="diag-close"
                  >
                    X
                  </span>
                </div>
                <div className="diag-body">
                  <EditUser />
                </div>
              </dialog>
              <img src={"avatar.jpg"} alt="" />
              <section>ID: </section>
            </div>
            <div className="mt-3">
              <p>Name: </p>
              <p>Age: &nbsp;&nbsp;&nbsp; Sex:</p>
              <p>Address: </p>
              <p>Authority: </p>
            </div>
            <div></div>
            <div></div>
            <div className="p-2">
              <div className="m-1">
                <Button
                  className="m-2"
                  onClick={() => {
                    editHandler();
                  }}
                  variant="warning"
                >
                  Edit
                </Button>
                {/* <Button className="m-2">View gpa</Button> */}
              </div>
              <div className="m-1">
                <Button
                  className="m-2"
                  variant="danger"
                  onClick={() => {
                    // console.log(user);
                  }}
                >
                  Delete
                </Button>
                <Button
                  className="m-2 bg-success"
                  onClick={() => {
                    // setStudents(std);
                  }}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <Container className="border comp-body-container">
      <h3>Users</h3>
      <div className="flex search-box">
        {/* <h4>Search By</h4>
        <select name="SearchBy" id="SearchBy">
          <option value="ID">ID</option>
          <option value="Name">Name</option>
          <option value="Section">Section</option> 
          <option value="Department">Department</option>
        </select> */}
        <h3>View</h3>
        <select
          name="SearchBy"
          id="SearchBy"
          onChange={(e) => setView(e.target.value)}
        >
          <option value="instructors">Instructor</option>
          <option value="registrars">Registrar</option>
          <option value="librarian">Librarian</option>
          <option value="program_officers">program Office</option>
        </select>
        <input
          type="search"
          name="searchStudent"
          id="searchStudent"
          placeholder="Search Student"
        ></input>
        <button
          onClick={() => {
            alert("Searched");
          }}
        >
          <i className="fas fa-search" />
        </button>
      </div>
      <div className="">{userFiller()}</div>
      <div className="item student-item border shadow bg-light m-1 mt-4">
        <div className="text-center">
          <dialog id="EditUserDiag" className="diag-parax">
            <div className="diag-header">
              <div className="diag-title">Edit User</div>
              <span
                role="button"
                onClick={() => closeHandler("EditUserDiag")}
                className="diag-close"
              >
                X
              </span>
            </div>
            <div className="diag-body">
              <EditUser user={toBeEdited} />
            </div>
          </dialog>
        </div>
      </div>
    </Container>
  );
}
export default ViewUser;
