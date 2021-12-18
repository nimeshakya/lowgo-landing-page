import React, { useState } from 'react';

import { navLink, socialLink } from '../data';

const NavBar = () => {
    const [navbar, setNabvar] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const location = document.querySelector(target).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 35,
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
                {navLink.map((link) => {
                    const { id, url, name } = link;
                    return (
                        <li key={id}>
                            <a
                                href={url}
                                className={
                                    navbar
                                        ? 'nav-link nav-link-active'
                                        : 'nav-link'
                                }
                                onClick={handleClick}
                            >
                                {name}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <ul className='social-link-container'>
                {socialLink.map((link) => {
                    const { id, url, name, icon } = link;
                    return (
                        <li key={id} title={name}>
                            <a
                                href={url}
                                className={
                                    navbar
                                        ? 'social-link social-link-active'
                                        : 'social-link'
                                }
                            >
                                {icon}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBar;
