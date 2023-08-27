const LOGINS_KEY = "logins";

function getLogins() {
  return JSON.parse(localStorage.getItem(LOGINS_KEY));
}

function addLogin(email, password) {
  const logins = getLogins() || [];
  logins.push({ email, password });
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

export { getLogins, addLogin, verifyLogin, checkEmailExists, removeLogin };
