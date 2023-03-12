import React, { useState } from "react";

const addTask = async (props) => {
  const [tasks, setTasks] = useState([]);
  const data = await fetch("https://localhost:3001/taskmanager/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      taskTitle: props.title,
      user: props.user,
      dueDate: props.dueDate,
      priorityLevel: props.priorityLevel,
      description: props.description,
    }),
  }).then((response) => response.json());
  setTasks([...tasks, data]);
};

export default addTask;
