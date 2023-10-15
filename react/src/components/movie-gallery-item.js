import "./movie-gallery-item.css";
import { getMovieByPK } from "../data/movieRepository";
import { useEffect, useCallback, useState } from "react";

const MovieGalleryItem = ({item}) => {

    const [movieData, setMovieData] = useState([]);

    const fetchMovieData = useCallback(async () => {
        let movieItemData = await getMovieByPK(item.movieId);
        setMovieData(movieItemData);
    }, [])

    useEffect(() => {
        fetchMovieData();
    }, [])
    
    return (
        <>
            {movieData ? 
            <div className="gallery-item">
                <a href={'/movies/' + item.movieId}>
                    <img
                        className="gallery-item-img"
                        src={movieData.movieImg}
                        alt={movieData.movieName}
                    ></img>
                </a>
                
                <div className="gallery-item-content">
                    {movieData.sessions && movieData.sessions.length > 0 ?
                    <>
                        {movieData.sessions.map((item) => {
                            return (<div className="session-time-box" key={movieData.movieName + item.sessionTime}>{item.sessionTime}</div>)
                        })}
                    </>
                    :
                        <>Bruh</>    
                    }
                </div>
            </div> 
            : 
            <div>
                Loading...
            </div>
            }
        </>
    );
}

export default MovieGalleryItem