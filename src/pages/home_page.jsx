import React from 'react';
import {Movies} from '../components/movies/movies'
import {Shows} from "../components/shows/shows";

export const HomePage = (props) =>{
   return(
       <div>
           <Movies movies={props.movies}></Movies>
           <h3 className="my-5">TODAY SHOWS</h3>
           <Shows movies={props.movies} shows={props.shows}> </Shows>
       </div>

   )
}