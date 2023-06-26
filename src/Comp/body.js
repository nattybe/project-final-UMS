import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AlertBy } from "./defFuncs";
import { Navigate, useNavigate } from "react-router-dom";
import { baseUrl } from "../globalConst";
function Body() {
  const [Res, setRes] = useState({ nothing: "to see here" });
  const [loginas, setloginas] = useState("students");
  const [ID, setID] = useState();
  const [password, setPassword] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const loginFetch = async (url, loginFd) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: loginFd,
      });
      const data = await response.json();
      setRes(data);
      console.log("res " + (await response.json()));
    } catch (error) {
      console.log(error.message);
      console.log(error.stack);
    } finally {
      // alert("The Finally!");
      // handleClose();
    }
  };
  useEffect(() => {
    // console.log(Res);
    if (Res.status === "success") {
      alert(Res.status);
      let dataf = Res.data[0];
      const logginas = { loginas: Res.loginas };
      dataf = Object.assign(dataf, logginas);
      window.sessionStorage.setItem("logger", JSON.stringify(dataf));
      // window.open("/", "_self");
      switch (logginas.loginas) {
        case "department":
          // window.open("/department", "_self");
          navigate("/department");
          break;
        case "instructors":
          navigate("/instructor");
          break;
        case "students":
          navigate("/student");
          break;
        case "registrars":
          navigate("/registrar");
          break;
        case "librarian":
          navigate("/librarian");
          break;
        case "program_officers":
          navigate("/programoffice");
          break;
        default:
          break;
      }
    } else {
      // alert("hello world!");
    }
  }, [Res]);
  const loginsubmit = (e) => {
    e.preventDefault();
    let loginFd = new FormData();
    const url = "http://localhost/proje/login.php";
    if (loginas && password && ID) {
      loginFd.append("loginas", loginas);
      loginFd.append("ID", ID);
      loginFd.append("password", password);
      loginFetch(url, loginFd);
    }
    if (typeof Res !== "undefined") {
      if (Res.status === "success") {
        // alert(Res.data[0].S_SUBCITY);
      }
    } else {
      // AlertBy();
      alert("login failed" + loginFd.get("ID"));
    }
    // seturl();
    // if (url) {
    //   handleShow();
    // }
  };
  const ThePasswordEraser = () => {
    const [pass, setPass] = useState();
    const [pass2, setPass2] = useState();
    const [email, setEmail] = useState();
    const [uId, setUId] = useState();
    const [acType, setAcType] = useState("students");

    const [res, setRes] = useState({ status: "not yet" });

    const resetSubmit = async (e) => {
      e.preventDefault();
      // console.log(loggerInfo);
      if (typeof pass !== "undefined") {
        // console.log("getOfCourse started");
        if (pass === pass2) {
          const formdata = new FormData();
          
          formdata.append("ResetPassword", pass);
          formdata.append("AcType", acType);
          formdata.append("ID", uId);
          formdata.append("ResetEmail", email);
          console.warn({form:formdata});
          let dep = await fetch(baseUrl + "login.php", {
            method: "POST",
            headers: {
              Accept: "application/json",
            },
            body: formdata,
          });
          let depa = await dep.json();
          setRes(depa);
          // console.warn(res);
          // console.warn({data:res});
          // setOffCourses(dep);
          //   if (typeof depa !== "undefined") {
          //     if (depa.status === "success") {
          //       setOffeing(depa.data.offering);
          //       setOffCourses(depa.data.courses);
          //       // console.warn({
          //       //   from: "ASS",
          //       //   courses: offCourses,
          //       //   offering: offeing,
          //       // });
          //     }
          //   }
          //   // console.error(
          //   //   "getMessages :",
          //   //   loggerInfo.id,
          //   //   " SeTab :",
          //   //   loggerInfo.loginas,
          //   //   " ReTab: ",
          //   //   cont.auth,
          //   //   " ReId:   ",
          //   //   cont.id
          //   // );
          //   // if (messages.status === "success") {
          //   //   // console.warn(messages);
          //   //   // console.log("from deps " + deps);
          //   // } else {
          //   //   // console.warn('undefiend: '+deps);
          //   //   // console.log("undefiend: " + deps);
          //   // }
          // } else {
          // }
        } else {
          alert("Passwords do not match")
        }
      }
    };
    
  useEffect(()=>{
    console.info({fromEffect: res});
    if(res.status ==="success"){
      alert("Password Rested Success!");
    }else if(res.status === "failed" && res.error==="no match"){
      alert("Email or Id is not correct!");
    }else if(res.status === "failed" && "from"){
      alert("the system is not responding try again latter");
    }
  },[res])
    return (
      <form method="get reset-password-form" onSubmit={(e) => resetSubmit(e)}>
        <div className="form-group">
          <label htmlFor="loginas" value="dummy">
            Account Type
          </label>
          <select
            className="loginasselect"
            onChange={(e) => {
              setAcType(e.target.value);
              // console.log(loginas);
            }}
            name="loginas"
            id="loginas"
          >
            {/* <option value="...">...</option> */}
            <option value="students">student</option>
            <option value="instructors">instructor</option>
            <option value="librarian">librarian</option>
            <option value="registrars">Registrar</option>
            <option value="program_officers">Program officer</option>
            <option value="department">Department head</option>
          </select>

          <small id="emailHelp" className="form-text text-muted">
            {/* Email that you have used while registration. */}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="email">ID</label>
          <input
            type="text"
            name="ID"
            required
            className="form-control"
            id="ID"
            aria-describedby="ID"
            placeholder="Enter Your ID"
            onChange={(e) => {
              setUId(e.target.value);
              // console.log(ID);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Enter your Email</label>
          <input
            required
            type="email"
            name=""
            className="form-control"
            id="password"
            placeholder="example@mail.com"
            onChange={(e) => {
              setEmail(e.target.value);
              // console.log(password);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Enter Your new Password</label>
          <input
            required
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={(e) => {
              setPass(e.target.value);
              // console.log(password);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Your new Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            required
            id="password"
            placeholder="Password"
            onChange={(e) => {
              setPass2(e.target.value);
              // console.log(password);
            }}
          />
        </div>
        <div className="buttons">
          <Button variant="danger">Cancel</Button>
          <button
            type="submit"
            onSubmit={(e) => {
              resetSubmit(e);
            }}
            className="btn btn-primary float-right"
          >
            Reset
          </button>
        </div>
      </form>
    );
  };
  return (
    <div className="main">
      <div className="col-md-4 m-auto shadow">
        <div className="image">
          <img src="./LogoUU.png" alt="" />
        </div>
        <h3>Login</h3>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Reset Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ThePasswordEraser />
          </Modal.Body>
        </Modal>
        <form method="get">
          <div className="form-group">
            <label htmlFor="loginas" value="dummy">
              Login As
            </label>
            <select
              className="loginasselect"
              onChange={(e) => {
                setloginas(e.target.value);
                // console.log(loginas);
              }}
              name="loginas"
              id="loginas"
            >
              <option value="students">student</option>
              <option value="instructors">instructor</option>
              <option value="librarian">librarian</option>
              <option value="registrars">Registrar</option>
              <option value="program_officers">Program officer</option>
              <option value="department">Department head</option>
            </select>

            <small id="emailHelp" className="form-text text-muted">
              {/* Email that you have used while registration. */}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="email">ID</label>
            <input
              type="text"
              name="ID"
              className="form-control"
              id="ID"
              aria-describedby="ID"
              placeholder="Enter Your ID"
              onChange={(e) => {
                setID(e.target.value);
                // console.log(ID);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Your Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
                // console.log(password);
              }}
            />
          </div>
          <a href="#" onClick={handleShow}>
            forget password?
          </a>
          {/* <div className="form-check">
            <input
              type="checkbox"
              name="checkbox"
              className="form-check-input"
              id="remember"
            />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div> */}
          <button
            type="submit"
            onClick={(e) => {
              loginsubmit(e);
            }}
            className="btn btn-primary float-right"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Body;
