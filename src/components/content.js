import { useState } from "react";
import { Image, Button } from "react-bootstrap";
import "./content.css";

const Content = ({ imageArrayProps }) => {
  // const imageArray = imageArrayProps;
  const [isHovered, setHover] = useState(false);
  const [isHovered1, setHover1] = useState(false);
  const [isHovered2, setHover2] = useState(false);
  const [isHovered3, setHover3] = useState(false);

  return (
    <div className="content-wrapper">
      <div className="releases">
        <div className="content-header"> New Releases</div>
        {/* {imageArray.map((MovImg, index) => ( */}
        <div className="content-container">
          <div
            className="movie-slot-container"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Image
              // key = {index}
              src="https://www.hollywoodreporter.com/wp-content/uploads/2022/07/Oppenheimer-Movie-Poster-Universal-Publicity-EMBED-2022-.jpg?w=1000"
            />
            {isHovered && (
              <>
                <div
                  className="mov-sesh-time-box"
                  style={{
                    display: "grid",
                    position: "absolute",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    columnGap: "25px",
                  }}
                >
                  <div
                    className="mov-sesh-time"
                    style={{
                      // position: "absolute",
                      top: "40%",
                      width: "100px",
                      backgroundColor: "#42416E",
                      textAlign: "center",
                      fontFamily: "Outward",
                      fontSize: "20px",
                      color: "white",
                      borderRadius: "20px",
                    }}
                  >
                    6:45 PM
                  </div>
                  <div
                    className="mov-sesh-time"
                    style={{
                      // position: "absolute",
                      top: "40%",
                      width: "100px",
                      backgroundColor: "#42416E",
                      textAlign: "center",
                      fontFamily: "Outward",
                      fontSize: "20px",
                      color: "white",
                      borderRadius: "20px",
                    }}
                  >
                    7:30 PM
                  </div>
                  <div
                    className="mov-sesh-time"
                    style={{
                      // position: "absolute",
                      top: "40%",
                      width: "100px",
                      backgroundColor: "#42416E",
                      textAlign: "center",
                      fontFamily: "Outward",
                      fontSize: "20px",
                      color: "white",
                      borderRadius: "20px",
                    }}
                  >
                    9:00 PM
                  </div>
                </div>
                <img
                  src="age-rating-icons/R.svg"
                  style={{
                    position: "absolute",
                    width: "25%",
                    top: "60%",
                    // innerHeight: "50%"
                  }}
                ></img>
                <a href="/movie">
                  <Button
                    className="mov-button"
                    size="sm"
                    style={{
                      position: "absolute",
                      top: "85%",
                      left: "0",
                      right: "0",
                      transform: "translateY(-85%)",
                      margin: "auto",
                      maxWidth: "7em",
                      backgroundColor: "#42416E",
                      outline: "none",
                    }}
                    variant="primary"
                  >
                    View Movie
                  </Button>
                </a>
              </>
            )}
          </div>
          <div
            className="movie-slot-container"
            onMouseOver={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
          >
            <Image src="https://m.media-amazon.com/images/I/61FsQdm0-ML._AC_UF894,1000_QL80_.jpg" />
            {isHovered1 && (
              <>
                <div
                  className="mov-sesh-time-box"
                  style={{
                    display: "grid",
                    position: "absolute",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    columnGap: "25px",
                  }}
                >
                  <div
                    className="mov-sesh-time"
                    style={{
                      // position: "absolute",
                      top: "40%",
                      width: "100px",
                      backgroundColor: "#42416E",
                      textAlign: "center",
                      fontFamily: "Outward",
                      fontSize: "20px",
                      color: "white",
                      borderRadius: "20px",
                    }}
                  >
                    6:45 PM
                  </div>
                  <div
                    className="mov-sesh-time"
                    style={{
                      // position: "absolute",
                      top: "40%",
                      width: "100px",
                      backgroundColor: "#42416E",
                      textAlign: "center",
                      fontFamily: "Outward",
                      fontSize: "20px",
                      color: "white",
                      borderRadius: "20px",
                    }}
                  >
                    7:30 PM
                  </div>
                  <div
                    className="mov-sesh-time"
                    style={{
                      // position: "absolute",
                      top: "40%",
                      width: "100px",
                      backgroundColor: "#42416E",
                      textAlign: "center",
                      fontFamily: "Outward",
                      fontSize: "20px",
                      color: "white",
                      borderRadius: "20px",
                    }}
                  >
                    9:00 PM
                  </div>
                </div>
                <img
                  src="age-rating-icons/R.svg"
                  style={{
                    position: "absolute",
                    width: "25%",
                    top: "60%",
                    // innerHeight: "50%"
                  }}
                ></img>
                <Button
                  className="mov-button"
                  size="sm"
                  style={{
                    position: "absolute",
                    top: "85%",
                    left: "0",
                    right: "0",
                    transform: "translateY(-85%)",
                    margin: "auto",
                    maxWidth: "7em",
                    backgroundColor: "#42416E",
                    outline: "none",
                  }}
                  variant="primary"
                >
                  View Movie
                </Button>
              </>
            )}
          </div>
          <div
            className="movie-slot-container"
            onMouseOver={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
          >
            <Image src="https://i.ebayimg.com/images/g/evYAAOSwszlkv5z3/s-l1600.jpg" />
            {isHovered2 && (
              <>
                <div
                  className="mov-sesh-time-box"
                  style={{
                    display: "grid",
                    position: "absolute",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    columnGap: "25px",
                  }}
                >
                  <div
                    className="mov-sesh-time"
                    style={{
                      // position: "absolute",
                      top: "40%",
                      width: "100px",
                      backgroundColor: "#42416E",
                      textAlign: "center",
                      fontFamily: "Outward",
                      fontSize: "20px",
                      color: "white",
                      borderRadius: "20px",
                    }}
                  >
                    6:45 PM
                  </div>
                  <div
                    className="mov-sesh-time"
                    style={{
                      // position: "absolute",
                      top: "40%",
                      width: "100px",
                      backgroundColor: "#42416E",
                      textAlign: "center",
                      fontFamily: "Outward",
                      fontSize: "20px",
                      color: "white",
                      borderRadius: "20px",
                    }}
                  >
                    7:30 PM
                  </div>
                  <div
                    className="mov-sesh-time"
                    style={{
                      // position: "absolute",
                      top: "40%",
                      width: "100px",
                      backgroundColor: "#42416E",
                      textAlign: "center",
                      fontFamily: "Outward",
                      fontSize: "20px",
                      color: "white",
                      borderRadius: "20px",
                    }}
                  >
                    9:00 PM
                  </div>
                </div>
                <img
                  src="age-rating-icons/R.svg"
                  style={{
                    position: "absolute",
                    width: "25%",
                    top: "60%",
                    // innerHeight: "50%"
                  }}
                ></img>
                <Button
                  className="mov-button"
                  size="sm"
                  style={{
                    position: "absolute",
                    top: "85%",
                    left: "0",
                    right: "0",
                    transform: "translateY(-85%)",
                    margin: "auto",
                    maxWidth: "7em",
                    backgroundColor: "#42416E",
                    outline: "none",
                  }}
                  variant="primary"
                >
                  View Movie
                </Button>
              </>
            )}
          </div>
          <div
            className="movie-slot-container"
            onMouseOver={() => setHover3(true)}
            onMouseLeave={() => setHover3(false)}
          >
            <Image src="https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_FMjpg_UX1000_.jpg" />
            {isHovered3 && (
              <>
                <div
                  className="mov-sesh-time-box"
                  style={{
                    display: "grid",
                    position: "absolute",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    columnGap: "25px",
                  }}
                >
                  <div
                    className="mov-sesh-time"
                    style={{
                      // position: "absolute",
                      top: "40%",
                      width: "100px",
                      backgroundColor: "#42416E",
                      textAlign: "center",
                      fontFamily: "Outward",
                      fontSize: "20px",
                      color: "white",
                      borderRadius: "20px",
                    }}
                  >
                    6:45 PM
                  </div>
                  <div
                    className="mov-sesh-time"
                    style={{
                      // position: "absolute",
                      top: "40%",
                      width: "100px",
                      backgroundColor: "#42416E",
                      textAlign: "center",
                      fontFamily: "Outward",
                      fontSize: "20px",
                      color: "white",
                      borderRadius: "20px",
                    }}
                  >
                    7:30 PM
                  </div>
                  <div
                    className="mov-sesh-time"
                    style={{
                      // position: "absolute",
                      top: "40%",
                      width: "100px",
                      backgroundColor: "#42416E",
                      textAlign: "center",
                      fontFamily: "Outward",
                      fontSize: "20px",
                      color: "white",
                      borderRadius: "20px",
                    }}
                  >
                    9:00 PM
                  </div>
                </div>
                <img
                  src="age-rating-icons/R.svg"
                  style={{
                    position: "absolute",
                    width: "25%",
                    top: "60%",
                    // innerHeight: "50%"
                  }}
                ></img>
                <Button
                  className="mov-button"
                  size="sm"
                  style={{
                    position: "absolute",
                    top: "85%",
                    left: "0",
                    right: "0",
                    transform: "translateY(-85%)",
                    margin: "auto",
                    maxWidth: "7em",
                    backgroundColor: "#42416E",
                    outline: "none",
                  }}
                  variant="primary"
                >
                  View Movie
                </Button>
              </>
            )}
          </div>
        </div>
        {/* ))} */}
      </div>
      <div className="about-us">
        <div className="about-us-text">
          <h1>Our Cinemas</h1>
          <div className="p-text">
            <p>
              Loop Cinema goes by the community known saying: We movies. We
              strive everyday to provide to our community with stellar new movie
              releases as well as old but gold cinema classics. We work hard
              with our community representatives to give everybody a welcoming
              and enjoyable cinema experience perfect for solo goers, romantic
              date nights and even family fun. No other cinema can even come
              close to match our level of dedication we give to our community
              and all we ask for return is your money.
            </p>
            <p>
              We have cinemas all across Melbourne, ranging from Warrnambool to
              Flagstaff to the city. You can be sure that around the corner we
              will be there. We are an inevitable and enjoyable experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
