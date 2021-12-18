import React, { useState } from 'react';

import { navLink, socialLink } from '../data';

const NavModal = ({ showNavModal, setShowNavModal }) => {
    const [navbar, setNabvar] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const location = document.querySelector(target).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 35,
        });
        setShowNavModal(!showNavModal);
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
        <>
            {showNavModal && (
                <section className='nav-modal'>
                    <h1>lowgo</h1>
                    <div
                        className='nav-close-btn'
                        onClick={() => setShowNavModal(!showNavModal)}
                    >
                        <i className='fas fa-times'></i>
                    </div>
                    <ul className='small-nav-link-container'>
                        {navLink.map((link) => {
                            const { id, url, name } = link;
                            return (
                                <li key={id}>
                                    <a
                                        href={url}
                                        className={
                                            navbar
                                                ? 'small-nav-link nav-link-active'
                                                : 'small-nav-link'
                                        }
                                        onClick={handleClick}
                                    >
                                        {name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className='small-social-link-container'>
                        {socialLink.map((link) => {
                            const { id, url, name, icon } = link;
                            return (
                                <li key={id} title={name}>
                                    <a
                                        href={url}
                                        className={
                                            navbar
                                                ? 'small-social-link social-link-active'
                                                : 'small-social-link'
                                        }
                                    >
                                        {icon}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            )}
        </>
    );
};

export default NavModal;
