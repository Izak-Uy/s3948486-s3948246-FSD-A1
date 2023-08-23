function signupValidate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Password confirmation is required';
  } else if (values.passwordConfirm !== values.password) {
    errors.passwordConfirm = 'Passwords do not match';
  } 
  return errors;
};