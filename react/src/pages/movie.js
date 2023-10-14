import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./movie.css";
import ReviewEntry from "../components/review-entry";
import { useEffect } from "react";
import { getMovies } from "../data/movieRepository";

function Movie() {

  useEffect(() => {
    async function fetchMovies() {
      const res = await getMovies();
      console.log(res);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <Navbar />

      <div className="movie-page-wrapper">
        <div className="mov-page-header">
          <h1>Oppenheimer</h1>
        </div>

        <div className="movie-page-content">
          <div className="movie-page-content-image">
            <img src="https://www.hollywoodreporter.com/wp-content/uploads/2022/07/Oppenheimer-Movie-Poster-Universal-Publicity-EMBED-2022-.jpg?w=1000"></img>
          </div>
          <div className="movie-page-content-description">
            <div className="movie-page-sessions-box">
              <div className="mov-sesh-time">6:45 PM</div>
              <div className="mov-sesh-time">7:30 PM</div>
              <div className="mov-sesh-time">9:00 PM</div>
            </div>

            <div className="movie-page-content-dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Cinema Location
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>Action</li>
                <li>Another action</li>
                <li>Something else here</li>
              </ul>
            </div>

            <img src="age-rating-icons/R.svg"></img>

            <div className="movie-page-content-description-text">
              <p>
                <strong>Release Date: </strong>20 July 2023
              </p>
              <p>
                <strong>Director: </strong>Christopher Nolan
              </p>
              <strong>Star Actors: </strong>
              <ul>
                <li>Cillian Murphy</li>
                <li>Emily Blunt</li>
                <li>Matt Damon</li>
                <li>Robert Downey Jr.</li>
                <li>Florence Pugh</li>
              </ul>
              <p>
                In 1942, amid World War II, U.S. Army General Leslie Groves
                recruits Oppenheimer to lead the Manhattan Project to develop an
                atomic bomb after he gives assurances that he has no communist
                sympathies.
              </p>
            </div>
          </div>
        </div>

        <ReviewEntry movieName={"movieName"} />
      </div>

      <Footer />
    </>
  );
}

export default Movie;
