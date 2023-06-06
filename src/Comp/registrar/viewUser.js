import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Profile from "../profile";
import EditUser from "./editUser";

function ViewUser() {
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
  const SingleUser = (props) => {
    const user = props.user;
    return (
      <div className="item student-item border shadow bg-light m-1 mt-4">
        <div className="text-center">
        <dialog id="EditDiag" className="diag-parax">
        <div className="diag-header">
          <div className="diag-title">hello</div>
          <span
            role="button"
            onClick={() => closeHandler("EditDiag")}
            className="diag-close"
          >
            X
          </span>
        </div>
        <div className="diag-body">
          <EditUser user={user} />
        </div>
      </dialog>
          <img src={"http://localhost/proje/user-photo/"+user.photo}  alt="" />
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
              onClick={() => editHandler(props.user)}
              variant="warning"
            >
              Edit
            </Button>
            {/* <Button className="m-2">View gpa</Button> */}
          </div>
          <div className="m-1">
            <Button className="m-2" variant="danger">
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
  };
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
    console.log("ReaData: " + reaData.status + " rows: " + resdata.rows);
  };
  useEffect(() => {
    getUsers();
  }, [view]);
  const editHandler = () => {
    const diag = document.getElementById("EditDiag");
    diag.innerHTML='<EditUser user={user}/>';
    // diag.appendChild(editor)
    diag.close();
    diag.showModal();
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
    </Container>
  );
}
export default ViewUser;
