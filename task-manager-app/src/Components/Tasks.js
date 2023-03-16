import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { useAuth } from "../Context";

const TaskDisplayer = () => {
  const [tasks, setTasks] = useState([]);

  const SERVER = process.env.REACT_APP_SERVER;

  useAuth();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${SERVER}/taskmanager/get-tasks`);
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [SERVER]);

  return (
    <div
      style={{
        margin: "2rem auto 3rem auto",
        width: "70%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {tasks.map((task) => (
        <div
          key={task._id}
          style={{ padding: "10px" }}
        >
          <TaskCard
            key={task._id}
            id={task._id}
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
};

export default TaskDisplayer;
