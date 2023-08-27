import "./Profile.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { getUserLogin } from "../data/repository";
import { useState } from "react";

export default function Profile({ username, logoutUser }) {
  const [edit, SetEdit] = useState(false);
  const toggleEdit = () => {
    SetEdit(!edit);
  };
  const login = getUserLogin(username);

  return (
    <div>
      <Navbar username={username} logoutUser={logoutUser} />
      <div className="profile-wrapper">
        <div className="profile-header">
          <h1>Profile</h1>
        </div>
        <div className="profile-form">
          {edit ? (
            <form>
              <div className="form-email">
                <label className="field-title">
                  Email:
                  <input type="email" name="email" value={username} />
                </label>
              </div>
              <div className="form-password">
                <label className="field-title">
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={login.password}
                  />
                </label>
              </div>
              <div className="form-password">
                <label className="field-title">
                  Confirm Password:
                  <input
                    type="password"
                    name="password"
                    value={login.password}
                  />
                </label>
              </div>
              <div>
                <button className="form-submit" onSubmit={toggleEdit}>
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <form>
              <div className="form-email">
                <label className="field-title">
                  Email:
                  <input type="email" name="email" value={username} readOnly />
                </label>
              </div>
              <div className="form-password">
                <label className="field-title">
                  Password:
                  <input
                    type="password"
                    name="password"
                    value="********"
                    readOnly
                  />
                </label>
              </div>
            </form>
          )}
        </div>
        <div className="profile-extras">
          <div className="profile-buttons">
            <button className="profile-edit " onClick={toggleEdit}>
              Edit Details
            </button>
            <button className="profile-delete">Delete Account</button>
          </div>
          <hr />
          <span>
            Joined: {getUserLogin(username).date || "Could not find join date."}
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
