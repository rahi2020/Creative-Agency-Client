import React from 'react';
import './Navbar.css';
import logo from '../../../images/logos/logo.png'



const Navbar = () => {
    return (
    <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <img id="navbar" class="navbar-nav mr-auto" src={logo} alt=""/>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link mr-5" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Our Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Our Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Contact Us</a>
      </li>
      <li class="nav-item">
        <button className="btn btn-dark"><a class="login" href="/login">Login</a></button>
      </li>
    </ul>
  </div>
</nav>
    );
};

export default Navbar;