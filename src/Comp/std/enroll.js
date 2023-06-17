import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { baseUrl } from "../../globalConst";

function Enroll() {
  const [loggerInfo, setLoggerInfo] = useState();
  const [offeing, setOffeing] = useState();
  const [offCourses, setOffCourses] = useState([]);
  const [offeringCoursesForAdd, setOfferingCoursesForAdd] = useState({
    status: "not yet",
  });
  const [res, setRes] = useState({ status: "not yet" });

  const [labFee, setLabFee] = useState(0);
  const [tutionFee, setTutionFee] = useState(0);
  const [maxCredit, setMaxCredit] = useState(0);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const closeHandler = (id) => {
    const diag = document.getElementById(id);
    diag.close();
  };
  const addShowHandler = (e) => {
    const diag = document.getElementById("diagAdd");
    // diag.close();
    getOfferingCoursesForAdd();

    diag.showModal();
  };
  const getLogger = () => {
    let logger = JSON.parse(window.sessionStorage.getItem("logger"));
    // console.log("logger => GetLogger " + logger);
    setLoggerInfo(logger);
  };
  const getOfferingCourses = async () => {
    // console.log(loggerInfo);
    if (typeof loggerInfo !== "undefined") {
      // console.log("getOfCourse started");
      const formdata = new FormData();
      formdata.append("getOfferingCourse", loggerInfo.section);
      let dep = await fetch(baseUrl + "enroll.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formdata,
      });
      let depa = await dep.json();
      // setOffCourses(dep);
      if (typeof depa !== "undefined") {
        if (depa.status === "success") {
          setOffeing(depa.data.offering);
          setOffCourses(depa.data.courses);
          // console.warn({
          //   from: "ASS",
          //   courses: offCourses,
          //   offering: offeing,
          // });
        }
      }
      // console.error(
      //   "getMessages :",
      //   loggerInfo.id,
      //   " SeTab :",
      //   loggerInfo.loginas,
      //   " ReTab: ",
      //   cont.auth,
      //   " ReId:   ",
      //   cont.id
      // );
      // if (messages.status === "success") {
      //   // console.warn(messages);
      //   // console.log("from deps " + deps);
      // } else {
      //   // console.warn('undefiend: '+deps);
      //   // console.log("undefiend: " + deps);
      // }
    } else {
    }
  };
  const offeringCoursesFiller = () => {
    const tempMessageBox = [];
    if (typeof offeing !== "undefined" && typeof offCourses !== "undefined") {
      // console.warn({ coursess: offCourses });
      offCourses.map((mes, index) => {
        // if (mes.sender_id === loggerInfo.id) {
        tempMessageBox.push(
          <tr>
            <td>{mes.C_Code}</td>
            <td>{mes.C_Name}</td>
            <td>{mes.C_Credit_hour + "/" + mes.C_Contact_hour}</td>
            <td>{true ? mes.C_Code : false}</td>
            <td>120</td>
            <td>Non</td>
            <td
              className="bg-danger border border-3 border-dark"
              onClick={() => deleteHandler(mes)}
            >
              Drop
            </td>
          </tr>
        );
        // } else {
        // tempMessageBox.push(
        //   <div className="received-message">{mes.content}</div>
        // );
        // }
      });
      return tempMessageBox;
      // } else if (messages.status === "failed") {
      //   // console.error(messages);
      //   return (
      //     <h1 className="text-muted text-center mt-5">
      //       Send something to start a conversation
      //     </h1>
      //   );
    }
  };
  const getOfferingCoursesForAdd = async () => {
    // console.log(loggerInfo);
    if (typeof loggerInfo !== "undefined") {
      // console.log("getOfferingCoursesForAdd started");
      const formdata = new FormData();
      formdata.append("getOfferingCoursesForAdd", loggerInfo.section);
      let dep = await fetch(baseUrl + "enroll.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formdata,
      });
      setOfferingCoursesForAdd(await dep.json());
      // setOffCourses(dep);
      // if (typeof depa !== "undefined") {
      //   if (depa.status === "success") {
      //     setOffeing(depa.data.offering);
      //     setOffCourses(depa.data.courses);
      //     console.warn({
      //       from: "ASS",
      //       courses: offCourses,
      //       offering: offeing,
      //     });
      //   }
      // }
      // console.error(
      //   "getMessages :",
      //   loggerInfo.id,
      //   " SeTab :",
      //   loggerInfo.loginas,
      //   " ReTab: ",
      //   cont.auth,
      //   " ReId:   ",
      //   cont.id
      // );
      // if (messages.status === "success") {
      //   // console.warn(messages);
      //   // console.log("from deps " + deps);
      // } else {
      //   // console.warn('undefiend: '+deps);
      //   // console.log("undefiend: " + deps);
      // }
    } else {
    }
  };
  const offeringCoursesForAddFiller = () => {
    const tempMessageBox = [];
    if (offeringCoursesForAdd.status === "success") {
      // console.warn({ coursess: offCourses });
      offeringCoursesForAdd.data.map((mes) => {
        // if (mes.sender_id === loggerInfo.id) {

        tempMessageBox.push(
          <tr>
            <td>{mes.C_Code}</td>
            <td>{mes.C_Name}</td>
            <td>{mes.C_Credit_hour + "/" + mes.C_Contact_hour}</td>
            <td>{mes.C_Prerequisites}</td>
            <td>120</td>
            <td>Non</td>
            <td
              className="bg-success border border-3 border-dark"
              role="button"
              onClick={() => {
                // setOffCourses();
                if (totalCreditHour >= maxCredit) {
                  alert("You have no enough credit hour");
                } else {
                  setTotalCreditHour(totalCreditHour + mes.C_Credit_hour);
                  let arr = [...offCourses, mes];
                  setOffCourses(
                    arr.filter((item, index) => {
                      return !arr
                        .slice(0, index)
                        .some((prevItem) => prevItem.C_Code === item.C_Code);
                    })
                  );
                  alert("course Added");
                }
              }}
            >
              Add
            </td>
          </tr>
        );
        // } else {
        // tempMessageBox.push(
        //   <div className="received-message">{mes.content}</div>
        // );
        // }
      });
      return tempMessageBox;
      // } else if (messages.status === "failed") {
      //   // console.error(messages);
      //   return (
      //     <h1 className="text-muted text-center mt-5">
      //       Send something to start a conversation
      //     </h1>
      //   );
    }
  };
  useEffect(() => {
    if (typeof loggerInfo === "undefined") {
      getLogger();
    }
  }, [loggerInfo]);
  useEffect(() => {
    getOfferingCourses();
  }, [loggerInfo]);
  useEffect(() => {
    getOfferingCoursesForAdd();
  }, []);
  useEffect(() => {
    if (res.status === "success") {
      alert("Successs");
      console.info({ res: res });
    }
  }, [res]);
  useEffect(() => {
    if (typeof offeing !== "undefined" && offCourses.length > 0) {
      setMaxCredit(0);
      // alert('hello')
      let num = 0;

      offCourses.map((cour) => {
        num = num + cour.C_Credit_hour;
        return cour.C_Credit_hour;
      });
      setMaxCredit(num);
      setTotalCreditHour(num);
    }
  }, [offeing]);
  const deleteHandler = (cour) => {
    // offCourses.filter()
    setOffCourses(offCourses.filter((item) => item.C_Code !== cour.C_Code));
    setTotalCreditHour(totalCreditHour - cour.C_Credit_hour);
    alert("Course Dropped");
  };
  const createHandler = async () => {
    if (offCourses.length > 0) {
      console.info({ message: "create" });
      const formData = new FormData();
      formData.append("createCurrentCourse", loggerInfo.id);
      formData.append("pAmount", "100");
      formData.append("pType", "Enrollment");
      // formData.append("pDescr", "");
      // formData.append("pReason", "");
      // formData.append("pReason2", "");
      formData.append("course", JSON.stringify(offCourses));
      let res = await fetch(baseUrl + "enroll.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
      let ress = await res.json();
      // console.warn("here comes the response");
      // console.warn({createLast:ress});
      setRes(ress);

      // console.log(resp);
      // console.log(res.status);
      //this bad boy sends the courses as an array
      //next send the courses and the OC information
    } else {
      alert("No courses added");
    }
  };

  //  TODO: get the courses in the grades and check for the Prerequisites and allowed credit/contact hr then filter out the courses and alert the Filteration if there is match and on agreement to save to the database
  return (
    <div className="comp-body-container">
      <dialog id="diagAdd" className="diag-parax">
        <div className="diag-header">
          <div className="diag-title">Add Course</div>
          <span
            role="button"
            onClick={() => closeHandler("diagAdd")}
            className="diag-close"
          >
            X
          </span>
        </div>
        <div className="diag-body">
          <Table striped hover bordered>
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Cr/Co. hrs</th>
                <th>PreRequisite</th>
                <th>Lab</th>
                <th>Field Practice</th>
              </tr>
            </thead>
            <tbody>{offeringCoursesForAddFiller()}</tbody>
          </Table>
        </div>
      </dialog>
      <h3>Enroll for the coming semester</h3>
      <div className="enroll">
        <div className="d-flex p-2">
          <div className="">
            <section>
              Year: <span>2</span>
            </section>
          </div>
          <div className="">
            <section>
              Semester: <span>1</span>
            </section>
          </div>
          <div className="">
            <section>
              payment Code: <span>16754</span>
            </section>
          </div>
          <div>
            <Button onClick={() => createHandler()}>Pay</Button>
          </div>
          <div>
            <Button onClick={(e) => addShowHandler(e)}>Add</Button>
          </div>
        </div>
        <div className="m-3">
          <Table striped hover bordered>
            <thead>
              <tr>
                <th>Max Credit Hour</th>
                <th>{maxCredit}</th>
              </tr>
              <tr>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Cr/Co. hrs</th>
                <th>Module</th>
                <th>Lab</th>
                <th>research</th>
                <th>Field Practice</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{offeringCoursesFiller()}</tbody>
            {/* <tbody>
              <tr>
                <td>h123</td>
                <td>Internet Programing</td>
                <td>3/4</td>
                <td>Non</td>
                <td>120</td>
                <td>Non</td>
                <td className="bg-danger border border-3 border-dark">Drop</td>
              </tr>
              <tr>
                <td>h123</td>
                <td>Internet Programing</td>
                <td>3/4</td>
                <td>Non</td>
                <td>120</td>
                <td>Non</td>
                <td className="bg-danger border border-3 border-dark">Drop</td>
              </tr>
              <tr>
                <td>h123</td>
                <td>Internet Programing</td>
                <td>3/4</td>
                <td>Non</td>
                <td>120</td>
                <td>Non</td>
                <td className="bg-danger border border-3 border-dark">Drop</td>
              </tr>
              <tr>
                <td>h123</td>
                <td>Internet Programing</td>
                <td>3/4</td>
                <td>Non</td>
                <td>120</td>
                <td>Non</td>
                <td className="bg-danger border border-3 border-dark">Drop</td>
              </tr>
            </tbody> */}
          </Table>
        </div>

        <div className="d-flex m-3">
          <Table striped hover bordered>
            <tbody>
              <tr>
                <th>Name: </th>
                <td>John Smilga</td>
              </tr>
              <tr>
                <th>Section: </th>
                <td>CCS1R1N6</td>
              </tr>
              <tr>
                <th>Department: </th>
                <td>Computer Science</td>
              </tr>
              <tr>
                <th>Field of Study: </th>
                <td>Computer Science</td>
              </tr>
            </tbody>
          </Table>
          <Table striped hover bordered>
            <tbody>
              <tr>
                <th>Total Cr/Co Hr.</th>
                <td>{totalCreditHour}/20</td>
              </tr>
              <tr>
                <th>Tuition Fee</th>
                <td>{tutionFee}</td>
              </tr>
              <tr>
                <th>Module Fee</th>
                <td>300</td>
              </tr>
              <tr>
                <th>Lab Fee</th>
                <td>300</td>
              </tr>
              <tr>
                <th>Service Fee</th>
                <td>300</td>
              </tr>
              <tr>
                <th>Research Fee</th>
                <td>300</td>
              </tr>
              <tr>
                <th>Field-practice Fee</th>
                <td>300</td>
              </tr>
              <tr>
                <th>Penalty Fee</th>
                <td>300</td>
              </tr>
              <tr>
                <th>Penalty Fee</th>
                <td>300</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Grand Total</th>
                <td>300</td>
              </tr>
            </tfoot>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Enroll;
