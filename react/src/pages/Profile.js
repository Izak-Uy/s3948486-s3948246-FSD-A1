import "./Profile.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {
  updateUser,
  removeUser,
} from "../data/repository";
import { useState, useContext } from "react";
import {
  passwordEditValidate,
  emailEditValidate,
  nameEditValidate,
} from "../validation/ValidationRules";
import { useForm, useFormPassword, useFormName } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

function Profile() {
  const [user, setUser,, logoutUser] = useContext(UserContext);
  const [edit, SetEdit] = useState("none");
  const navigate = useNavigate();
  const { nvalues, nerrors, nhandleChange, nhandleSubmit } = useFormName(
    n_save,
    nameEditValidate
  );
  const { values, errors, handleChange, handleSubmit } = useForm(
    e_save,
    emailEditValidate
  );
  const { pw_values, pw_errors, pw_handleChange, pw_handleSubmit } =
    useFormPassword(pw_save, passwordEditValidate, user);

  async function n_save() {
    const newUser = await updateUser(user.user_id, user.email, nvalues.name, user.password_hash, user.password_hash);
    setUser(newUser);
    SetEdit(() => "none");
    nvalues.name = "";
  }
  async function e_save() {
    const newUser = await updateUser(user.user_id, values.email, user.first_name, user.password_hash, user.password_hash);

    setUser(newUser);
    SetEdit(() => "none");
    values.email = "";
  }

  async function pw_save() {
    const newUser = await updateUser(user.user_id, user.email, user.first_name, user.password_hash, pw_values.password);
    setUser(newUser);

    SetEdit(() => "none");
    pw_values.oldpassword = "";
    pw_values.password = "";
    pw_values.passwordConfirm = "";
  }

  function deleteAccount() {
    const deleteAcc = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (deleteAcc) {
      removeUser(user.user_id);
      logoutUser();
      navigate("/");
    }
  }

  return (
    <div>
      <Navbar />
      <div className="profile-wrapper">
        <div className="profile-header">
          <h1>Profile</h1>
        </div>
        <div className="profile-card">
          <div className="profile-details">
            <h2>Account Details</h2>
            <form>
              <div className="form-name">
                <label className="field-title">Name:</label>
                <input type="text" name="name" value={user ? user.first_name : "Loading..."} readOnly />
                <img
                  className="edit-icon"
                  src="edit.png"
                  alt="edit name"
                  onClick={() => SetEdit("name")}
                />
              </div>
              <div className="form-email">
                <label className="field-title">Email:</label>
                <input type="email" name="email" value={user ?user.email : "Loading..."} readOnly />
                <img
                  className="edit-icon"
                  src="edit.png"
                  alt="edit email"
                  onClick={() => SetEdit("email")}
                />
              </div>
              <div className="form-password">
                <label className="field-title">Password:</label>
                <input
                  type="password"
                  name="password"
                  value="********"
                  readOnly
                />
                <img
                  className="edit-icon"
                  src="edit.png"
                  alt="edit password"
                  onClick={() => SetEdit("password")}
                />
              </div>
              <span>
                Joined:{" "}
                {user ? user.createdAt : "Loading..."}
              </span>
            </form>
          </div>
          <div className="profile-extras">
            <button className="profile-delete" onClick={deleteAccount}>
              <img src="bin.png" className="delete-icon" alt="delete account" />
              Delete Account
            </button>
            <hr />
          </div>
          <div className="profile-form">
            {edit === "name" && (
              <form onSubmit={nhandleSubmit} noValidate>
                <h2>Edit Name</h2>
                <div className="form-name">
                  <label className="field-title">
                    Name:
                    <br />
                    <input
                      className={`input ${nerrors.name && "is-danger"}`}
                      type="text"
                      name="name"
                      placeholder="Enter new name"
                      onChange={nhandleChange}
                      value={nvalues.name || ""}
                      required
                    />
                    {nerrors.name && (
                      <p className="error-message is-danger">{nerrors.name}</p>
                    )}
                  </label>
                  <div className="profile-edit-save">
                    <input
                      type="submit"
                      value="Save"
                      className="name-submit"
                    />
                  </div>
                </div>
              </form>
            )}
            {edit === "email" && (
              <form onSubmit={handleSubmit} noValidate>
                <h2>Edit Email</h2>
                <div className="form-email">
                  <label className="field-title">
                    Email:
                    <br />
                    <input
                      className={`input ${errors.email && "is-danger"}`}
                      type="email"
                      name="email"
                      placeholder="Enter new email"
                      onChange={handleChange}
                      value={values.email || ""}
                      required
                    />
                    {errors.email && (
                      <p className="error-message is-danger">{errors.email}</p>
                    )}
                  </label>
                  <div className="profile-edit-save">
                    <input
                      type="submit"
                      value="Save"
                      className="email-submit"
                    />
                  </div>
                </div>
              </form>
            )}
            {edit === "password" && (
              <form noValidate onSubmit={pw_handleSubmit}>
                <h2>Edit Password</h2>
                <div className="form-password">
                  <label className="field-title">
                    Old Password:
                    <input
                      className={`input ${
                        pw_errors.oldpassword && "is-danger"
                      }`}
                      type="password"
                      placeholder="Enter old password"
                      name="oldpassword"
                      onChange={pw_handleChange}
                      value={pw_values.oldpassword || ""}
                      required
                    />
                    {pw_errors.oldpassword && (
                      <p className="error-message is-danger">
                        {pw_errors.oldpassword}
                      </p>
                    )}
                  </label>
                </div>
                <div className="form-password">
                  <label className="field-title">
                    New Password:
                    <input
                      className={`input ${pw_errors.password && "is-danger"}`}
                      type="password"
                      placeholder="Enter new password"
                      name="password"
                      onChange={pw_handleChange}
                      value={pw_values.password || ""}
                      required
                    />
                    {pw_errors.password && (
                      <p className="error-message is-danger">
                        {pw_errors.password}
                      </p>
                    )}
                  </label>
                </div>
                <div className="form-password">
                  <label className="field-title">
                    Confirm Password:
                    <input
                      className={`input ${
                        pw_errors.passwordConfirm && "is-danger"
                      }`}
                      type="password"
                      placeholder="Confirm password"
                      name="passwordConfirm"
                      value={pw_values.passwordConfirm || ""}
                      onChange={pw_handleChange}
                      required
                    />
                    {pw_errors.passwordConfirm && (
                      <p className="error-message is-danger">
                        {pw_errors.passwordConfirm}
                      </p>
                    )}
                  </label>
                  <div className="password-requirements">
                    <em>
                      Your password must contain:
                      <ul>
                        <li>8 or more characters</li>
                        <li>At least one uppercase letter</li>
                        <li>At least one lowercase letter</li>
                        <li>At least one special character</li>
                        <li>At least one number</li>
                      </ul>
                    </em>
                  </div>
                </div>
                <div className="profile-edit-save">
                  <input
                    type="submit"
                    value="Save"
                    className="password-submit"
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
