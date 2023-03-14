const addTask = (title, user, dueDate, priorityLevel, description) => {
  const SERVER = process.env.REACT_APP_SERVER;
  fetch(`${SERVER}/taskmanager/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      taskTitle: title,
      user: user,
      dueDate: dueDate,
      priorityLevel: priorityLevel,
      description: description,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

export default addTask;
