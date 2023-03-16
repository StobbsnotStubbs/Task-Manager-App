import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { useUser } from "./UserProvider";

const TaskDisplayer = () => {
  const [tasks, setTasks] = useState([]);
  const SERVER = process.env.REACT_APP_SERVER;
  const user = useUser();

  useEffect(() => {
    if (!user) return;
    fetch(`${SERVER}/taskmanager/get-tasks`)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, [SERVER, user]);
  return (
    <div style={{ margin: "2rem auto 3rem auto", width: "70%", display: "flex", flexWrap: "wrap" }}>
      {tasks.map((task) => (
        <div key={task._id} style={{ padding: "10px" }}>
          <TaskCard
            id={task._id}
            taskTitle={task.taskTitle}
            user={task.user}
            dueDate={task.dueDate}
            priorityLevel={task.priorityLevel}
            description={task.description}
            status={task.status}
            setTasks={setTasks}
            //createdAt={task.createdAt}
            //updatedAt={task.updatedAt}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskDisplayer;
