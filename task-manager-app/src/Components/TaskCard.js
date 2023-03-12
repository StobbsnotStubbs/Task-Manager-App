import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function TaskCard(props) {
  const taskTitle = props.taskTitle;
  const user = props.user;
  const dueDate = props.dueDate;
  const priorityLevel = props.priorityLevel;
  const description = props.description;
  const status = props.status;
  //const createdAt = props.createdAt.replace(/(T)/, " ");
  //const updatedAt = props.updatedAt;

  return (
    <Row xs={"auto"} md={"auto"} lg={"auto"} xl={"auto"} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>TEST{taskTitle}</Card.Title>
              <Card.Text>TEST{description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Assigned to:{user}</ListGroup.Item>
              <ListGroup.Item>Priority:{priorityLevel}</ListGroup.Item>
              <ListGroup.Item>Status:{status}</ListGroup.Item>
              <ListGroup.Item>Due Date:{dueDate}</ListGroup.Item>
              {/* <ListGroup.Item>Created At:{createdAt}</ListGroup.Item> */}
              {/* <ListGroup.Item>Updated At:{updatedAt}</ListGroup.Item> */}
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Edit</Card.Link>
              <Card.Link href="#">Delete</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default TaskCard;
