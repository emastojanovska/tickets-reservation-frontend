import axios_cinema from "../custom-axios/axios_cinema";

const CinemaService = {
    fetchCinemaHalls: () => {
        return axios_cinema.get("/cinema/2/cinema_halls")
    }
}

export default CinemaService;