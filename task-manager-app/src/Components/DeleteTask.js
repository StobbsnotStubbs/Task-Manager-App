const deleteTask = (taskId) => {
  const SERVER = process.env.REACT_APP_SERVER;

  fetch(`${SERVER}/taskmanager/delete-tasks/${taskId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        console.log("Task deleted successfully");
      } else {
        console.log("Task not deleted");
      }
    })
    .catch((error) => console.error(error));

  return <div></div>;
};

export default deleteTask;
