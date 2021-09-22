import axios from '../custom-axios/axios'

const ShowService = {
    fetchShows: () => {
        return axios.get("/shows");
    },
    fetchTodayShows: () => {
        return axios.get("/shows/today")
    },
    fetchReservationsForShow:(id) => {
        return axios.get(`/shows/${id}/reservations`)
    },
    makeReservation: (id, customerName, telephone, ticketsNumber, loveTicketsNumber) =>{
        const params = new URLSearchParams({
            customerName: customerName,
            telephone: telephone,
            ticketsNumber: ticketsNumber,
            loveTicketsNumber: loveTicketsNumber
        }).toString();
        return axios.post(`/shows/${id}/reservation?` + params, {},
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }
           ).then(response => {
            console.log(response)
        })
            .catch((error) => console.log( error.response.request._response ) );
    },
    filterWeekly: (day) =>{
        const params = new URLSearchParams({
           day: day
        }).toString();
        return axios.get('/shows/filter_weekly?' + params);
    }
    ,
    addShow: (startDate, endDate, amount, currency, cinemaHall, movie) => {
        var querystring = require('querystring');
        return axios.post("/shows/create_show", querystring.stringify({
                "startDateTime": startDate,
                "endDateTime": endDate,
                "amount": amount,
                "currency": currency,
                "cinemaHall": cinemaHall,
                "movie": movie
            }),
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    ).then(response => {
            console.log(response)
        })
            .catch((error) => console.log( error.response.request._response ) );
    }
}

export default ShowService;