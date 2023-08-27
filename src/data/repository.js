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

function setUser(username) {
  localStorage.setItem(USER_KEY, username);
}

function getUser() {
  return localStorage.getItem(USER_KEY);
}

function removeUser() {
  localStorage.removeItem(USER_KEY);
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
};
