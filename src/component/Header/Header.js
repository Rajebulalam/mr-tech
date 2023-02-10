import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import TopHeader from './TopHeader';

const Header = () => {
    return (
        <header>
            <TopHeader></TopHeader>

            {/* Main Header */}
            <nav style={{
                borderTop: "1px solid #dddddd", borderBottom: '1px solid #dddddd'
            }} className='py-5'>
                <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto flex justify-between items-center'>
                    <div className='w-full'>
                        <Link className='font-extrabold text-4xl text-primary' to='/'>MR Tech</Link>
                    </div>
                    <div className='w-full text-right'>
                        <ul>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                                >Home</NavLink>
                                <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                                >Services</NavLink>
                                <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                                >Blog</NavLink>
                                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                                >About Us</NavLink>
                                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                                >Contact Us</NavLink>
                                <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                                >Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;