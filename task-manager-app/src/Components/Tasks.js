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
  }, [tasks]);

  return (
    <div style={{ margin: "2% auto 7%", width: "70%" }}>
      {tasks.map((task) => (
        <div style={{ padding: "10px" }}>
          <TaskCard
            key={task.id}
            taskTitle={task.taskTitle}
            user={task.user}
            dueDate={task.dueDate}
            priorityLevel={task.priorityLevel}
            description={task.description}
            status={task.status}
            //createdAt={task.createdAt}
            //updatedAt={task.updatedAt}
          />
        </div>
      ))}
    </div>
  );
}

export default TaskDisplayer;
