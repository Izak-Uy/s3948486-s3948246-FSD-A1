import "./Profile.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { getUserLogin, updateLogin, setUser } from "../data/repository";
import { useState } from "react";
import { editValidate } from "../validation/ValidationRules";
import { useFormProfile } from "../hooks/useForm";

function Profile({ username, logoutUser, loginUser }) {
  const [edit, SetEdit] = useState(false);
  const toggleEdit = () => {
    SetEdit(!edit);
    values.email = username;
    values.oldpassword = "";
    values.password = "";
    values.passwordConfirm = "";
  };
  const login = getUserLogin(username);
  const { values, errors, handleChange, handleSubmit } = useFormProfile(
    save,
    editValidate,
    login
  );

  function save() {
    updateLogin(login.email, values.email, values.password);

    login.email = values.email;
    login.password = values.password;

    loginUser(values.email);
    setUser(values.email);
    SetEdit(false);
    values.oldpassword = "";
    values.password = "";
    values.passwordConfirm = "";
  }

  return (
    <div>
      <Navbar scrollTop={false} username={username} logoutUser={logoutUser} />
      <div className="profile-wrapper">
        <div className="profile-header">
          <h1>Profile</h1>
        </div>
        <div className="profile-form">
          {edit ? (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-email">
                <label className="field-title">
                  Email:
                  <input
                    className={`input ${errors.email && "is-danger"}`}
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    required
                  />
                  {errors.email && (
                    <p className="error-message is-danger">{errors.email}</p>
                  )}
                </label>
              </div>
              <div className="form-password">
                <label className="field-title">
                  Old Password:
                  <input
                    className={`input ${errors.oldpassword && "is-danger"}`}
                    type="password"
                    placeholder="Enter old password"
                    name="oldpassword"
                    onChange={handleChange}
                    value={values.oldpassword || ""}
                    required
                  />
                  {errors.oldpassword && (
                    <p className="error-message is-danger">
                      {errors.oldpassword}
                    </p>
                  )}
                </label>
              </div>
              <div className="form-password">
                <label className="field-title">
                  New Password:
                  <input
                    className={`input ${errors.password && "is-danger"}`}
                    type="password"
                    placeholder="Enter new password"
                    name="password"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  />
                  {errors.password && (
                    <p className="error-message is-danger">{errors.password}</p>
                  )}
                </label>
              </div>
              <div className="form-password">
                <label className="field-title">
                  Confirm Password:
                  <input
                    className={`input ${errors.passwordConfirm && "is-danger"}`}
                    type="password"
                    placeholder="Confirm password"
                    name="passwordConfirm"
                    value={values.passwordConfirm || ""}
                    onChange={handleChange}
                    required
                  />
                  {errors.passwordConfirm && (
                    <p className="error-message is-danger">
                      {errors.passwordConfirm}
                    </p>
                  )}
                </label>
              </div>
              <div>
                <input
                  type="submit"
                  value="Save"
                  className="form-submit"
                  onSubmit={save}
                />
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

export default Profile;
