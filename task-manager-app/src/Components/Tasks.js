import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

function TaskDisplayer(req, res) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/taskmanager/get-tasks`)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);
  return (
    <div style={{ margin: "2% auto 7%", width: "70%" }}>
      {tasks.map((task) => (
        <div style={{ padding: "10px" }}>
          <TaskCard />
        </div>
      ))}
    </div>
  );
}

export default TaskDisplayer;
