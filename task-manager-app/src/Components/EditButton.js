import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import editTask from "./editTask";

function EditModalButton(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit the task
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <TaskEditForm
          currentTaskTitle={props.taskTitle}
          currentDescription={props.description}
          currentUser={props.user}
          currentPriorityLevel={props.priorityLevel}
          currentStatus={props.status}
          currentDueDate={props.dueDate}
          Id={props.id}
        ></TaskEditForm>
      </Modal>
    </>
  );
}

function TaskEditForm({
  currentTaskTitle,
  currentDescription,
  currentUser,
  currentPriorityLevel,
  currentStatus,
  currentDueDate,
  Id,
}) {
  const [taskTitle, setTaskTitle] = useState(currentTaskTitle);
  const [user, setUser] = useState(currentUser);
  const [dueDate, setDueDate] = useState(currentDueDate);
  const [priorityLevel, setPriorityLevel] = useState(currentPriorityLevel);
  const [description, setDescription] = useState(currentDescription);
  

  return (
    <Form onSubmit={() => editTask(Id, taskTitle, user, dueDate, priorityLevel, description)}>
      <Form.Group className="title">
        <Form.Label>Task Title</Form.Label>
        <Form.Control type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
      </Form.Group>

      <Form.Group className="User">
        <Form.Label>User</Form.Label>
        <Form.Control type="text" value={user} onChange={(e) => setUser(e.target.value)} />
      </Form.Group>

      <Form.Group className="Due Date">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="text" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </Form.Group>

      <Form.Group className="Priority Level">
        <Form.Label>Priority Level</Form.Label>
        <Form.Control type="text" value={priorityLevel} onChange={(e) => setPriorityLevel(e.target.value)} />
      </Form.Group>

      <Form.Group className="Description">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default EditModalButton;
