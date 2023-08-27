import "./navbar.css";

const Navbar = ({ scrollTop, username, logoutUser }) => {
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
                <a className="nav-username">
                  <img className="profile-icon" src="profile-user.png" />
                  {username}
                </a>
              </li>
              <li className="nav-also-right">
                <a href="/" onClick={logoutUser}>
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
