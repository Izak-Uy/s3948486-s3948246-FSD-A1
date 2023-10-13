import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { getUser } from "../data/repository";

const Navbar = ({ scrollTop, user, logoutUser }) => {
  const navigate = useNavigate();

  function logout() {
    logoutUser();
    navigate("/");
  }

  function link_aboutus() {
    setTimeout(() => {
      navigate("/");
      const section = document.getElementsByClassName("about-us")[0];
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }


  return (
    <div className="navbar-container">
      <div className="navbar-nobootstrap">
        <ul>
          <li className="li-logo">
            <a href="/">
              <img src="logo2.png" alt="Loop Cinema logo"></img>
            </a>
          </li>
          <li>
            <button onClick={link_aboutus}>About Us</button>
          </li>
          {user !== null ? (
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
                  {user.first_name}
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
