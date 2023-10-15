import MovieGalleryItem from "./movie-gallery-item";
import "./content.css";
import { getMovies } from "../data/movieRepository";
import { useEffect, useState, useCallback } from "react";

const Content = ({ imageArrayProps }) => {

  const [movieList, setMovieList] = useState([]);

    const fetchMovies = useCallback(async () => {
        const movieListData = await getMovies();
        setMovieList(movieListData)
    }, [])

    useEffect(() => {
        fetchMovies();
    }, []);

  return (
    <div className="content-wrapper">
      <div className="releases">
        <div className="content-header"> New Releases</div>
        <div className="gallery-container">
          {movieList.length > 0 && (movieList.map((item) => (
            <MovieGalleryItem
              movies={movieList}
              key={item.movieId}
              item={item}
            />
          )))}
        </div>
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
