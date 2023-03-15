const deleteTask = (taskId, setTasks) => {
  const SERVER = process.env.REACT_APP_SERVER;

  fetch(`${SERVER}/taskmanager/delete-tasks/${taskId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        console.log("Task deleted successfully");
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
      } else {
        console.log("Task not deleted");
      }
    })
    .catch((error) => console.error(error));

  return <div></div>;
};

export default deleteTask;
