import React from "react";
import { Container } from "react-bootstrap";

function ErrorPage() {
  return (
    <Container flex className=" text-align-center">
      <h1>404</h1>
      <p> There is no such a link</p>
    </Container>
  );
}

export default ErrorPage;
