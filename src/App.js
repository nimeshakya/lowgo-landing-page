import React from 'react';

import NavBar from './components/NavBar';
import WelcomePage from './components/WelcomePage';
import About from './components/About';
import Subscriptions from './components/Subscriptions';
import Footer from './components/Footer';

const App = () => {
    return (
        <main>
            <NavBar />
            <WelcomePage />
            <About />
            <Subscriptions />
            <Footer />
        </main>
    );
};

export default App;
