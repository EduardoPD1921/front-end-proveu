import React from 'react'

// Navbar css
import '../css/Navbar.css'

const Navbar = props => {
    return (
    <nav className="teal lighten-3">
        <div className="nav-wrapper">
            <a href="#" className="brand-logo"><img src='./logo.png'></img></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/">Home</a></li>
            </ul>
        </div>
    </nav>     
    )
}

export default Navbar