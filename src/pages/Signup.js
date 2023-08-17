import './Signup.css'
import Navbar from "../components/navbar";

function Signup() {
  return (
    <div>
      <Navbar scrollTop={false}/>
      <div className="signup-wrapper">
        <h1> Sign Up</h1>
        <div className="signup-form">
          <form>
            <div className="form-email">
              <label className="field-title">
                Email:
                <br />
                <input type="email" placeholder="Enter email" />
              </label>
            </div>
            <div className="form-password">
              <label className="field-title">
                Password:
                <br />
                <input type="password" placeholder="Enter password" />
              </label>
              <br />
              <label className="field-title">
                Confirm Password:
                <br />
                <input type="password" placeholder="Enter password" />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
