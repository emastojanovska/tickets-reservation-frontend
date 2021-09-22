import './App.css';
import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import MovieService from './repository/movieRepository';
import CinemaService from "./repository/cinemaRepository";
import Header from './components/header/header';
import {AddCinemaHallForm} from "./components/forms/add-cinema-hall.form"
import ShowService from "./repository/showrepository";
import {HomePage} from "./pages/home_page";
import {AddShowForm} from "./components/forms/add-show.form"
import {MakeReservation} from "./components/forms/make-reservation.form"
import {Reservation} from "./components/reservation/reservation";
import {ToastContainer, toast, Zoom, Bounce} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {ShowsPage} from "./pages/shows_page";



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies: [],
      cinemaHalls: [],
      shows: [],
      todayShows: [],
      reservations: [],
      weeklyShows: []
    }
  }


  loadMovies = () =>{
    MovieService.fetchMovies()
    .then((data)=>{
      this.setState({
        movies: data.data
      })
    })
  }

  loadCinemaHalls = () =>{
    CinemaService.fetchCinemaHalls()
        .then((data) => {
          this.setState({
            cinemaHalls: data.data
          })
        })
  }

  loadShows = () =>{
    ShowService.fetchShows()
        .then((data) => {
          this.setState({
            shows: data.data
          })
        })
  }

  loadReservationsForShow = (id) => {
      ShowService.fetchReservationsForShow(id)
          .then((data) => {
              this.setState({
                  reservations: data.data
              })
          })
  }

    loadTodayShows = () =>{
        ShowService.fetchTodayShows()
            .then((data) => {
                this.setState({
                    todayShows: data.data
                })
            })
    }

  componentDidMount(){
    this.loadMovies()
    this.loadCinemaHalls()
    this.loadShows()
      this.loadTodayShows()
      this.filterWeekly("SUNDAY");
  }

  addShow = (startDate, endDate, amount, currency, cinemaHall, movie) => {
    ShowService.addShow(startDate, endDate, amount, currency, cinemaHall, movie)
        .then(() => {
          this.loadShows();
        });
  }

  makeReservation = (id, customerName, telephone, ticketsNumber, loveTicketsNumber) => {
      ShowService.makeReservation(id, customerName, telephone, ticketsNumber, loveTicketsNumber)
          .then(() => {
              this.loadShows();
          })
  }

  filterWeekly = (day) =>{
      ShowService.filterWeekly(day)
          .then((data) => {
              this.setState({
                  weeklyShows: data.data
              })
          })
  }
  render(){

  return (
    <div className="App">
        <ToastContainer />
       <Header></Header>
      <Switch>
        <Route exact path='/' render={() => (<HomePage movies={this.state.movies}
        shows={this.state.todayShows}></HomePage>)}></Route>
      {<Route exact path='/add-show' render={() => (<AddShowForm movies={this.state.movies}
                                                                  cinemaHalls = {this.state.cinemaHalls}
                                                                  onAddShow = {this.addShow}></AddShowForm>)}></Route>}}
        <Route exact path='/add-cinema-hall' render={() => (<AddCinemaHallForm></AddCinemaHallForm>)}></Route>
        <Route exact path='/make-reservation/:id' render={(props) => (<MakeReservation {...props}
                                                                                        allReservations={this.loadReservationsForShow}
                                                                                        onMakeReservation={this.makeReservation}
                                                                                        reservation={this.reservation}
                                                                                        shows={this.state.shows}></MakeReservation>)}></Route>
        <Route exact path='/reservation/:id/:name/:contact' render={(props) => (<Reservation {...props} allReservations={this.loadReservationsForShow}  reservations={this.state.reservations}></Reservation>)}></Route>
          <Route exact path='/shows/:day' render={(props) => (<ShowsPage {...props}
          weeklyShows = {this.state.weeklyShows} getFilteredShows = {this.filterWeekly} movies={this.state.movies} ></ShowsPage>)}></Route>
      </Switch>
    </div>
  );
  }
}

export default App;
