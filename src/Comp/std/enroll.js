import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { baseUrl } from "../../globalConst";

function Enroll() {
  const [offeing, setOffeing] = useState();
  const [offCourses, setOffCourses] = useState([]);

  const [offeringCoursesForAdd, setOfferingCoursesForAdd] = useState({
    status: "not yet",
  });
  const [res, setRes] = useState({ status: "not yet" });

  const [labFee, setLabFee] = useState(0);
  const [tutionFee, setTutionFee] = useState(0);
  const [maxCredit, setMaxCredit] = useState(0);
  const [moduleFee, setModuleFee] = useState(0);
  const [fieldFee, setFieldFee] = useState(0);
  const [researchFee, setResearchFee] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [registralFee, setRegistralFee] = useState(300);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const [totalContactHour, setTotalContactHour] = useState(0);
  const [payLink, setPayLink] = useState("has");

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
  const [loggerInfo, setLoggerInfo] = useState();
  const getOfferingCourses = async () => {
    // alert(loggerInfo)
    if (loggerInfo) {
      // if (typeof loggerInfo.section==="number") {
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
      console.warn({ofering: depa});
      if (typeof depa !== "undefined") {
        if (depa.status === "success") {
          setOffeing(depa.data.offering);
          setOffCourses(depa.data.courses);
        }
        // }
      }
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
            <td>{mes.module ? <>&#10003;</> : ""}</td>
            <td>{mes.lab ? <>&#10003;</> : ""}</td>
            <td>{mes.research ? <>&#10003;</> : ""}</td>
            <td>{mes.field_practice ? <>&#10003;</> : ""}</td>
            <td
              className="bg-danger border border-3 border-dark"
              onClick={() => deleteHandler(mes)}
            >
              Drop
            </td>
            {/* <td>{()=>{if(mes){return('hello')}else{return('hi')}}}</td> */}
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
      // alert("can't get the payment server try again later")
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
    } else {
      getOfferingCourses();
    }
  }, [loggerInfo]);
  // useEffect(() => {
  //   getOfferingCourses();
  // }, [loggerInfo]);
  useEffect(() => {
    getOfferingCoursesForAdd();
  }, []);
  useEffect(() => {
    if (res.status === "success") {
      // alert("Successs");
      if (res.what === "Payment response") {
        // alert("Payment response");
        let link = res.data;
        window.open(link.data.checkout_url, "_self");
        // console.info({ resPOS: link });
        setPayLink(link.data.checkout_url);
        document.getElementById("payerDiag").close();
        // document.getElementById("payerDiag").showModal();
      }
    }
  }, [res]);
  useEffect(() => {
    if (typeof offeing !== "undefined") {
      let cred = 0;
      let cont = 0;
      let tutionfe = 0;
      let labfe = 0;
      let modulefe = 0;
      let fieldfe = 0;
      let reasearchfe = 0;
      offCourses.map((cour) => {
        cred = cred + cour.C_Credit_hour;
        cont = cont + cour.C_Contact_hour;
        if (cour.tution === 1) {
          tutionfe = tutionfe + offeing.tution_fee * cour.C_Credit_hour;
          // alert("tution fe")
        }
        if (cour.lab === 1) {
          labfe = labfe + offeing.lab_fee;
        }
        if (cour.module === 1) {
          modulefe = modulefe + offeing.module_fee;
        }
        if (cour.field_practice === 1) {
          fieldfe = fieldfe + offeing.field_practice_fee;
        }
        if (cour.research === 1) {
          reasearchfe = reasearchfe + offeing.research_fee;
        }
        return cour.C_Credit_hour;
      });
      setResearchFee(reasearchfe);
      setFieldFee(fieldfe);
      setModuleFee(modulefe);
      setLabFee(labfe);
      setTutionFee(tutionfe);
      setTotalCreditHour(cred);
      setTotalContactHour(cont);
      setGrandTotal(
        reasearchfe + fieldfe + modulefe + tutionfe + labfe + registralFee
      );
    }
  }, [offeing, offCourses]);
  useEffect(() => {
    if (typeof offeing !== "undefined" && offCourses.length > 0) {
      let num = 0;
      offCourses.map((cour) => {
        num = num + cour.C_Credit_hour;
      });
      setMaxCredit(num);
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
      formData.append("pAmount", grandTotal);
      formData.append("pType", "Enrollment");
      formData.append("fname", loggerInfo.fname);
      formData.append("lname", loggerInfo.lname);
      formData.append("phone_number", loggerInfo.phone_no1);
      formData.append("email", loggerInfo.email);
      // formData.append("phone_number",loggerInfo.phone_no1);
      //TODO: after sending the info and accepting the response if(success) make the payment in a diffrent page and refresh this page after finishing
      // formData.append("pDescr", "");
      // formData.append("pReason", "");
      // formData.append("pReason2", "");
      formData.append("course", JSON.stringify(offCourses));
      document.getElementById("loadingDiag").showModal();
      let res = await fetch(baseUrl + "enroll.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      let ress = await res.json();
      console.warn({hello:ress});

      // console.warn("here comes the response");
      // console.warn({createLast:JSON.parse(ress.data)});
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
      <dialog id="payerDiag">
        <iframe src={payLink} width="400" height="900" title="pay"></iframe>
      </dialog>
      <h3>Enroll for the coming semester</h3>
      <div className="enroll">
        <div className="d-flex p-2">
          <div className="">
            <section>
              {/* Year: <span>2</span> */}
            </section>
          </div>
          <div className="">
            <section>
              {/* Semester: <span>1</span> */}
            </section>
          </div>
          <div className="">
            <section>
              {/* payment Code: <span>16754</span> */}
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
                <th>ID: </th>
                <td>{loggerInfo ? loggerInfo.id : " "}</td>
              </tr>
              <tr>
                <th>Name: </th>
                <td>
                  {loggerInfo ? loggerInfo.fname + " " + loggerInfo.lname : ""}
                </td>
              </tr>
              <tr>
                <th>Section: </th>
                <td>{offeing ? offeing.Se_Name : " "}</td>
              </tr>
              <tr>
                <th>Department: </th>
                <td>{offeing ? offeing.D_Name : " "}</td>
              </tr>
              {/* <tr>
                <th>Field of Study: </th>
                <td>Computer Science</td>
              </tr> */}
            </tbody>
          </Table>
          <Table striped hover bordered>
            <tbody>
              <tr>
                <th>Total Cr/Co Hr.</th>
                <td>
                  {totalCreditHour}/{totalContactHour}
                </td>
              </tr>
              <tr>
                <th>Registral Fee</th>
                <td>{registralFee}</td>
              </tr>
              <tr>
                <th>Tuition Fee</th>
                <td>{tutionFee}</td>
              </tr>
              <tr>
                <th>Module Fee</th>
                <td>{moduleFee}</td>
              </tr>
              <tr>
                <th>Lab Fee</th>
                <td>{labFee}</td>
              </tr>
              <tr>
                <th>Service Fee</th>
                <td>0</td>
              </tr>
              <tr>
                <th>Research Fee</th>
                <td>{researchFee}</td>
              </tr>
              <tr>
                <th>Field-practice Fee</th>
                <td>{fieldFee}</td>
              </tr>
              <tr>
                <th>Penalty Fee</th>
                <td>0</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Grand Total</th>
                <td>{grandTotal}</td>
              </tr>
            </tfoot>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Enroll;
