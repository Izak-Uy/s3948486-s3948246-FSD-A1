import "./Signup.css";
import Navbar from "../components/navbar";
import useForm from "../hooks/useForm";
import { signupValidate } from "../validation/ValidationRules";
import { addLogin, getLogins } from "../data/repository";

function Signup() {
  const { values, errors, handleChange, handleSubmit } = useForm(
    signup,
    signupValidate
  );

  function signup() {
    addLogin(values.email, values.password);
    console.log(getLogins());
  }

  return (
    <div>
      <Navbar scrollTop={false} />
      <div className="signup-wrapper">
        <div className="signup-header">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-email">
              <label className="field-title">
                Email:
                <br />
                <input
                  className={`input ${errors.email && "is-danger"}`}
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                  value={values.email || ""}
                  required
                />
                {errors.email && (
                  <p className="error-message is-danger">{errors.email}</p>
                )}
              </label>
            </div>
            <div className="form-password">
              <label className="field-title">
                Password:
                <br />
                <input
                  className={`input ${errors.password && "is-danger"}`}
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  onChange={handleChange}
                  value={values.password || ""}
                  required
                />
                {errors.password && (
                  <p className="error-message is-danger">{errors.password}</p>
                )}
              </label>
              <br />
              <label className="field-title">
                Confirm Password:
                <br />
                <input
                  className={`input ${errors.passwordConfirm && "is-danger"}`}
                  type="password"
                  placeholder="Enter password"
                  name="passwordConfirm"
                  onChange={handleChange}
                  value={values.passwordConfirm || ""}
                  required
                />
                {errors.passwordConfirm && (
                  <p className="error-message is-danger">
                    {errors.passwordConfirm}
                  </p>
                )}
              </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
