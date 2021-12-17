import React, { useState } from 'react';

const NavModal = ({ showNavModal, setShowNavModal }) => {
    const [navbar, setNabvar] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const location = document.querySelector(target).offsetTop;

        window.scrollTo({
            left: 0,
            top: location,
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
                        <li>
                            <a
                                href='#section-welcome'
                                className={
                                    navbar
                                        ? 'small-nav-link nav-link-active'
                                        : 'small-nav-link'
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
                                    navbar
                                        ? 'small-nav-link nav-link-active'
                                        : 'small-nav-link'
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
                                    navbar
                                        ? 'small-nav-link nav-link-active'
                                        : 'small-nav-link'
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
                                    navbar
                                        ? 'small-nav-link nav-link-active'
                                        : 'small-nav-link'
                                }
                                onClick={handleClick}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <ul className='small-social-link-container'>
                        <li>
                            <a
                                href='#'
                                className={
                                    navbar
                                        ? 'small-social-link social-link-active'
                                        : 'small-social-link'
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
                                        ? 'small-social-link social-link-active'
                                        : 'small-social-link'
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
                                        ? 'small-social-link social-link-active'
                                        : 'small-social-link'
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
                                        ? 'small-social-link social-link-active'
                                        : 'small-social-link'
                                }
                            >
                                <i className='fab fa-linkedin'></i>
                            </a>
                        </li>
                    </ul>
                </section>
            )}
        </>
    );
};

export default NavModal;
