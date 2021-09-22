import React from "react";
import './shows.styles.css'
import {Link} from "react-router-dom";
export const Shows = (props) =>{return(
    <div>

        <table className="table table-striped table-dark">
            <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Movie</th>
                <th scope="col">Date</th>
                <th scope="col">Starting at</th>
                <th scope="col">Price per ticket</th>
                <th scope="col">RESERVE TICKETS</th>
            </tr>
            </thead>
            <tbody>
            {props.shows.map(show => (
                <tr>
                    <td>{props.movies.filter(movie => movie.name === show.movieTitle)
                        .map(movie => (<img src={movie.image} alt='Movie' width="170px" height="220px"/>))}</td>
                    <td>{show.movieTitle}</td>
                    <td>{show.startDateTime.substring(0, 10)}</td>
                    <td>{show.startDateTime.substring(11, 19)}</td>
                        <td>{show.price.amount.toString().substring(0,3)} {show.price.currency}</td>
                    <td>{show.ended ?
                        <Link to={`/make-reservation/${show.id.id}`}>
                            <button className="disabled" disabled={true}>THE SHOW HAS FINISHED</button></Link> :  <Link to={`/make-reservation/${show.id.id}`}>
                        <button className="button-dark">MAKE A RESERVATION</button></Link>}</td>


                </tr>
            ))}
            </tbody>
        </table>

    </div>
)}


