import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ scrollTop, username, logoutUser }) => {
  const navigate = useNavigate();

  function logout() {
    logoutUser();
    navigate("/");
  }

  return (
    <div className="navbar-container">
      <div className="navbar-nobootstrap">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Movies</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          {username === null ? (
            <>
              <li className="nav-link-right">
                <a href="/signup">Sign Up</a>
              </li>
              <li className="nav-also-right">
                <a href="/login">Sign In</a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-link-right">
                <a className="nav-username" href="/profile">
                  <img
                    className="profile-icon"
                    src="profile-user.png"
                    alt="Profile Icon"
                  />
                  {username.split("@")[0]}
                </a>
              </li>
              <li className="nav-also-right">
                <a href="/" onClick={logout}>
                  Sign Out
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
      {scrollTop ? (
        <div className="hidden-element">
          <p name="top"></p>
        </div>
      ) : null}
    </div>
  );
};

Navbar.defaultProps = { scrollTop: true };

export default Navbar;
