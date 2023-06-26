import React, { Component, useEffect, useState } from "react";
import  { Button, Table } from "react-bootstrap";
import { baseUrl } from "../../globalConst";
function Schedule() {
  const [schedule, setSchedule] = useState();
  const [loggerInfo, setLoggerInfo] = useState();

  const getLogger = () => {
    let logger = JSON.parse(window.sessionStorage.getItem("logger"));
    // console.log("logger => GetLogger " + (loggerInfo)?loggerInfo.id:null);
    setLoggerInfo(logger);
  };
  const scheduleFiller = () => {
    if (typeof schedule !== "undefined") {
      const tempschedule = [];
      for (let [key, value] of Object.entries(schedule)) {
        const tempRow = [];
        for (let [subKey, subValue] of Object.entries(value)) {
          tempRow.push(
            <td className="bg-info schedule-items">
              <div className="info-but">
                <div className="">
                  <section>Time: {subValue.T_Time}</section>
                  <section>Course: {subValue.C_Name}</section>
                  <section>Room: {subValue.Sc_Room+" "+subValue.R_Type}</section>
                </div>
              </div>
            </td>
          );
        }
        tempschedule.push(
          <tr>
            <th>{key}</th>
            {tempRow}
          </tr>
        );
      }
      return tempschedule;
    }
  };
  const getSchedule = async () => {
    if (loggerInfo) {
      console.log("getProgram started");
      const fd = new FormData();
      fd.append("getScheduleForInstructor", loggerInfo.id);
      let dep = await fetch(baseUrl + "CreateSchedule.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: fd,
      });
      // console.log(dep.json());
      dep = await dep.json();
      setSchedule(dep);
    }
  };
  useEffect(() => {
    if (typeof loggerInfo !== "undefined") {
      getSchedule();
    } else {
      getLogger();
    }
  }, [loggerInfo]);
  return (
    <div className="container comp-body-container border">
      <h3>Schedule</h3>
      <Table striped bordered hover responsive>
        <tbody>{scheduleFiller()}</tbody>
      </Table>
    </div>
  );
}

export default Schedule;
