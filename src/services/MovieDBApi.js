import Axios from 'axios';

const apiKey = '605382a7dc8cdf1b27caa631f83d6230';
const base_url = 'https://api.themoviedb.org/3';

const getTrending = () => {
    return Axios.get(`${base_url}/trending/all/day?api_key=${apiKey}`)
    .then(response => response.data.results)
}

const getMovieDetails = ( movieId ) => {
    return Axios.get(`${base_url}/movie/${movieId}?api_key=${apiKey}&language=en-US`)
    .then(response => response.data)
}

const getMovieCredits = ( movieId ) => {
    return Axios.get(`${base_url}/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`)
    .then(response => response.data.cast)
}

const getMovieReviews = ( movieId ) => {
    return Axios.get(`${base_url}/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`)
    .then(response => response.data.results)
}

const searchMovies = ( searchQuery ) => {
    return Axios.get(`${base_url}/search/movie?api_key=${apiKey}&query=${searchQuery}&language=en-US&page=1&include_adult=false`)
    .then(response => response.data.results)
}

const MovieDBApi = {
    getTrending,
    getMovieDetails,
    getMovieCredits,
    getMovieReviews,
    searchMovies
}
export default MovieDBApi;