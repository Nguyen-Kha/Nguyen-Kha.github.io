import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return(
        <div className='nav'>
            <div className="navLogo">
                <Link to="/">Kha</Link>
            </div>
            <div className = 'navBar'>
                <ul className='navList'>
                    <li className='navItem'><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                    <li className='navItem'><NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')}>Experience</NavLink></li>
                    <li className='navItem'><NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink></li>
                    <li className='navItem'><NavLink to="/fun" className={({ isActive }) => (isActive ? 'active' : '')}>Fun</NavLink></li>
                    <li className='navItem'><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;