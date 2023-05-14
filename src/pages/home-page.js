import React, { Component } from "react";
import { Carousel, Container } from "react-bootstrap";
import Header from "../Comp/header";
import Body from "../Comp/body";
import Footer from "../Comp/footer";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="comp-body-container home-page-bod">
        {/* <ul className="d-flex">
          <ul className="m-3"><Link className="btn btn-primary float-right border border-dark" to="/login">Login</Link></ul>
          <ul className="m-3"><Link className="btn btn-primary float-right border border-dark" to="/student">Student</Link></ul>
          <ul className="m-3"><Link className="btn btn-primary float-right border border-dark" to="/instructor">Instructor</Link></ul>
          <ul className="m-3"><Link className="btn btn-primary float-right border border-dark" to="/library">Library</Link></ul>
          <ul className="m-3"><Link className="btn btn-primary float-right border border-dark" to="/programoffice">Program Office</Link></ul>
          <ul className="m-3"><Link className="btn btn-primary float-right border border-dark" to="/registrar">Registrar Office</Link></ul>
        </ul> */}
        <Carousel className="m-5 pt-1 mt-1 shadow">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./bg-imgs/img 6.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Unity University</h1>
              <p className="h4">
                Quality House
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./bg-imgs/img 1.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1>Unity University</h1>
              <p className="h4">
                House of Knowledge
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./bg-imgs/img 8.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1>Unity University</h1>
              <p className="h4">
              Quality House
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="about-background container">
          <h3>Background</h3>
          <section>
            <p>Unity University is a prominent private institution of higher education located in Addis Ababa, the capital city of Ethiopia. The university was established in 1993 with a vision of providing quality education to students from diverse backgrounds in Ethiopia and beyond. Unity University has since grown to become one of the leading universities in the country, with a reputation for academic excellence, research innovation, and community engagement.</p>
            <p>As the student population at Unity University has grown over the years, the university recognized the need for an efficient and effective management system to support its academic and administrative operations. In response to this need, the university has implemented a comprehensive university management system that incorporates various modules for managing student records, course schedules, faculty and staff information, financial transactions, and other administrative functions.</p>
            <p>The university management system at Unity University is a web-based platform that allows for easy access and management of academic and administrative data. The system provides a centralized database that can be accessed by authorized personnel from different departments within the university. It is designed to streamline processes and reduce the administrative burden on faculty and staff, while ensuring the accuracy and security of data.</p>
            <p>Overall, the university management system at Unity University has been instrumental in supporting the academic and administrative operations of the university. The system has improved efficiency, accuracy, and security in managing student records, faculty and staff information, and financial transactions, thereby enabling the university to provide quality education and research to its students and contribute to the development of Ethiopia and beyond.</p>
          </section>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default HomePage;
