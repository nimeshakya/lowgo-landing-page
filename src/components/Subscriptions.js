import React from 'react';

import { subscriptionPlans } from '../data';

const Subscriptions = () => {
    return (
        <section id='section-subscription' className='section-subscription'>
            <h1>Subscriptions</h1>
            <div className='subscription-container'>
                {subscriptionPlans.map((plan) => {
                    const { id, name, text, price } = plan;
                    return (
                        <div className='subscription' key={id}>
                            <h4>{name}</h4>
                            <p>{text}</p>
                            <h6>${price}</h6>
                            <button className='subscribe-btn'>subscribe</button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Subscriptions;
