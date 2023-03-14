import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AboutModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
      >
        About
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Body>
          This web app was made by Daniel, Ermias, Kevin, Leoni! Source code
          found{" "}
          <a href="https://github.com/StobbsnotStubbs/Task-Manager-App">here</a>
          .
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AboutModal;
