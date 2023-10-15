import axios from "axios";
const API_URL = "http://localhost:4000/api";

async function getMovies() {
    const response = await axios.get(API_URL + "/movies");
    return response.data;
}

async function getMovieByPK(movie_id) {
    const response = await axios.get(API_URL + "/movies/" + movie_id);
    return response.data;
}

export {
    getMovies,
    getMovieByPK
}