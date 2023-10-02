import "./movie-gallery-item.css";
// import { Link } from "react-router-dom";

const MovieGalleryItem = ({item, imageArrayProps}) => {

    return (
        <div className="gallery-item">
            <a href={'/movies/' + item.movieName}>
                <img
                    className="gallery-item-img"
                    src={item.imageSrc}
                    alt={item.movieName}
                ></img>
            </a>

            {/* <Link
                to={{
                    pathname: `/movies/${item.movieName}`,
                    state: { id: item.id, imageSrc: item.imageSrc, movieName: item.movieName }
                }}
            >
            </Link> */}
            
            <div className="gallery-item-content">
                <div className="session-time-box">{item.sessionTimes[0]}</div>
                <div className="session-time-box">{item.sessionTimes[1]}</div>
                <div className="session-time-box">{item.sessionTimes[2]}</div>
            </div>
        </div>
    );
}

export default MovieGalleryItem