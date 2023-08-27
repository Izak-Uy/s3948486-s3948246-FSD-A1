import "./footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

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
    <div className="footer-wrapper">
      <div className="footer-content">
        <ul>
          <li className="li-logo">
            <a href="/">
              <img src="logo2.png" alt="Loop Cinema logo"></img>
            </a>
          </li>
          <li>
            <button onClick={link_aboutus}>About Us</button>
          </li>
          <li className="footer-link-right">
            <a href="#top">Back to top</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
