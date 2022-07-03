import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return(
        <div className='nav'>
            <ul className='navList'>
                <li className='navItem'><Link to="/">Home</Link></li>
                <li className='navItem'><Link to="/about">About</Link></li>
                <li className='navItem'><Link to="/data">Data</Link></li>
                <li className='navItem'><Link to="/fun">Fun</Link></li>
                <li className='navItem'><Link to="/contact">Contact</Link></li>
            </ul>
            
        </div>
    );
}

export default NavBar;