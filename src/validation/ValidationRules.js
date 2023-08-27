import { checkEmailExists, verifyLogin } from "../data/repository";

function signupValidate(values) {
  let errors = {};

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
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Password confirmation is required";
  } else if (values.passwordConfirm !== values.password) {
    errors.passwordConfirm = "Passwords do not match";
  }
  return errors;
}

function signinValidate(values) {
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
    verifyLogin(values.email, values.password)
  ) {
    errors.password = "Password is incorrect";
  }

  return errors;
}

export { signupValidate, signinValidate };
