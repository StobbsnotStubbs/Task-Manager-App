const editTask = (taskId, taskTitle, user, dueDate, priorityLevel, description) => {
  const SERVER = process.env.REACT_APP_SERVER;

  fetch(`${SERVER}/taskmanager/updateTask/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      taskTitle,
      user,
      dueDate,
      priorityLevel,
      description,
    }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Task updated successfully");
      } else {
        console.log("Task not updated");
      }
    })
    .catch((error) => console.error(error));
  return <div></div>;
};

 
export default editTask;
