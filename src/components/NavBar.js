import React from 'react';

const NavBar = () => {
    return (
        <nav id='large-screen-nav'>
            <h1>lowgo</h1>
            <ul className='nav-link-container'>
                <li>
                    <a href='#' className='nav-link'>
                        Home
                    </a>
                </li>
                <li>
                    <a href='#' className='nav-link'>
                        About
                    </a>
                </li>
                <li>
                    <a href='#' className='nav-link'>
                        Plans
                    </a>
                </li>
                <li>
                    <a href='#' className='nav-link'>
                        Contact
                    </a>
                </li>
            </ul>
            <ul className='social-link-container'>
                <li>
                    <a href='#' className='social-link'>
                        <i class='fab fa-facebook'></i>
                    </a>
                </li>
                <li>
                    <a href='#' className='social-link'>
                        <i class='fab fa-instagram'></i>
                    </a>
                </li>
                <li>
                    <a href='#' className='social-link'>
                        <i class='fab fa-twitter'></i>
                    </a>
                </li>
                <li>
                    <a href='#' className='social-link'>
                        <i class='fab fa-linkedin'></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
