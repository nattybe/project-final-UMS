import { getValue } from "@testing-library/user-event/dist/utils";
import React, { Component, useEffect, useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { baseUrl } from "../../globalConst";
import { Link, Navigate, useNavigate } from "react-router-dom";

function StudentContact() {
  const [by, setby] = useState("fname");
  const [search, setSearch] = useState("");
  const [conts, setConts] = useState();
  const books = [
    { Name: "Some one", Authority: "leader", link: "Contact" },
    { Name: "Some one", Authority: "leader", link: "Contact" },
    { Name: "Some one", Authority: "leader", link: "Contact" },
    { Name: "Some one", Authority: "leader", link: "Contact" },
    { Name: "Some one", Authority: "leader", link: "Contact" },
    { Name: "Some one", Authority: "leader", link: "Contact" },
    { Name: "Some one", Authority: "leader", link: "Contact" },
  ];
  useEffect(() => {
    getCont();
  }, [by, search]);
  useEffect(() => {}, []);
  
  const getCont = async () => {
    // console.log("getDep started");
    const formdata = new FormData();
    formdata.append("getContact", true);
    formdata.append("by", by);
    formdata.append("search", search);
    let dep = await fetch(baseUrl + "Contact.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formdata,
    });
    dep = await dep.json();
    setConts(dep);
    if (typeof conts !== "undefined") {
      console.warn(conts);
      // console.log("from deps " + deps);
    } else {
      // console.warn('undefiend: '+deps);
      // console.log("undefiend: " + deps);
    }
  };
  const nav=useNavigate();
  const contacter=(cont)=>{
    nav('/messages',{state:cont});
    // return (<Link to={'messages'}/>);
  }
  const contFiller = () => {
    if (typeof conts !== "undefined") {
      const contArray = [];
      if (conts.status === "success") {
        conts.data.map((con) => {
          contArray.push(
            <div className="item border row bg-light m-1">
              <div className="col d-flex">
                <i className="fas fa-user col" />
                <div className="col">
                  <div>Name:{con.fname + " " + con.lname}</div>
                  <div>Authority:{con.auth}</div>
                </div>
                <div className="col">
                  <div>Name:{con.fname + " " + con.lname}</div>
                  <div>Positions:{con.position}</div>
                </div>
              </div>
              <div className="col download">
                <a role="button" onClick={()=>contacter(con)}>
                  <i className="fas fa-comment-alt" />
                </a>
              </div>
            </div>
          );
        });
        return contArray;
      } else {
        return <h1 className="text-muted">Such Emptiness</h1>;
      }
    } else {
      const raul = [];
      books.map((book) => {
        raul.push(
          <div className="item border row bg-light m-1">
            <div className="col d-flex">
              <i className="fas fa-user col" />
              <div className="col">
                <div>Name:{book.Name}</div>
                <div>Authority:{book.Authority}</div>
              </div>
            </div>
            <div className="col download">
              <a href={"#" + book.link}>
                <i className="fas fa-comment-alt" />
              </a>
            </div>
          </div>
        );
      });
      return raul;
    }
  };
  return (
    <Container className="border comp-body-container">
      <h3>Contact</h3>
      <div className="flex search-box">
        <h4>Search By</h4>
        <select
          name="SearchBy"
          id="SearchBy"
          onChange={(e) => setby(e.target.value)}
        >
          <option value="fname">Name</option>
          <option value="id">ID</option>
          <option value="position">Position</option>
        </select>
        <input
          type="search"
          name="search-contact"
          id="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            getCont();
          }}
        >
          <i className="fas fa-search" />
        </button>
      </div>
      <div className="flex ">
        {}
        {contFiller()}
      </div>
    </Container>
  );
}

export default StudentContact;
