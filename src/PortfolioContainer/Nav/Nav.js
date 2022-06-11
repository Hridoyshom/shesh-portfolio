import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div>
           <nav class="navbar">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#blogs">Blogs</a></li>
        </ul>
    </nav> 
        </div>
    );
};

export default Nav;