import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
           <div  className="App">
           <nav className="navbar">
                <a className="anchor" href="/home">Home</a>
                <a className="anchor" href="/donation">Donation</a>
                <a className="anchor" href="/events">Events</a>
                <a className="anchor" href="/blog">Blog</a>
                <a className="anchor" href="/register">Register</a>
                <a className="anchor" href="/admin">Admin</a>
            </nav>
           </div>
       
        </div>
    );
};

export default Header;