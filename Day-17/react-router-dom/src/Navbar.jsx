import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/'> home</Link>
            <Link to='about'> about</Link>
            <Link to='contact'> contact</Link>
            <Link to='feedback'> feedback</Link>
        </div>
    );
}

export default Navbar;
