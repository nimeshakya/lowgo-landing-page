import React from 'react';

const About = () => {
    return (
        <section className='section-about'>
            <article className='app-info'>
                <h2>What is lowgo?</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nihil consequuntur, voluptatibus culpa odio mollitia
                    distinctio minima rerum modi quod ut, obcaecati rem officia
                    nisi maiores sapiente unde neque, iure vel est maxime
                    ratione hic aspernatur voluptas tempore. Quis dolores
                    dolore, odio illum quia animi autem impedit molestias eaque
                    perspiciatis vitae!
                </p>
            </article>
            <div className='dividing-line'></div>
            <article className='app-features'>
                <h2>what does it do?</h2>
                <div className='features-ans'>
                    <div className='feature-container'>
                        <p>
                            <i className='fas fa-user-friends'></i>
                        </p>
                        <div className='feature-details'>
                            <h4>Connect With People</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ducimus, quam? Laborum amet
                                aliquid exercitationem facilis!
                            </p>
                        </div>
                    </div>
                    <div className='feature-container'>
                        <p>
                            <i className='far fa-clock'></i>
                        </p>
                        <div className='feature-details'>
                            <h4 className='feature-title'>
                                Save Precious Time
                            </h4>
                            <p className='details'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ducimus, quam? Laborum amet
                                aliquid exercitationem facilis!
                            </p>
                        </div>
                    </div>
                    <div className='feature-container'>
                        <p>
                            <i className='far fa-money-bill-alt'></i>
                        </p>
                        <div className='feature-details'>
                            <h4 className='feature-title'>Save More Money</h4>
                            <p className='details'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ducimus, quam? Laborum amet
                                aliquid exercitationem facilis!
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default About;
