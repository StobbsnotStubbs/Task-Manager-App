import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import deleteTask from "./DeleteTask";
import EditModalButton from "./EditButton";
import AddModalButton from "./AddButton";

function TaskCard(props) {
  const id = props.id;
  const taskTitle = props.taskTitle;
  const user = props.user;
  const dueDate = props.dueDate;
  const priorityLevel = props.priorityLevel;
  const description = props.description;
  const status = props.status;
  const setTasks = props.setTasks;
  const createdAt = props.createdAt
    .replace("T", " ")
    .replace("Z", " ")
    .slice(0, -5);
  const updatedAt = props.updatedAt
    .replace("T", " ")
    .replace("Z", " ")
    .slice(0, -5);

  return (
    // <Row xs={"1"} md={"1"} lg={"2"} xl={"3"} className="g-4">
    <div>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{taskTitle}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Assigned to: {user}</ListGroup.Item>
              <ListGroup.Item>Priority: {priorityLevel}</ListGroup.Item>
              <ListGroup.Item>Status: {status}</ListGroup.Item>
              <ListGroup.Item>Due Date: {dueDate}</ListGroup.Item>
              {<ListGroup.Item>Created At: {createdAt}</ListGroup.Item>}
              {<ListGroup.Item>Updated At: {updatedAt}</ListGroup.Item>}
            </ListGroup>
            <Card.Body>
              {/* <Button onClick={handleEditCLick} >Edit</Button> */}
              <EditModalButton
                taskTitle={taskTitle}
                description={description}
                user={user}
                priorityLevel={priorityLevel}
                dueDate={dueDate}
                id={id}
              ></EditModalButton>
              <Button onClick={() => deleteTask(id, setTasks)}>Delete</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </div>

    // </Row>
  );
}

export default TaskCard;
