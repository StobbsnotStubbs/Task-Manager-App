import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import addTask from "./AddTask";

function AddModalButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Task
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <TaskAddForm></TaskAddForm>
      </Modal>
    </>
  );
}

function TaskAddForm() {
  const [title, setTitle] = useState("");
  const [user, setUser] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priorityLevel, setPriorityLevel] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Form
      onSubmit={() => addTask(title, user, dueDate, priorityLevel, description)}
    >
      <Form.Group className="title">
        <Form.Label>Task Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Task Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="User">
        <Form.Label>User</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter User Name"
          onChange={(e) => setUser(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="Due Date">
        <Form.Label>Due Date</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Date in YYYY/MM/DD Format"
          onChange={(e) => setDueDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="Priority Level">
        <Form.Label>Priority Level</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Priority High/Medium/Low"
          onChange={(e) => setPriorityLevel(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="Description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Brief Task Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddModalButton;
