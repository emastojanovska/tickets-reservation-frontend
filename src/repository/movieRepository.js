import axios from '../custom-axios/axios'

const MovieService = {
    fetchMovies: () => {
        return axios.get("/movies");
    }
}

export default MovieService;