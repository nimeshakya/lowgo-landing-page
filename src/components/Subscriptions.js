import React from 'react';

const Subscriptions = () => {
    return (
        <section id='section-subscription' className='section-subscription'>
            <h1>Subscriptions</h1>
            <div className='subscription-container'>
                <div className='subscription'>
                    <h4>Basic Plan</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio magni facilis quasi beatae tempora vitae.
                    </p>
                    <h6>$1.99</h6>
                    <button className='subscribe-btn'>subscribe</button>
                </div>
                <div className='subscription'>
                    <h4>Professional Plan</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aliquam debitis doloribus dignissimos,
                        exercitationem quaerat nemo.
                    </p>
                    <h6>$3.99</h6>
                    <button className='subscribe-btn'>subscribe</button>
                </div>
                <div className='subscription'>
                    <h4>Premium Plan</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Fugiat, similique. Iusto consequatur saepe
                        eligendi suscipit.
                    </p>
                    <h6>$5.99</h6>
                    <button className='subscribe-btn'>subscribe</button>
                </div>
            </div>
        </section>
    );
};

export default Subscriptions;
