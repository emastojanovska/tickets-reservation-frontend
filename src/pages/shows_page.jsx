import React from 'react'
import {Shows} from "../components/shows/shows";

export class ShowsPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            day: props.match.params.day,
            weeklyShows: props.weeklyShows
        }

    }

    loadShows = async () =>{
        const{ day } = this.props.match.params;
        const{ getFilteredShows } = this.props;
        await getFilteredShows(day);
    }

    componentDidMount() {
        this.loadShows()
    }

    componentDidUpdate() {
        this.loadShows()
    }

    render() {
        return (
            <div>

                <h3 className="my-3">{this.props.match.params.day} SHOWS</h3>
              {/*  {this.props.weeklyShows.map(show => (<div>{show.movieTitle}</div>))}*/}
               {<Shows shows={this.props.weeklyShows} movies={this.props.movies} ></Shows>}
            </div>
        )
    }
}