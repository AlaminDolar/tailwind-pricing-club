import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-2xl'>Give me Your all money</h2>
            <p>I will give you some bambo</p>
        </div>
    );
};

export default Header;