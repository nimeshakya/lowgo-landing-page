import React, { useState } from 'react';

const SmallNavbar = ({ showNavModal, setShowNavModal }) => {
    const [navbar, setNabvar] = useState(false);

    const changeBG = () => {
        if (window.scrollY >= 80) {
            setNabvar(true);
        } else {
            setNabvar(false);
        }
    };

    window.addEventListener('scroll', changeBG);

    const classControl = (navbar, showNavModal) => {
        if (navbar && showNavModal) {
            return 'small-screen-nav nav-scrolled nav-modal-opened';
        } else if (navbar) {
            return 'small-screen-nav nav-scrolled';
        } else if (showNavModal) {
            return 'small-screen-nav nav-modal-opened';
        } else {
            return 'small-screen-nav';
        }
    };

    return (
        <nav className={classControl(navbar, showNavModal)}>
            <h1 className={navbar ? 'nav-logo-active' : ''}>lowgo</h1>

            <div
                className={
                    navbar
                        ? 'nav-toggle-btn nav-toggle-btn-active'
                        : 'nav-toggle-btn'
                }
                onClick={() => setShowNavModal(!showNavModal)}
            >
                <i className='fas fa-bars'></i>
            </div>
        </nav>
    );
};

export default SmallNavbar;
