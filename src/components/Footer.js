import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='lowgo-msg'>
                <h1>lowgo</h1>
                <p className='footer-msg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores quibusdam nemo dolorum laboriosam numquam dolorem
                </p>
                <ul className='footer-social-media'>
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
            </div>
            <div className='location-info'>
                <h4>Our Location</h4>
                <ul className='locations'>
                    <li class='location'>USA</li>
                    <li class='location'>Europe</li>
                    <li class='location'>South Asia</li>
                    <li class='location'>Indonesia</li>
                    <li class='location'>Australia</li>
                </ul>
            </div>
            <div className='contacts'>
                <h4>Contact Us</h4>
                <p>98-765-43210</p>
                <p>lowgo.dummy@gmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;
