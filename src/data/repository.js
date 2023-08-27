const LOGINS_KEY = "logins";
const USER_KEY = "user";

function getLogins() {
  return JSON.parse(localStorage.getItem(LOGINS_KEY));
}

function addLogin(email, password, date) {
  const logins = getLogins() || [];
  logins.push({ email, password, date });
  localStorage.setItem(LOGINS_KEY, JSON.stringify(logins));
}

function updateLogin(email, new_email, new_password) {
  const logins = getLogins();
  if (!logins) {
    return;
  }
  const check_email = (login) => login.email === email;
  const i = logins.findIndex(check_email);
  logins[i].email = new_email;
  logins[i].password = new_password;
  localStorage.setItem(LOGINS_KEY, JSON.stringify(logins));
}

function verifyLogin(email, password) {
  const logins = getLogins();
  if (!logins) {
    return false;
  }
  const check_login = (login) =>
    login.email === email && login.password === password;
  return logins.some(check_login);
}

function checkEmailExists(email) {
  const logins = getLogins();
  if (!logins) {
    return false;
  }
  const check_email = (login) => login.email === email;
  return logins.some(check_email);
}

function removeLogin(email) {
  const logins = getLogins();
  if (!logins) {
    return;
  }
  const check_email = (login) => login.email !== email;
  const new_logins = logins.filter(check_email);
  localStorage.setItem(LOGINS_KEY, JSON.stringify(new_logins));
}

function setUser(email) {
  localStorage.setItem(USER_KEY, email);
}

function getUser() {
  return localStorage.getItem(USER_KEY);
}

function removeUser() {
  localStorage.removeItem(USER_KEY);
}

function getUserLogin(email) {
  const logins = getLogins();
  if (!logins) {
    return;
  }
  const check_email = (login) => login.email === email;
  const user = logins.find(check_email);
  return user;
}

export {
  getLogins,
  addLogin,
  verifyLogin,
  checkEmailExists,
  removeLogin,
  setUser,
  getUser,
  removeUser,
  getUserLogin,
  updateLogin,
};
