import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import editTask from "./editTask";

function EditModalButton(taskTitle) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit the task
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <TaskEditForm taskTitle={taskTitle}></TaskEditForm>
      </Modal>
    </>
  );
}

function TaskEditForm({taskTitle}) {
  const [title, setTitle] = useState(taskTitle);
  const [user, setUser] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priorityLevel, setPriorityLevel] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Form
      onSubmit={() => editTask(title, user, dueDate, priorityLevel, description)}
    >
      <Form.Group className="title">
        <Form.Label>Task Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="User">
        <Form.Label>User</Form.Label>
        <Form.Control
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="Due Date">
        <Form.Label>Due Date</Form.Label>
        <Form.Control
          type="text"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="Priority Level">
        <Form.Label>Priority Level</Form.Label>
        <Form.Control
          type="text"
          value={priorityLevel}
          onChange={(e) => setPriorityLevel(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="Description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          value={description}   
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default EditModalButton;
