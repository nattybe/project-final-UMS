import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <Container flex className=" text-align-center">
      <h1>404</h1>
      <p> There is no such a link</p>

      <Link className="btn btn-primary float-right border border-dark" to="/">
        Back To Home
      </Link>
    </Container>
  );
}

export default ErrorPage;
