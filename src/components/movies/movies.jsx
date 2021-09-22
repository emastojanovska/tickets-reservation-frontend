import React from "react";
import { Carousel } from "react-bootstrap";
import './movies.styles.css';

export const Movies = (props) =>{return(
<div>

<Carousel>
{props.movies.map((item)=>{
    return(
            <Carousel.Item >
                <div class="embed-responsive">
                    <iframe className="embed-responsive-item" width="1000" height="390" src={item.trailer} allowfullscreen></iframe>
                </div>
                <Carousel.Caption >
                    <h3 className=" font-weight-bolder">{item.name}</h3>
                </Carousel.Caption>
            </Carousel.Item>
    )
})}

</Carousel>



</div>
)}


