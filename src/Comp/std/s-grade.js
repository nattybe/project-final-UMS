import React, { Component, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { baseUrl } from "../../globalConst";

export default function StudentGrade() {
  const [loggerInfo, setLoggerInfo] = useState();
  const [res, setRes] = useState({ status: "not yet" });
  const [tcredit, setTcredit] = useState(0);
   const [totGr, setTotGr] = useState(0);
  const getLogger = () => {
    let logger = JSON.parse(window.sessionStorage.getItem("logger"));
    // console.log("logger => GetLogger " + (loggerInfo)?loggerInfo.id:null);
    setLoggerInfo(logger);
  };
  const getGrade = async () => {
    if (typeof loggerInfo !== "undefined") {
      const formdata = new FormData();
      formdata.append("ViewGrades", loggerInfo.id);
      let dep = await fetch(baseUrl + "grade.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formdata,
      });
      dep = await dep.json();
      setRes(dep);
      console.warn(dep);
      
    }
  };
  const gradeCalculator=(grade)=>{
    // let ltrGrd='';
    
    if (grade === 'A') {
       return 4;
    } else if (grade === 'B') {
      return 3;
    } if (grade === 'C') {
      return 2;
    } if (grade === 'D') {
      return 1;
    } if (grade === 'F') {
      return 0;
    }else{
      return "Over 100";
    }
  }
  const gradeFiller = () => {
    if (res.status === "success") {
      const tempGrade = [];
      res.data.map((grade,index) => {
        tempGrade.push(
          <tr>
            <td>{index+1}</td>
            <td>{grade.C_Code}</td>
            <td>{grade.C_Name}</td>
            <td>{grade.C_Credit_hour}</td>
            <td>{grade.C_Contact_hour}</td>
            <td>{grade.G_Percentile_Grade}</td>
            <td>{grade.G_Letter_Grade}</td>
          </tr>
        );
      });
      return(tempGrade)
    }
  };
  
  useEffect(() => {
    if (loggerInfo) {
      getGrade();
    } else {
      getLogger();
    }
  }, [loggerInfo]);
  useEffect(()=>{
    if(res.status === "success"){
      let tempGrade=0;
      let tempCredit=0;
      let cGpa=0;
      res.data.map((gr)=>{
        // alert(gr.C_Credit_hour)
        tempCredit=tempCredit+gr.C_Credit_hour
      })
      setTcredit(tempCredit);
    }
  },[res])
  return (
    <Container className="border comp-body-container">
      <h3>Grade Summary</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Cr.Hr.</th>
            <th>Co.Hr.</th>
            <th>Grade Point</th>
            <th>Letter Grade</th>
          </tr>
        </thead>
        <tbody>
        {gradeFiller()}
        </tbody>
        <tfoot>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Total Cr.hr: {tcredit}</td>
          {/* <td>Total Co.hr: 21</td> */}
          <td>CGPA: {res.status==="success"?res.CGPA:0}</td>
        </tfoot>
      </Table>
    </Container>
  );
}
