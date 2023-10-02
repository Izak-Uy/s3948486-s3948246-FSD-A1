import { checkEmailExists, verifyLogin } from "../data/repository";

function signupValidate(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  } else if (checkEmailExists(values.email)) {
    errors.email = "Email address already exists";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  } else if (/ /.test(values.password)) {
    errors.password = "Password cannot contain spaces";
  } else if (!/\d/.test(values.password)) {
    errors.password = "Password must contain at least one number";
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = "Password must contain at least one lowercase letter";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "Password must contain at least one uppercase letter";
  } else if (!/\W/.test(values.password)) {
    errors.password = "Password must contain at least one special character";
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Password confirmation is required";
  } else if (values.passwordConfirm !== values.password) {
    errors.passwordConfirm = "Passwords do not match";
  }
  return errors;
}

function loginValidate(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  } else if (!checkEmailExists(values.email)) {
    errors.email = "Email address does not exist in our records";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (
    checkEmailExists(values.email) &&
    !verifyLogin(values.email, values.password)
  ) {
    errors.password = "Password is incorrect";
  }

  return errors;
}

function passwordEditValidate(values, login) {
  let errors = {};

  if (!values.oldpassword) {
    errors.oldpassword = "Old password is required";
  } else if (values.oldpassword !== login.password) {
    errors.oldpassword = "Old password is incorrect";
  }

  if (!values.password) {
    errors.password = "New password is required";
  } else if (values.password.length < 8) {
    errors.password = "New password must be 8 or more characters";
  } else if (values.password === values.oldpassword) {
    errors.password = "New password must be different from old password";
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Password confirmation is required";
  } else if (values.passwordConfirm !== values.password) {
    errors.passwordConfirm = "Passwords do not match";
  }
  return errors;
}

function emailEditValidate(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  return errors;
}

function nameEditValidate(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  return errors;
}

function reviewValidate(values) {
  let errors = {};

  if (!values.rating) {
    errors.rating = "Rating is required";
  }

  if (!values.review) {
    errors.review = "Review is required";
  }

  return errors;
}

export {
  signupValidate,
  loginValidate,
  emailEditValidate,
  passwordEditValidate,
  nameEditValidate,
  reviewValidate,
};
