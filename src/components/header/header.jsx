import React from "react";
import './header.styles.css'
import { Link } from 'react-router-dom';
import { DropdownButton, Dropdown,  } from 'react-bootstrap';
require('bootstrap/dist/css/bootstrap.css');


const Header = () =>{
    return(
        <nav class="navbar navbar-expand-lg navbar-dark">
          <img src="https://cdn.pixabay.com/photo/2013/07/12/19/14/cinema-154392_1280.png" className="logo mx-5 my-3"/>
  <Link className="navbar-brand cinema-name" to="/">CINEMAGIC</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">

        {/*<li className="nav-item active">
            <Link to='/add-show' className='nav-link'> ADD SHOW </Link>
        </li>
        <li className="nav-item active">
            <Link to='/add-cinema-hall' className='nav-link'> ADD CINEMA HALL </Link>
        </li>*/}
        <li className="nav-item dropdown">
            <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1 my" className='nav-link' variant="dark">
                   SHOWS THIS WEEK
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                    <Dropdown.Item><Link to='/shows/MONDAY'  className='nav-link'> MONDAY </Link></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><Link to='/shows/TUESDAY' className='nav-link'>TUESDAY</Link></Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><Link to='/shows/WEDNESDAY' className='nav-link'>WEDNESDAY</Link></Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><Link to='/shows/THURSDAY' className='nav-link'>THURSDAY</Link></Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><Link to='/shows/FRIDAY' className='nav-link'>FRIDAY</Link></Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><Link to='/shows/SATURDAY' className='nav-link'>SATURDAY</Link></Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><Link to='/shows/SUNDAY' className='nav-link'>SUNDAY</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </li>
    </ul>
  </div>
</nav>
    )
}

export default Header;