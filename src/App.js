import React, { useState } from 'react';

import NavBar from './components/NavBar';
import WelcomePage from './components/WelcomePage';
import About from './components/About';
import Subscriptions from './components/Subscriptions';
import Footer from './components/Footer';

import SmallNavbar from './components/SmallNavbar';
import NavModal from './components/NavModal';

const App = () => {
    const [showNavModal, setShowNavModal] = useState(false);

    return (
        <main>
            <NavBar />
            <SmallNavbar
                showNavModal={showNavModal}
                setShowNavModal={setShowNavModal}
            />
            <NavModal
                showNavModal={showNavModal}
                setShowNavModal={setShowNavModal}
            />
            <WelcomePage />
            <About />
            <Subscriptions />
            <Footer />
        </main>
    );
};

export default App;
