import React, { Component } from "react";
import bootstrap, { Table } from "react-bootstrap";
function StudentSchedule() {
  const fakeschedule = [
    { section: "R17", course: "Introduction to Computer Science", empty: true },
    { section: "R17", course: "Introduction to Computer Science", empty: true },
    { section: "R32", course: "CSCI101", empty: false },
    { section: "R32", course: "CSCI403", empty: false },
    { section: "R32", course: "Mathematics I", empty: true },
    { section: "R32", course: "Mathematics I", empty: true },
    { section: "L3", course: "Web Technologies ", empty: true },
    { section: "L3", course: "Web Technologies ", empty: true },
    { section: "R", course: "CSCI202", empty: false },
    { section: "R4", course: "English Communication Skills I", empty: true },
  ];
  const fakeschedule2 = [
    { section: "R17", course: "Introduction to Computer Science", empty: true },
    { section: "R17", course: "Introduction to Computer Science", empty: true },
    { section: "R32", course: "Mathematics I", empty: true },
    { section: "R32", course: "Mathematics I", empty: true },
    { section: "R32", course: "CSCI403", empty: false },
    { section: "R32", course: "CSCI101", empty: false },
    { section: "L3", course: "Web Technologies ", empty: true },
    { section: "L3", course: "Web Technologies ", empty: true },
    { section: "R4", course: "English Communication Skills I", empty: true },
    { section: "R", course: "CSCI202", empty: false },
  ];
  const fakeschedule3 = [
    { section: "R32", course: "CSCI403", empty: false },
    { section: "R32", course: "CSCI101", empty: false },
    { section: "R17", course: "Introduction to Computer Science", empty: true },
    { section: "R17", course: "Introduction to Computer Science", empty: true },
    { section: "R", course: "CSCI202", empty: false },
    { section: "R4", course: "English Communication Skills I", empty: true },
    { section: "R32", course: "Mathematics I", empty: true },
    { section: "R32", course: "Mathematics I", empty: true },
    { section: "L3", course: "Web Technologies ", empty: true },
    { section: "L3", course: "Web Technologies ", empty: true },
  ];
  const fakeschedule4 = [
    { section: "R32", course: "CSCI403", empty: false },
    { section: "R17", course: "Introduction to Computer Science", empty: true },
    { section: "R17", course: "Introduction to Computer Science", empty: true },
    { section: "R32", course: "CSCI101", empty: false },
    { section: "R", course: "CSCI202", empty: false },
    { section: "R32", course: "Mathematics I", empty: false },
    { section: "R4", course: "English Communication Skills I", empty: true },
    { section: "R32", course: "Mathematics I", empty: false },
    { section: "L3", course: "Web Technologies ", empty: false },
    { section: "L3", course: "Web Technologies ", empty: false },
  ];
 
    return (
      <div className="container comp-body-container border">
      <h3>Schedule</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>1 Se</th>
              <th>2 Se</th>
              <th>3 Se</th>
              <th>4 Se</th>
              <th>5 Se</th>
              <th>6 Se</th>
              <th>7 Se</th>
              <th>8 Se</th>
              <th>9 Se</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mon</td>
              {fakeschedule.map((sch) => {
                  if(sch.empty){
                    return (
                    <td className="bg-info schedule-items">
                      <div className="info-but">
                        <div className="infos">
                          <section>{sch.section}</section>
                          <section>{sch.course}</section>
                        </div>
                        {/* <Button>Remove</Button> */}
                      </div>
                    </td>
                  );
                  }else{
                    return (
                    <td className="">
                      <h4>Empty</h4>
                    </td>);
                  }
                  
                })}
            </tr>
            <tr>
              <td>Tue</td>
              {fakeschedule2.map((sch) => {
                  if(sch.empty){
                    return (
                    <td className="bg-info schedule-items">
                      <div className="info-but">
                        <div className="infos">
                          <section>{sch.section}</section>
                          <section>{sch.course}</section>
                        </div>
                        {/* <Button>Remove</Button> */}
                      </div>
                    </td>
                  );
                  }else{
                    return (
                    <td className="">
                      <h4>Empty</h4>
                    </td>);
                  }
                  
                })}
            </tr>
            <tr>
              <td>Wed</td>
              {fakeschedule3.map((sch) => {
                  if(sch.empty){
                    return (
                    <td className="bg-info schedule-items">
                      <div className="info-but">
                        <div className="infos">
                          <section>{sch.section}</section>
                          <section>{sch.course}</section>
                        </div>
                        {/* <Button>Remove</Button> */}
                      </div>
                    </td>
                  );
                  }else{
                    return (
                    <td className="">
                      <h4>Empty</h4>
                    </td>);
                  }
                  
                })}
            </tr>
            <tr>
              <td>Thr</td>
              {fakeschedule4.map((sch) => {
                  if(sch.empty){
                    return (
                    <td className="bg-info schedule-items">
                      <div className="info-but">
                        <div className="infos">
                          <section>{sch.section}</section>
                          <section>{sch.course}</section>
                        </div>
                        {/* <Button>Remove</Button> */}
                      </div>
                    </td>
                  );
                  }else{
                    return (
                    <td className="">
                      <h4>Empty</h4>
                    </td>);
                  }
                  
                })}
            </tr>
            <tr>
              <td>Fri</td>
            </tr>
            <tr>
              <td>Sat</td>
            </tr>
            <tr>
              <td>Sun</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }


export default StudentSchedule;
