import React, { Component, useEffect } from "react";
import { Carousel, Container } from "react-bootstrap";
import Header from "../Comp/header";
import Body from "../Comp/body";
import Footer from "../Comp/footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function HomePage() {
  const nav = useNavigate();
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const param2 = searchParams.get("PaymentSuccess");
    // console.warn({"this is the ":param2});
    if (param2) {
      nav("/student?PaymentSuccess=" + param2);
    }
  }, []);
  return (
    <div className="comp-body-container home-page-bod">
      <Carousel className="shadow">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./bg-imgs/img 6.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Unity University</h1>
            <p className="h4">Quality House</p>
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
            <p className="h4">House of Knowledge</p>
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
            <p className="h4">Quality House</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="shadow mt-5 d-flex second-carou">
        <Carousel className="shadow w-50 second-carou">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./bg-imgs/img 6.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Unity University</h1>
              <p className="h4">Quality House</p>
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
              <p className="h4">House of Knowledge</p>
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
              <p className="h4">Quality House</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="about-background w-50">
          <h3 className="h2">Background</h3>
          <section>
            <h4>
              Unity University is a prominent private institution of higher
              education located in Addis Ababa, the capital city of Ethiopia.
              The university was established in 1993 with a vision of providing
              quality education to students from diverse backgrounds in Ethiopia
              and beyond. Unity University has since grown to become one of the
              leading universities in the country, with a reputation for
              academic excellence, research innovation, and community
              engagement.
            </h4>
            {/* <p>As the student population at Unity University has grown over the years, the university recognized the need for an efficient and effective management system to support its academic and administrative operations. In response to this need, the university has implemented a comprehensive university management system that incorporates various modules for managing student records, course schedules, faculty and staff information, financial transactions, and other administrative functions.</p>
            <p>The university management system at Unity University is a web-based platform that allows for easy access and management of academic and administrative data. The system provides a centralized database that can be accessed by authorized personnel from different departments within the university. It is designed to streamline processes and reduce the administrative burden on faculty and staff, while ensuring the accuracy and security of data.</p> */}
          </section>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default HomePage;
