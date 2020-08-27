import React from 'react';

import './NavBar.css';
const NavBar = () => {
    return (
        <div className="header">
        <div className="logo"> 
            <h4>logo</h4>
        </div>
       
        <div className="menu "> 
            <a href="#">Home</a>
            <a href="#">Course</a>
            <a href="#">Blog</a>
        </div>
        <div className="search-box">
            <input type="text"/>
            <button className="btn btn-success mx-2">Search</button>
        </div>
    </div>
    );
};

export default NavBar;