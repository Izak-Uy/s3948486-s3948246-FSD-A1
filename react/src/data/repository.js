import axios from "axios";
const LOGINS_KEY = "logins";
const USER_KEY = "user";
const API_HOST = "http://localhost:4000/api";

async function getUsers() {
  const response = await axios.get(API_HOST + "/users");
  return response.data;
}

async function getUser(user_id) {
  const response = await axios.get(API_HOST + "/users/user/" + user_id);
  return response.data;
}

async function addUser(email, password, name, date) {

  const response = await axios.post(API_HOST + "/users", 
  {
    email: email,
    password: password,
    first_name: name,
    join_date: date
  });
  return response.data;

}

async function updateUser(user_id, new_email, new_name, old_password, new_password) {
  if (old_password !== new_password) {
    const response = await axios.put(API_HOST + "/users/user/" + user_id, 
    {
      email: new_email,
      new_password: new_password,
      first_name: new_name
    });
    return response.data;
  } else {
    const response = await axios.put(API_HOST + "/users/user/" + user_id, 
    {
      email: new_email,
      first_name: new_name,
      password_hash: old_password
    });
    return response.data;
  }
}

async function verifyLogin(email, password) {
  if (await checkEmailExists(email) === false) {
    return false;
  }

  const valid = await axios.post(API_HOST + "/users/validate", {
    email: email,
    password: password
  });

  return valid.data.valid;
}

async function loginUserDB(email, password) {
  const response = await axios.post(API_HOST + "/users/login", {
    email: email,
    password: password
  });

  if (response.data.user === null || response.data.valid === false) {
    return null;
  } else {
    return response.data.user;
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
  const response = await axios.delete(API_HOST + "/users/user/" + user_id);

  return response.data;
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
  updateUser,
};
