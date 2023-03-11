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
    <div>
      {tasks.map((task) => (
        <TaskCard />
      ))}
    </div>
  );
}

export default TaskDisplayer;
