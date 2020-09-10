import React from 'react';

import logo from '../assets/logo_254.png';

export default function Header({

}){
    return(
        <nav className="Header">
            <div>
                <img className="logo" src={logo} alt="Webbi's logo" />
            </div>
            <div className="Links-wrapper">
                <div><a href="#ourwork">Our Work</a></div>
                <div><a href="#about">About</a></div>
                <div><a href="#faq">FAQ</a></div>
                <div><a href="#contact">Contact</a></div>
            </div>
        </nav>
    )
}
