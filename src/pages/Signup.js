import './Signup.css'
import Navbar from "../components/navbar";
import useForm from "../hooks/useForm"


function Signup() {
  const { values, handleChange, handleSubmit } = useForm(signup);

  function signup() {
    console.log(values);
  }

  return (
    <div>
      <Navbar scrollTop={false}/>
      <div className="signup-wrapper">
        <div className="signup-header">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="form-email">
              <label className="field-title">
                Email:
                <br />
                <input type="email" placeholder="Enter email" onChange={handleChange} value={values.email} required />
              </label>
            </div>
            <div className="form-password">
              <label className="field-title">
                Password:
                <br />
                <input type="password" placeholder="Enter password" onChange={handleChange} value={values.password} required />
              </label>
              <br />
              <label className="field-title">
                Confirm Password:
                <br />
                <input type="password" placeholder="Enter password" onChange={handleChange} value={values.passwordConfirm} required />
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
