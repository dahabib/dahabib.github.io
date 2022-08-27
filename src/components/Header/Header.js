import React from 'react';
import Hero from '../Hero/Hero';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <section className="text-gray-600 body-font bg-blue-300">
            <Navigation />
            <Hero />
        </section>
    );
};

export default Header;