import axios from "axios";
const LOGINS_KEY = "logins";
const USER_KEY = "user";
const API_HOST = "http://localhost:4000/api";

async function getUsers() {
  return await axios.get(API_HOST + "/users");
}

async function getUser(user_id) {
  return await axios.get(API_HOST + "/users/user/" + user_id);
}

async function addUser(email, password, name, date) {

  const user = await axios.post(API_HOST + "/users", 
  {
    email: email,
    password_hash: password,
    first_name: name,
    join_date: date
  });
  return user;

}

async function updateUsers(user_id, new_email, new_name, new_password) {
  const user = await axios.put(API_HOST + "/users/user/" + user_id, 
  {
    email: new_email,
    password_hash: new_password,
    first_name: new_name
  });
  return user;
}

async function verifyLogin(email, password) {
  if (await checkEmailExists(email) === false) {
    return false;
  }

  const valid = await axios.post(API_HOST + "/users/validate", {
    email: email,
    password: password
  });

  return valid.valid;
}

async function loginUserDB(email, password) {
  const response = await axios.post(API_HOST + "/users/login", {
    email: email,
    password: password
  });

  if (response === null || response.valid === false) {
    return null;
  } else {
    console.log(response);
    return response.user;
  }
}

async function checkEmailExists(email) {
  const response = await axios.get(API_HOST + "/users/emails");
  const users = response.data;
  if (!users || users.length === 0) {
    return false;
  }

  const exists = users.some(user => user.email === email);
  return exists;
}

async function removeUser(user_id) {
  const user = await axios.delete(API_HOST + "/users/user/" + user_id);

  return user;
}

function setLoggedIn(user_id) {
  localStorage.setItem(USER_KEY, user_id);
}

function getLoggedIn() {
  return localStorage.getItem(USER_KEY);
}

function removeLoggedIn() {
  localStorage.removeItem(USER_KEY);
}


export {
  getUsers,
  getUser,
  addUser,
  verifyLogin,
  loginUserDB,
  checkEmailExists,
  removeUser,
  setLoggedIn,
  getLoggedIn,
  removeLoggedIn,
  updateUsers,
};
