import React, { useState, useEffect } from 'react';

const NavBar = () => {
    const [navbar, setNabvar] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const location = document.querySelector(target).offsetTop;

        window.scrollTo({
            left: 0,
            top: location,
        });
    };

    const changeBG = () => {
        if (window.scrollY >= 80) {
            setNabvar(true);
        } else {
            setNabvar(false);
        }
    };

    window.addEventListener('scroll', changeBG);

    return (
        <nav
            className={
                navbar ? 'large-screen-nav nav-scrolled' : 'large-screen-nav'
            }
        >
            <h1 className={navbar ? 'nav-logo-active' : ''}>lowgo</h1>
            <ul className='nav-link-container'>
                <li>
                    <a
                        href='#section-welcome'
                        className={
                            navbar ? 'nav-link nav-link-active' : 'nav-link'
                        }
                        onClick={handleClick}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href='#section-about'
                        className={
                            navbar ? 'nav-link nav-link-active' : 'nav-link'
                        }
                        onClick={handleClick}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href='#section-subscription'
                        className={
                            navbar ? 'nav-link nav-link-active' : 'nav-link'
                        }
                        onClick={handleClick}
                    >
                        Plans
                    </a>
                </li>
                <li>
                    <a
                        href='#contacts'
                        className={
                            navbar ? 'nav-link nav-link-active' : 'nav-link'
                        }
                        onClick={handleClick}
                    >
                        Contact
                    </a>
                </li>
            </ul>
            <ul className='social-link-container'>
                <li>
                    <a
                        href='#'
                        className={
                            navbar
                                ? 'social-link social-link-active'
                                : 'social-link'
                        }
                    >
                        <i className='fab fa-facebook'></i>
                    </a>
                </li>
                <li>
                    <a
                        href='#'
                        className={
                            navbar
                                ? 'social-link social-link-active'
                                : 'social-link'
                        }
                    >
                        <i className='fab fa-instagram'></i>
                    </a>
                </li>
                <li>
                    <a
                        href='#'
                        className={
                            navbar
                                ? 'social-link social-link-active'
                                : 'social-link'
                        }
                    >
                        <i className='fab fa-twitter'></i>
                    </a>
                </li>
                <li>
                    <a
                        href='#'
                        className={
                            navbar
                                ? 'social-link social-link-active'
                                : 'social-link'
                        }
                    >
                        <i className='fab fa-linkedin'></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
