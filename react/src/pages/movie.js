import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./movie.css";
import ReviewEntry from "../components/review-entry";
import { useEffect, useCallback, useState } from "react";
import { getMovieByPK } from "../data/movieRepository";
import { useParams } from "react-router-dom";

function Movie() {

  const { movieId } = useParams();

  console.log(typeof movie_id);

  const [movieData, setMovieData] = useState([]);

    const fetchMovieData = useCallback(async () => {
        let movieItemData = await getMovieByPK(movieId);
        setMovieData(movieItemData);
    }, [])

    useEffect(() => {
        fetchMovieData();
    }, [])

  return (
    <>
      <Navbar />

      <div className="movie-page-wrapper">
        <div className="mov-page-header">
          <h1>{movieData.movieName}</h1>
        </div>

        <div className="movie-page-content">
          <div className="movie-page-content-image">
            <img src={movieData.movieImg}></img>
          </div>
          <div className="movie-page-content-description">
            <div className="movie-page-sessions-box">
              {movieData.sessions && movieData.sessions.length > 0 ?
                      <>
                          {movieData.sessions.map((item) => {
                              return (<div className="mov-sesh-time" key={movieData.movieName + item.sessionTime}>{item.sessionTime}</div>)
                          })}
                      </>
                      :
                          <>Bruh</>    
                      }
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
                <strong>Release Date: </strong>{movieData.movieReleaseDate}
              </p>
              <p>
                <strong>Director: </strong>{movieData.movieDirector}
              </p>
              <strong>Star Actors: </strong>
              <ul>

                {movieData.actors && movieData.actors.length > 0 ?
                        <>
                            {movieData.actors.map((item) => {
                                return (<li key={movieData.movieName + item.actorName}>{item.actorName}</li>)
                            })}
                        </>
                        :
                            <>Bruh</>    
                        }

                {/* <li>Cillian Murphy</li>
                <li>Emily Blunt</li>
                <li>Matt Damon</li>
                <li>Robert Downey Jr.</li>
                <li>Florence Pugh</li> */}
              </ul>
              <p>
                {movieData.movieDescription}
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
