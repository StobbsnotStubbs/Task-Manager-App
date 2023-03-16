export function addUserToDb(userName) {
  const SERVER = process.env.REACT_APP_SERVER;
  console.log(userName);
  fetch(`${SERVER}/taskmanager/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: userName,
    }),
  })
    .then((response) => console.log(response))
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
