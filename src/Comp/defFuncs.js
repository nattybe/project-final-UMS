import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

const AlertBy = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="alert-by-m" onClick={()=>setShow(false)}>
      <Alert show={show} className="" variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>
    </div>
  );
};

const useFetchLogger=() => {

}
export { AlertBy };
