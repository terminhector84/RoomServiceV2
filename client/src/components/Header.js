import React from 'react';

const Header = ({props}) =>{
    return (
        <div className="header">
            <div id="logo">
                <a href="/">Room Service</a>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#Breakfast">Breakfast</a></li>
                    <li><a href="#Lunch">Lunch</a></li>
                    <li><a href="#Dinner">Dinner</a></li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Header;